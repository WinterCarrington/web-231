"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Lantha Wade   
      Date:   03/10/24

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
    e.preventDefault();
    /* add regular expresions */
    const regex1 = /[A-Z]/;
    const regex2 = /\d/;
    const regex3 = /[!$#%.]/;
  
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

   //Validate the password
  if (pwd.length < 8) {
    feedback.textContent = 'Your password must be at least 8 characters.';
  } else if (!regex1.test(pwd)) {
    feedback.textContent = 'Your password must include an uppercase letter.';
  } else if (!regex2.test(pwd)) {
    feedback.textContent = 'Your password must include a number.';
  } else if (!regex3.test(pwd)) {
    feedback.textContent = 'Your password must include one of the following: !$#%.';
  } else {
    // All conditions passed, submit the form for processing
    signupForm.submit();

}
);