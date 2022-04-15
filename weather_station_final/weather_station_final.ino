/**
 * @file weather_station_final.ino
 * @author Steven Kamwaza and Maxwell Mpinganjira (https://mini-automated-weather-station.herokuapp.com/)
 * @brief  Hardware code for our weather station dashboard
 * @version 0.1
 * @date 2022-04-13
 * 
 * @copyright Copyright (c) 2022
 * 
 */
#include <Arduino.h>
#include <ESP8266WiFi.h>
#include <Firebase_ESP_Client.h>
#include "DHT.h"             
#include <ThingSpeak.h>
#include <NTPClient.h>
#include <WiFiUdp.h>

#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

/**
 * @brief define Wifi network credentials
 * 
 */
#define WIFI_SSID "chewea"
#define WIFI_PASSWORD "10345679"
/**
 * @brief Firebase project API Key
 * 
 */
#define API_KEY "AIzaSyDEP9Sp-gquKxZrQ1zxeCPpf4bNXIn2Kmc"
/**
* @brief  Authorized Email
*/
#define USER_EMAIL "stevenkamwaza@gmail.com"
#define USER_PASSWORD "stevkamwa"

/**
 * @brief RTDB RTDB URL
 * 
 */
#define DATABASE_URL "projectdb-e7c09-default-rtdb.europe-west1.firebasedatabase.app"

// Define Firebase objects
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

/**
 * @brief Variable to save USER UID
 * 
 */
String uid;

/**
 * @brief Database main path (to be updated in setup with the user UID)
 * 
 */
String dataPath;
// Database child nodes
/**
 * @brief Database tempath
 * 
 */
String tempPath = "/temperature";
String humPath = "/humidity";
String rainPath = "/rain";
String timePath = "/timestamp";
String lightPath = "/light";

// Parent Node (to be updated in every loop)
String parentPath;
FirebaseJson json;
// NTP Client to get time
WiFiUDP ntpUDP;
NTPClient timeClient(ntpUDP, "pool.ntp.org");
// Variable to save current epoch time
int timestamp;

//ldr sensor
const int LDR = A0;
//alarm variables 
int buzzer = D1;
long startBuzzer, stopBuzzer;
bool flag = false;
unsigned long buzzerTime = 0;
#define rain  D0
boolean isRaining;

/**
 * @brief Get DHT11 object.
* @return define D$ as a reading pin.
*/
DHT dht(D4, DHT11);
WiFiClient client;
long thingsChannelNum = 1635256;
const char * thingWriteAPI = "95IR0A340G6P54M3";

/**
 * @brief Defining a buzzer
 * @returns sound
 */
void runBuzzer(){
  //tone(buzzer,2000,500);
  digitalWrite (buzzer, HIGH); //turn buzzer on
  delay(2000);
  digitalWrite (buzzer, LOW);  //turn buzzer off
 }
 
/**
 * @brief connecting Wifi
 * @returns nothing but connection
 */
void connectToWiFi() {
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi ..");
  /**
   * @brief When not connected loop
   * 
   */
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.print('Connected to  ');
  Serial.print(WiFi.localIP());
  Serial.println();
}

/**
 * @brief Get the Time object
 * 
 * @return unsigned long 
 */
unsigned long getTime() {             
    timeClient.update();
    unsigned long now = timeClient.getEpochTime();
    return now;
}

unsigned long sendDataPrevMillis = 0;
unsigned long timerDelay = 180000;

/**
 * @brief setUp the esp8266
 * 
 */
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  /**
   * @brief Construct a new connect To Wi Fi object
   * 
   */
  connectToWiFi();
  /**
   * @brief Construct a new run Buzzer object
   * 
   */
  runBuzzer();
  /**
   * @brief begin a time
   * 
   */
  timeClient.begin();
 
  
  /**
   * @brief Dht begin
   * 
   */
  dht.begin();
  /**
   * @brief Construct a new pin Mode object
   * 
   */
  pinMode(buzzer,OUTPUT);
  /**
   * @brief ThingSpeak Begin
   * 
   */
  ThingSpeak.begin(client);

  /**
   * @brief Assign the api key
   * 
   */
  config.api_key = API_KEY;

 /**
  * @brief config user email
  * 
  */
  auth.user.email = USER_EMAIL;
  /**
   * @brief config user password
   * 
   */
  auth.user.password = USER_PASSWORD;

  /**
   * @brief config database url
   * 
   */
  config.database_url = DATABASE_URL;

