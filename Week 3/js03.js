        /*    JavaScript 7th Edition
            Chapter 3
            Chapter case

            Tipton Turbines
            Program to display games results in a web table
            Author: Lantha Wade        
            Date:   01/28/24

            Filename: js03.js
        */

        //Days of the week
                let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    
                window.addEventListener("load", addWeekdays);

        //Function to write weekday names into the calendar 
        function addWeekdays() {
                let i = 0; //initial counter value

        //Refrence the collection of heading cells in the table
                let headingCells = document.getElementsByTagName("th");

        //Write each of the seven days into a heading cell
                while (i < 7) {
                    headingCells(i).innerHTML = weekDays(i);

        //Increase the counter by 1
                i++; 
                }
         }
