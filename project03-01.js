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

        // Function to calculate total 
                function calcTotal() {
                    var orderTotal = 0;
                       // Create a for loop that loops through the contents of the menuItems collection
                        for (var i = 0; i < menuItems.length; i++) {
                            if (menuItems[i].checked) { 
                                orderTotal += Number(menuItems[i].value);
                    }
                }  
               
             document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
        }
            
        