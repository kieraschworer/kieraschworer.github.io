"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

  $("#joinbutton").addEventListener("click", () => {
    
    const firstemail = $("#firstemail");
    const secondemail = $("#secondemail");
    const username = $("#username");

    // Check for errors!
    let isValid = true;

    // Regex Validation Patterns, 10/13/23
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const usernamePattern = /^[a-zA-Z0-9_]+$/;

    //Entry validation

    if (firstemail.value === "") {
      firstemail.nextElementSibling.textContent = "Please enter your email!";
      isValid = false;
      firstemail.focus();
    } else if (!emailPattern.test(firstemail.value)) {
      firstemail.nextElementSibling.textContent = "Please enter a valid email address!";
      isValid = false;
      firstemail.focus();
    } else {
      firstemail.nextElementSibling.textContent = "";
      secondemail.focus();
    }

    if (secondemail.value === "") { 
      secondemail.nextElementSibling.textContent = "This field is required...";
      isValid = false;
    } else if (firstemail.value !== secondemail.value) { 
      secondemail.nextElementSibling.textContent = "Please confirm email addresses match!";
      isValid = false;
    } else {
      secondemail.nextElementSibling.textContent = "";
      username.focus();
    }

    if (username.value === "") {
      username.nextElementSibling.textContent = "Please enter your name!";
      isValid = false;
    } else if (!usernamePattern.test(username.value)) {
      username.nextElementSibling.textContent = "Please use only letters, numbers, and underscores for your username.";
      isValid = false;
    } else {
      username.nextElementSibling.textContent = "";
    }

    //If everything looks right, then submit!
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