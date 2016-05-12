$(function($) {
  "use strict";
  $(window).on("load", function() { // makes sure the whole site is loaded
    
    //preloader
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
      
    });    

  //mobile nav java
  $("#hamburger").click(function(){
      $("#mobilenav ul").toggle();

    });

    //pop up contact form
    $(".popupcontactform").click(function(){
      $("#contact").toggle();

  });    

  //pop up contact form validation

    $("popupcontactform").on("more-link",function(event){
   event.preventDefault();

       if ($("firstname, lastname, email").val() === '') { 
     alert ("Please enter all required fields");
     return false;
   }

    });

 });