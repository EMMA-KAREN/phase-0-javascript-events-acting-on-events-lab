// Get the dodger element
var dodger = document.getElementById('dodger');

// Function to move dodger to the left
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
  if (left > 0) {
    
    dodger.style.left = (left - 1) + 'px';
  }
}

// Function to move dodger to the right
function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);
  if (left < 360) {
   
    dodger.style.left = (left + 1) + 'px';
  }
}

// Event listener for the left arrow key
document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// Event listener for the right arrow key
document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

// Set dodger's initial style
dodger.style.backgroundColor = "#000000";  // Initial color black
dodger.style.backgroundColor = "#FF69B4";  // Change color to pink
dodger.style.left = "0px";  // Make sure dodger starts at 0px
dodger.style.bottom = "0px";