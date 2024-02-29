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

    //Retrieve the cost of the protection plan
        let planValue= document.querySelector('input [name="plan"]checked').value;

    //Charge the plan to each item ordered
        let planCost= planValue * quantity; 
        orderForm.elements.planCost.value= planCost;

    //Calculate the order subtotal
        let subtotal= modelCost + planCost;
        orderForm.elements.subtotal.value= subtotal;

    //Calculate the 5% salkes tax
        let salesTax= subtotal * 0.05;
        orderForm.elements.salesTax.value= salesTax;

    //Calculate the total cost of thbe order
        let totalCost= subtotal + salesTax;
        orderForm.elements.totalCost.value= totalCost;


        }

});


