"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

$("#joinbutton").addEventListener("click", () => {
    
  //get and label email and name input fields for javascript
  const firstemail = $("#firstemail");
  const secondemail = $("#secondemail");
  const username = $("#username");

  //Check for errors! (empty entries)
  let isValid = true;

  //If entry is empty, isValid is false and the form is not submitted. The nextElementSibling in HTML is <span>, and it will show the error message there.
  if (firstemail.value == "")
  {
    firstemail.nextElementSibling.textContent = "Please enter your email!";
    isValid = false;
    firstemail.focus();
  }
  //If the entry has content, then it refers to "else", the <span> element remains empty, and no error is produced for this exception!
  else {
    firstemail.nextElementSibling.textContent = "";
    secondemail.focus();
  }

  //Second email verification
  if (secondemail.value == "") { 
    secondemail.nextElementSibling.textContent = "This field is required...";
    isValid = false;
}

else if (firstemail.value != secondemail.value) { 
    secondemail.nextElementSibling.textContent = "Please confirm email addresses match!";
    isValid = false;
}
else {
    secondemail.nextElementSibling.textContent = "";
    username.focus();
}
  //If second email does not match first email, the error message is produced!

  //User's name verification
  if (username.value == "")
  {
    username.nextElementSibling.textContent = "Please enter your name!"
    isValid = false;
  }
  else {
    username.nextElementSibling.textContent = "";
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
$("firstemail").focus();
});