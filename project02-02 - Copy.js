/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Lantha Wade  
      Date: 01/21/24

      Filename: project02-02.js
 */
      function verifyForm() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
 // Use a conditional operator to test the truthy or falsy values of name, email, and phone
            var isValidForm = name && email && phone;
 // Display appropriate alert message based on the result of the conditional expression
            window.alert(isValidForm ? "Thank you!" : "Please fill in all fields");


      }
// Attach an event listener to the page element with id "submit"
       window.onload = function() {
            document.getElementById("submit").addEventListener("click", verifyForm);
      };
