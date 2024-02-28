"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Lantha Wade   
      Date:   03/03/24

      Filename: js06a.js
 */
window.addEventListener("load", function() {
    let orderForm= document.forms.orderForm;
    let model= orderForm.elements.model;

    //Select model selection list when form opens 
        model.focus();

});


