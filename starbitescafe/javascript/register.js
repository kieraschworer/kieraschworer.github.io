"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

$("#joinbutton").addEventListener("click", () => {
  //get and label email and name input fields for javascript
  const firstemail = $("#firstemail").val();
  const secondemail = $("#secondemail").val();
  const username = $("#username").val();

  const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
  const usernamePattern = /^[a-zA-Z]+$/;

  //Check for errors!
  let isValid = true;

  if (firstemail === "" || !emailPattern.test(firstemail) ) {
    isValid = false;
    $("#firstemail").next().text("Please enter a valid email.");
}

  //Second email verification
  if (secondemail === "" || !emailPattern.test(secondemail) ) {
    isValid = false;
    $("#secondemail").next().text("Please enter a valid email.");
}

  else if (firstemail !== secondemail) { 
    isValid = false;
    $("#secondemail").next().text("Please confirm email addresses match!");
  }

  //User's name verification
  if (username === "" || !usernamePattern.test(username))
  {
    isValid = false;
    $("#username").next().text("Please enter your name!")
  }

  //If isValid is true, then the email form is submitted! :D

  if (isValid) {
    $("#emailform").submit();
  }

});

$("#clearbutton").addEventListener("click", () => {
  
  //To clear the form, javascript will change the HTML values to become empty ("").
  $("#firstemail").value = "";
  $("#secondemail").value = "";
  $("#username").value = "";
  //when form is cleared, it will focus on the first input field
  $("#firstemail").focus();
})
});

//10/12/23, Scroll to top Widget!

function scrollToTop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
scrollToTopBtn.addEventListener('click', scrollToTop);

//10/12/23, Zoom in Widget!

const zoomImage = document.getElementById('freedrinkpic');

// Function to zoom in on the image
function zoomIn() {
  zoomImage.style.transform = 'scale(1.2)'; // Adjust the scale factor as needed
  zoomImage.style.transition = 'transform 0.3s';
}

// Function to reset the zoom
function resetZoom() {
  zoomImage.style.transform = 'scale(1)';
}

// Add click event listeners to the image for zoom and reset
zoomImage.addEventListener('mouseover', zoomIn);
zoomImage.addEventListener('mouseout', resetZoom);