/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Lantha Wade     
      Date:  01/21/24

      Filename: js02.js
 */

// Estimate the cost of the service
        function getEstimate() {
            let totalCost = 0;
            let photographers = document.getElementById("photoNum").value;
            let hours = document.getElementById("photoHrs").value;
            let distance = document.getElementById("photoDist").value;
            let buyBook = document.getElementById("makeBook").checked;
            let buyRights = document.getElementById("photoRights").checked; 

 //Add the cost for the photographers for the hours covered 
            totalCost += photographers * hours * EMP_COST;
 //Add the cost of distance per photographer per mile 
            totalCost += photographers * distance * TRAVEL_COST;
//Add the cost of the book if purchased 
            totalCost += buyBook ? BOOK_COST : 0;
 //Add the cost of the phot rights if purchased 
            totalCost += buyRights ? REPRO_COST : 0;
//Display the total cost estimate 
             document.getElementById("estimate").innerHTML = "$" + totalCost;
        }

//Set the forms default vaues 
         function setupForm() {
             document.getElementById("photNum").value = 1;
             document.getElementById("photHrs").value = 2;
             document.getElementById("makeBook").checked = false;
             document.getElementById("photRights").checked = false;
             document.getElementById("photoDist").value = 0;
            getEstimate();

//Add event handlers for each input control 
            document.getElementById("photNum").onchange = getEstimate;
            document.getElementById("photHrs").onchange = getEstimate;
            document.getElementById("photoDist").onchange = getEstimate;
            document.getElementById("makeBook").onchange = getEstimate;
            document.getElementById("photoRights").onchange = getEstimate;

        }

// Call setupForm when the page loads
        window.onload = function() {
            setupForm();
        };

        