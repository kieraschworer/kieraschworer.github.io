"use strict";

$(document).ready(() => {
  let nextSlide = $("#slides img:first-child");

  // Start slide show
  setInterval(() => {
    $("#slide").fadeIn(2000, () => {

      if (nextSlide.next().length == 0) {
        nextSlide = $("#slides img:first-child");
      }
      else {
        nextSlide = nextSlide.next();
      }
      const nextSlideSource = nextSlide.attr("src");
      const nextTitle = nextSlide.attr("alt");
      const nextLink = nextSlide.attr("href");
      $("#slide").attr("src", nextSlideSource).fadeIn(2000).show(2000);
      $("#title").val(nextTitle).show(2000);
      $(".buttonlink").attr("href", nextLink);
    });
  },
  3000);
});