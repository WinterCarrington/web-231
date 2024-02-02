        /*    JavaScript 7th Edition
            Chapter 3
            Project 03-01

            Application to calculate total order cost
            Author: Lantha Wade   
            Date:   02/04/24

            Filename: project03-01.js
        */



        // Function to display a numeric value as a text string in the format $##.## 
                function formatCurrency(value) {
                    return "$" + value.toFixed(2);
                }

                
        // Declare variable menuItems containing HTML elements with the menuItem class
                var menuItems = document.getElementsByClassName('menuItem');
                
        // Loop through the menuItems collection and add event listeners
                for (var i = 0; i < menuItems.length; i++) {
                    menuItems[i].addEventListener('click', calcTotal);
                }

        // Function to calculate total (you may need to define this function)
                function calcTotal() {
            
        }