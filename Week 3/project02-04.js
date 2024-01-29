/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Lantha Wade  
      Date:   01/22/24

      Filename: project02-04.js
 */
 
// Constants with initial values
            const CHICKEN_PRICE = 10.95; //Price of Chicken 
            const HALIBUT_PRICE = 13.95; //Price of Halibut
            const BURGER_PRICE = 9.95;  //Price of Burger 
            const SALMON_PRICE = 18.95; //Price of Salmon
            const SALAD_PRICE = 7.95;  //Price of Salad
            const SALES_TAX = 0.07;   //Sales tax 

// Function to display a numeric value as a text string in the format $##.## 
            function formatCurrency(value) {
                return "$" + value.toFixed(2);
            }

// Function to calculate the total cost
            function calcTotal() {
// Declare the cost variable with an initial value of 0
            var cost = 0;
// Declare variables for checkbox states
            var buyChicken = document.getElementById('chicken').checked;
            var buyHalibut = document.getElementById('halibut').checked;
            var buyBurger = document.getElementById('burger').checked;
            var buySalmon = document.getElementById('salmon').checked;
            var buySalad = document.getElementById('salad').checked;


// Calculate cost based on selected items
            cost += buyChicken ? CHICKEN_PRICE : 0;
            cost += buyHalibut ? HALIBUT_PRICE : 0;
            cost += buyBurger ? BURGER_PRICE : 0;
            cost += buySalmon ? SALMON_PRICE : 0;
            cost += buySalad ? SALAD_PRICE : 0;

//Calculate Tax
            var tax = cost * SALES_TAX;

// Show the tax amount in the appropriate span element
            var foodTotalSpan = document.getElementById('foodTotal');
            foodTotalSpan.innerHTML = formatCurrency(cost);

// Calculate total cost including tax
            var totalCost = cost + tax;

// Show the total cost in the relevant span element
            var totalBillSpan = document.getElementById('totalBill');
            totalBillSpan.innerHTML = formatCurrency(totalCost);
            }

 // Event handler for the "chicken" element
        document.getElementById('chicken').addEventListener('click', function() {
            calcTotal();
        });

// Event handler for the "halibut" element
        document.getElementById('halibut').addEventListener('click', function() {
            calcTotal();
        });

// Event handler for the "burger" element
        document.getElementById('burger').addEventListener('click', function() {
            calcTotal();
        });

// Event handler for the "salmon" element
        document.getElementById('salmon').addEventListener('click', function() {
            calcTotal();
        });

// Event handler for the "salad" element
        document.getElementById('salad').addEventListener('click', function() {
            calcTotal();
        });



            