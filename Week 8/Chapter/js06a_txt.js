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

    //Calculate the cost of the order
        calcOrder ();
        function calcOrder() {
    //Determine the selected model 
        let mIndex= model.selectedIndex;
        let mValue= model.options[mIndex].value;
        
    //Determine the selected quantity 
        let qIndex= orderForm.elements.quantity.selectedIndex;
        let quantity= orderForm.elements.qty[qIndex].value;

    //Model cost= Model cost times quantity 
        let modelCost= mValue*quantity;
        orderForm.elements.modelCost.value= modelCost;

        }

});


