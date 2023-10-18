"use strict";
$(document).ready( () => {

    // handle click on Join List button
    $("#join_list").click( evt => {
        let isValid = true;

        // validate the first email address
        const emailPattern = 
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email1 = $("#email_1").val().trim();
        if (email1 == "") { 
            $("#email_1").next().next().text("This field is required.");
            isValid = false;
        } else if ( !emailPattern.test(email1) ) {
            $("#email_1").next().next().text("Must be a valid email address.");
            isValid = false;
        } else {
            $("#email_1").next().next().text("");
        }
        $("#email_1").val(email1);

        // validate the second email address
        const email2 = $("#email_2").val().trim();
        if (email2 == "") { 
            $("#email_2").next().next().text("This field is required.");
            isValid = false; 
        } else if (email1 != email2) { 
            $("#email_2").next().next().text("Must equal first email entry.");
            isValid = false;
        } else {
            $("#email_2").next().next().text("");
        }
        $("#email_2").val(email2);
        
        // validate the first name entry  
        const firstName = $("#first_name").val().trim();
        if (firstName == "") {
            $("#first_name").next().next().text("This field is required.");
            isValid = false;
        } else {
            $("#first_name").next().next().text("");
        }
        $("#first_name").val(firstName);

        // validate the last name entry
        const lastName = $("#last_name").val().trim();
        if (lastName == "") {
            $("#last_name").next().next().text("This field is required.");
            isValid = false;
        } else {
            $("#last_name").next().next().text("");
        }
        $("#last_name").val(lastName);
						
		// prevent the default action of submitting the form if any entries are invalid 
		if (isValid == false) {
			evt.preventDefault();
		}
    if (isValid == true) {
      $("#emailform").submit();
    }
    });

    // handle click on Reset Form button
    $("#reset").click( () => {
        // clear text boxes
        $("#email_1").val("");
        $("#email_2").val("");
        $("#first_name").val("");
        $("#last_name").val("");

        // reset span elements
        $("#email_1").next().next().text("*");
        $("#email_2").next().next().text("*");
        $("#first_name").next().next().text("*");
        $("#last_name").next().next().text("*");
        
        $("#email_1").focus();
    });
});