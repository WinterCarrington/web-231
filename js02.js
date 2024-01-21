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
                getEstimate();
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