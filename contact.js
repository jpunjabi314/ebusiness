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

var nameInput = "";
var emailInput = "";
var subjectInput = "";
var messageInput = "";


function storeData(event) {
    if (event) {
        event.preventDefault();
    }

    nameInput = document.getElementById("name").value;
    emailInput = document.getElementById("email").value;
    subjectInput = document.getElementById("subject").value;
    messageInput = document.getElementById("message").value;

    const reference = database.ref("contact/" + nameInput);
    reference.set({
        name: nameInput,
        email: emailInput,
        subject: subjectInput,
        message: messageInput
    });

    alert("Message submitted! We will get back to you in 24-48 hours!")
    document.getElementById("contact-form").reset();

    return true;

}