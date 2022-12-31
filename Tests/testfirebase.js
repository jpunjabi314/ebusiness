// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOCqJjUl2fjSew9RhmZiBtp3GYNNMkDuo",
  authDomain: "business-test-72d7f.firebaseapp.com",
  databaseURL: "https://business-test-72d7f-default-rtdb.firebaseio.com",
  projectId: "business-test-72d7f",
  storageBucket: "business-test-72d7f.appspot.com",
  messagingSenderId: "530434570934",
  appId: "1:530434570934:web:4f1e5592b71c000b2d4417",
  measurementId: "G-RVPXPTRJBS"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

//--------//
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database service
  //var database = firebase.database();
  
  // Get a reference to the room list element
  var roomList = document.getElementById('room-list');
  
  // Get a reference to the room type select element
  var roomTypeSelect = document.getElementById('room-type');
  
  // Load rooms from the database and add them to the room list
  database.ref('rooms').once('value').then(function(snapshot) {
    snapshot.forEach(function(roomSnapshot) {
      var room = roomSnapshot.val();
      // Create a room element
      var roomElement = document.createElement('div');
      roomElement.classList.add('room');
      // Set the room element's inner HTML
      roomElement.innerHTML = '<img src="' + room.image + '" alt="' + room.name + '"><h3>' + room.name + '</h3><p>' + room.description + '</p>';
      // Append the room element to the room list
      roomList.appendChild(roomElement);
      // Add the room as an option to the room type select element
      var option = document.createElement('option');
      option.value = room.name;
      option.text = room.name;
      roomTypeSelect.add(option);
    });
  });
  