import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCahCfzRvMWRVgti71Rtu9GjcUSrmlgRoA",
  authDomain: "weatherdata-a82bd.firebaseapp.com",
  projectId: "weatherdata-a82bd",
  storageBucket: "weatherdata-a82bd.appspot.com",
  messagingSenderId: "96984700301",
  appId: "1:96984700301:web:4ddac164cc7bed28cf99c4",
  measurementId: "G-KZW9333H4S"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;