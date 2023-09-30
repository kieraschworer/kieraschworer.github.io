/*Frequently Asked Questions*/

//09/29/23 - Replaced Javascript with jQuery

"use strict";

$("#faqs h2").click( evt => {
  const h2 = evt.currentTarget;

  $(h2).toggleClass("minus");

  if ($(h2).attr("class") != "minus") {
       $(h2).next().slideUp();
     }
     else {
        $(h2).next().slideDown();
     }
  
  evt.preventDefault();
  });


/* Old Javascript Code!

const toggle = evt => {
  const aElement = evt.currentTarget; //a element is labeled
  const h2Element = aElement.parentNode; //h2 element, a's parentNode is labeled
  const divElement = h2Element.nextElementSibling; //div, h2's sibling is labeled

  //open
  if (divElement.hasAttribute("class")) {
    divElement.removeAttribute("class");
  }
  else {
    divElement.className= "open"; //find .open class in css - .open class hides div
  }
  evt.preventDefault();
}

document.addEventListener("DOMContentLoaded", () => {
  //select all a tags in faqs and label group as aElements
    const aElements = faqs.querySelectorAll("#faqs a");

    //when clicked, toggle aElement
    for (let aElement of aElements) {
      aElement.addEventListener("click", toggle);
    }
})*/