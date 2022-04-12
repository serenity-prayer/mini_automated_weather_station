// Import the functions you need from the SDKs you need
import { initializeApp} from 'firebase/app';
import { getDatabase, ref, onValue} from "firebase/database";
 
/**
 * @constant {Array.<object>} firebaseConfig
 * app's Firebase configuration
 */
const firebaseConfig = {
  apiKey: "AIzaSyDEP9Sp-gquKxZrQ1zxeCPpf4bNXIn2Kmc",
  authDomain: "projectdb-e7c09.firebaseapp.com",
  databaseURL: "https://projectdb-e7c09-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projectdb-e7c09",
  storageBucket: "projectdb-e7c09.appspot.com",
  messagingSenderId: "597742443504",
  appId: "1:597742443504:web:834b4506ee7347a0771b35"
};

/**
 * @constant {string} app
 */
const app = initializeApp(firebaseConfig);

/**
 * @constant {string} firebase
 */
export const firebase = getDatabase(app);

