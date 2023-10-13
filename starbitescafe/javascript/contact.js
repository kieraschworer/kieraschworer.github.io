"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

  $("#submitmessage").addEventListener("click", () => {

    const contactemail = $("#contactemail");
    const commentsection = $("#commentsection");

    let isValid = true;

    if (contactemail.value == "")
    {
      contactemail.nextElementSibling.textContent = "Please enter an email to submit message!"
      isValid = false;
      contactemail.focus();
    }
    else {
      contactemail.nextElementSibling.textContent = "";
      commentsection.focus();
    }
    if (commentsection.value == "")
    {
      commentsection.nextElementSibling.nextElementSibling.textContent = "Please enter comments to submit message!"
      isValid = false;
    }
    if (isValid) {
      $("#contactform").submit();
    }
  })
  $("#persontocontact").focus(); 

  const timeClock = $("#timeclock");
  const currentDate = new Date();
  const formattedDateTime = currentDate.toLocaleString();
  timeClock.textContent = formattedDateTime;
})