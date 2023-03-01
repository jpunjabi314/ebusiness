// Get all room images
let roomImages = document.querySelectorAll('.room-image');

// Add click event listener to each image
roomImages.forEach(image => {
  image.addEventListener('click', function() {
    // Get the modal corresponding to the clicked image
    let modalId = this.getAttribute('data-modal');
    let modal = document.getElementById(modalId);

    // Show the modal
    modal.style.display = 'block';
  });
});

// Get all modal close buttons
let closeButtons = document.querySelectorAll('.modal-close');

// Add click event listener to each close button
closeButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the parent modal of the close button
    let modal = this.parentElement;

    // Hide the modal
    modal.style.display = 'none';
  });
});