/**
 * @brief Enable Firebase to reconnect
 * 
 */
  Firebase.reconnectWiFi(true);
  fbdo.setResponseSize(4096);
  
  /**
   * @brief Assign the callback function for the long running token generation
   * 
   */
   config.token_status_callback = tokenStatusCallback; 

  // Assign the maximum retry of token generation
  config.max_token_generation_retry = 5;

  // Initialize the library with the Firebase authen and config
  Firebase.begin(&config, &auth);

  // Getting the user UID might take a few seconds
  Serial.println("Authorized User UID");
  /**
   * @brief waiting for autherixatipn
   * 
   */
  while ((auth.token.uid) == "") {
    Serial.print('.');
    delay(1000);
  }
  
  // Print user UID
  uid = auth.token.uid.c_str();
  Serial.print("User UID: ");
  Serial.println(uid);
  // Update database path
  dataPath = "/weatherdata";
  
}

void loop() {
  // put your main code here, to run repeatedly:
  
  /**
   * @brief Declaring and Assigning Temp variables
   * 
   */
  float temp = dht.readTemperature();
  /**
   * @brief Declaring and Assigning Humidity variable
   * 
   */
  float hum = dht.readHumidity();
  /**
   * @brief Declaring and Assigning Rain Detector Digital variable
   * 
   */
  int rainValue = digitalRead(rain);

  /**
   * @brief Declaring and Assigning Linght Intensity variables
   * 
   */
  int lightValue = analogRead(A0);
  
  /**
   * @brief Construct a new retry if a sensor read null variables
   * 
   */
  if(isnan(hum)|| isnan(temp) || isnan(rainValue)||isnan(lightValue)){
    Serial.println("Failed to read a sensor");
    /**
     * @brief Construct a new run Buzzer object
     * 
     */
    runBuzzer();
    delay(2000);
    return;
  }
    
    //firebasedb
    timestamp = getTime();
   
    /**
     * @brief uploading data to thingspeak
     * 
     */
    ThingSpeak.writeField(thingsChannelNum, 3, rainValue,thingWriteAPI);
    delay(15000);
     if(rainValue==0){
      Serial.println(" It is raining : " + (String) rainValue);
    }
    else{
      Serial.println(" No rain : " + (String) rainValue);
    }
    ThingSpeak.writeField(thingsChannelNum, 1, temp,thingWriteAPI);
    delay(15000);
    Serial.println(" Temperature: " + (String) temp);
    ThingSpeak.writeField(thingsChannelNum, 2, hum,thingWriteAPI);
    delay(15000);
    Serial.println(" Humidity: " + (String) hum);
    ThingSpeak.writeField(thingsChannelNum, 4, lightValue,thingWriteAPI);  
    delay(15000);
    Serial.println(" LDR : " + (String) lightValue);
    
    /**
     * @brief Send new readings to firebase database
     * 
     */
    parentPath= dataPath + "/" + String(timestamp);
    json.set(tempPath.c_str(), int(temp));
    json.set(humPath.c_str(), int(hum));
    json.set(rainPath.c_str(), int(rainValue));
    json.set(timePath, String(timestamp));
    Serial.printf(" %s\n", Firebase.RTDB.setJSON(&fbdo, parentPath.c_str(), &json) ? "Sent to cloud" : fbdo.errorReason().c_str());
    Serial.print ("time : ");
    Serial.print (timestamp);
    Serial.println ();
    delay(2);
    /**
     * @brief Print on serial end of operation
     * 
     */
    Serial.println("=================================");

}
