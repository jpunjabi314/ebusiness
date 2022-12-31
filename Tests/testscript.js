// Initialize the map
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7749, lng: -122.4194},
      zoom: 8
    });
    var marker = new google.maps.Marker({
      position: {lat: 37.7749, lng: -122.4194},
      map: map,
      title: 'Golden Gate Bridge'
    });
  }
  
  // Handle the form submission
  document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var checkInDate = document.getElementById('check-in-date').value;
    var checkOutDate = document.getElementById('check-out-date').value;
    var roomType = document.getElementById('room-type').value;
    var bookingConfirmation = document.getElementById('booking-confirmation');
    bookingConfirmation.innerHTML = 'Thank you for booking a ' + roomType + ' from ' + checkInDate + ' to ' + checkOutDate + ' at Sunny Meadows B&B.';
  
    var booking = {
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      roomType: roomType
    };
    database.ref('bookings').push(booking);
  });
  