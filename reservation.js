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



function storeData(event) {
    event.preventDefault();
    nameInput = document.getElementById("name");
    emailInput = document.getElementById("email");
    phoneInput = document.getElementById("phone");
    arrivalInput = document.getElementById("arrival");
    departureInput = document.getElementById("departure");
    adultsInput = document.getElementById("adults");
    childrenInput = document.getElementById("children");

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

    location.href="creditcard.html";
    return true;
}


function storeCardData(event) {
    console.log("PRESSED!!")
    event.preventDefault();
    nameCard = document.getElementById("nameCard"); 
    cardNumber = document.getElementById("cardNumber");
    expirationDate = document.getElementById("expiration");
    cvv = document.getElementById("cvv");

    
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


    location.href="confirmation.html";
    return true;

}