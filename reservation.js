
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdp7fzeJse4uYnyizXfbOhMs-UKNay2rY",
  authDomain: "ebusiness-733cf.firebaseapp.com",
  projectId: "ebusiness-733cf",
  storageBucket: "ebusiness-733cf.appspot.com",
  messagingSenderId: "653500133178",
  appId: "1:653500133178:web:5a8a45b0278de0e5a8aa03",
  measurementId: "G-B1TC8GSM2M"
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const database = firebase.database();;
// Initialize Firebase





var nameInput = "";
var emailInput = "";
var phoneInput = "";
var arrivalInput = "";
var departureInput = "";
var adultsInput = "";
var childrenInput = "";
var nameCard = "";
var cardNumber = "";
var expirationDate = "";
var cvv = "";
var roomType = "";


function storeData(event) {
    if (event) {
        event.preventDefault();
    }
    nameInput = document.getElementById("name").value;
    emailInput = document.getElementById("email").value;
    phoneInput = document.getElementById("phone").value;
    arrivalInput = document.getElementById("arrival").value;
    departureInput = document.getElementById("departure").value;
    adultsInput = document.getElementById("adults").value;
    childrenInput = document.getElementById("children").value;
    roomType = document.getElementById("roomType").value;

    localStorage.setItem("nameInput", nameInput);
    localStorage.setItem("emailInput", emailInput);
    localStorage.setItem("phoneInput", phoneInput);
    localStorage.setItem("arrivalInput", arrivalInput);
    localStorage.setItem("departureInput", departureInput);
    localStorage.setItem("adultsInput", adultsInput);
    localStorage.setItem("childrenInput", childrenInput);
    localStorage.setItem("roomType", roomType);

    console.log(nameInput.value);

    /*

    if (nameInput.value === "") {
        alert("Please enter your name.");
        return false;
      }
    
      if (emailInput.value === "") {
        alert("Please enter your email.");
        return false;
      }
    
      if (phoneInput.value === "") {
        alert("Please enter your phone number.");
        return false;
      }
    
      if (arrivalInput.value === "") {
        alert("Please enter your arrival date.");
        return false;
      }
    
      if (departureInput.value === "") {
        alert("Please enter your departure date.");
        return false;
      }
    
      if (adultsInput.value === "") {
        alert("Please enter the number of adults.");
        return false;
      }
    
      if (childrenInput.value === "") {
        alert("Please enter the number of children.");
        return false;
      }
      */

    location.href="creditcard.html";
    return true;
}


function storeCardData(event) {
    if (event) {
        event.preventDefault();
    }

    // Retrieve the values from localStorage
    nameInput = localStorage.getItem("nameInput");
    emailInput = localStorage.getItem("emailInput");
    phoneInput = localStorage.getItem("phoneInput");
    arrivalInput = localStorage.getItem("arrivalInput");
    departureInput = localStorage.getItem("departureInput");
    adultsInput = localStorage.getItem("adultsInput");
    childrenInput = localStorage.getItem("childrenInput");
    roomType = localStorage.getItem("roomType");

        

    console.log("PRESSED!!")
    console.log(nameInput);



    nameCard = document.getElementById("nameCard").value; 
    cardNumber = document.getElementById("cardNumber").value;
    expirationDate = document.getElementById("expiration").value;
    cvv = document.getElementById("cvv").value;

    localStorage.setItem("nameCard", nameCard);
    localStorage.setItem("cardNumber", cardNumber);
    localStorage.setItem("expirationDate", expirationDate);
    localStorage.setItem("cvv", cvv);

    retrieveAllData();

    
    if (nameCard.value === "" || nameCard.value === null) {
        alert("Please enter your name.");
        return false;
    }

    if (cardNumber.value === "" || cardNumber.value === null) {
        alert("Please enter your card number.");
        return false;
    }

    if (expirationDate.value === "" || expirationDate.value === null) {
        alert("Please enter your expiration date.");
        return false;
    }

    if (cvv.value === "" || cvv.value === null) {
        alert("Please enter your CVV.");
        return false;
    }


    /*
    var data = {
        name: nameInput,
        email: emailInput,
        phone: phoneInput,
        arrival: arrivalInput,
        departure: departureInput,
        adults: adultsInput,
        children: childrenInput,
        nameOnCard: nameCard,
        numberOnCard: cardNumber,
        cardExpirationDate: expirationDate,
        cardCVV: cvv
    };

    
    const newRef = database.ref("bookings").push();
    newRef.set(data)
    .then(() => {
        console.log("Data added successfully!");
    })
    .catch((error) => {
        console.error("Error adding data: ", error);
    });
    */


    location.href="confirmation.html";



    return true;

}


function writeUserData() {
    const reference = database.ref("bookings/" + nameInput);
    reference.set({
        name: nameInput,
        email: emailInput,
        phone: phoneInput,
        arrival: arrivalInput,
        departure: departureInput,
        adults: adultsInput,
        children: childrenInput,
        nameOnCard: nameCard,
        numberOnCard: cardNumber,
        cardExpirationDate: expirationDate,
        cardCVV: cvv,
        roomType : roomType
    });
}

function retrieveAllData() {
    nameInput = localStorage.getItem("nameInput");
    emailInput = localStorage.getItem("emailInput");
    phoneInput = localStorage.getItem("phoneInput");
    arrivalInput = localStorage.getItem("arrivalInput");
    departureInput = localStorage.getItem("departureInput");
    adultsInput = localStorage.getItem("adultsInput");
    childrenInput = localStorage.getItem("childrenInput");
    roomType = localStorage.getItem("roomType");

    nameCard = localStorage.getItem("nameCard"); 
    cardNumber = localStorage.getItem("cardNumber");
    expirationDate = localStorage.getItem("expirationDate");
    cvv = localStorage.getItem("cvv");

}

function setUpConfirmation() {
    retrieveAllData();
    writeUserData();

    document.getElementById("nameDisplay").innerHTML = "Name: " + nameInput;
    document.getElementById("emailDisplay").innerHTML = "Email: " + emailInput;
    document.getElementById("arrivalDisplay").innerHTML = "Arrival Date: " + arrivalInput;
    document.getElementById("departureDisplay").innerHTML = "Departure Date: " + departureInput;
    document.getElementById("roomTypeDisplay").innerHTML = "Room Type: " + roomType;
    document.getElementById("guestsDisplay").innerHTML = "Guests: " + (parseInt(adultsInput) + parseInt(childrenInput)).toString();
    document.getElementById("nameCardDisplay").innerHTML = "Name on Card: " + nameCard;
    document.getElementById("cardNumberDisplay").innerHTML = "Card Number: " + "**** **** **** " + cardNumber.slice(-4);

}

/*
function writeUserData() {
    
    const reference = database.ref("bookings/" + nameInput.value);

    reference.set( {
        name: "hi",
        email: "hi",
        phone: 1,
        arrival: 1,
        departure: 1,
        adults: 1,
        children: 1,
        nameOnCard: 1,
        numberOnCard: 1,
        cardExpirationDate: 1,
        cardCVV: 1
    });
    
}
*/