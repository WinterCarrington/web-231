"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Lantha Wade
      Date:   02/29/24

      Filename: project06-03.js
*/

// Declare the useShip variable to reference the element with id "useShip"
    let useShip = document.getElementById("useShip");

// Add an event listener to useShip to run the copyShippingToBilling() function when clicked
    useShip.addEventListener("click", copyShippingToBilling);

// Function to be executed when useShip is clicked
    function copyShippingToBilling() {
    
}
// Function to be executed when useShip is clicked
function copyShippingToBilling() {
    // Check if useShip is checked
    if (useShip.checked) {
        // Set billing fields to corresponding shipping fields
        firstnameBill.value = firstnameShip.value;
        lastnameBill.value = lastnameShip.value;
        address1Bill.value = address1Ship.value;
        address2Bill.value = address2Ship.value;
        cityBill.value = cityShip.value;
        stateBill.selectedIndex = stateShip.selectedIndex;
        countryBill.value = countryShip.value;
        codeBill.value = codeShip.value;
    }
}

// Declare the formElements variable and store a node list of input[type='text'] elements
let formElements = document.querySelectorAll("input[type='text']");

// Declare the fieldCount variable with the length of the formElements node list
let fieldCount = formElements.length;

// Declare the errorBox variable referencing the element with id "errorBox"
let errorBox = document.getElementById("errorBox");