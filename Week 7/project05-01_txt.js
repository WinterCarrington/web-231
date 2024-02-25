"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Lantha Wade   
      Date:   02/25/24

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID; 
// and the node list for questions
let questionList = document.querySelectorAll("div#quiz input");
// onclick event handler to startQuiz object
startQuiz.onclick = function() {
 // Class attribute of the overlay object to "showquiz"
 overlay.className = "showquiz";
  // Repeat the countdown() function every 1 second and store the id in the global timeID variable
  timeID = setInterval(countdown, 1000);
};


/*------------- Countdown function ----------------*/
function countdown() {
    // If timeLeft is equal to 0
    if (timeLeft === 0) {
    // Cancel the timed command with the variable timeID
    clearInterval(timeID);
  
    // Declare a variable named totalCorrect and set it equal to the value returned by the checkAnswers() function
        let totalCorrect = checkAnswers();
    // If totalCorrect is equal to the length of the correctAnswers array
        if (totalCorrect === correctAnswers.length) {
    // Display an alert window congratulating the student on getting 100%
         alert("Congratulations! You got 100%!");
     } else {
    // Display an alert window indicating the number of incorrect answers out of the total number of questions on the quiz
        alert("You got " + (correctAnswers.length - totalCorrect) + " incorrect out of " + correctAnswers.length + " questions.");
    // Change the value of the timeLeft variable to quizTime
         timeLeft = quizTime;

    // Set quizClock.value to the value of the timeLeft variable
        quizClock.value = timeLeft;

    // Change the class attribute of the overlay object to "hidequiz"
        overlay.className = "hidequiz";
        }
    } else {
    // If the timeLeft variable is not equal to 0, then decrease the value of timeLeft by 1
        timeLeft--;

    // Set quizClock.value to the value of the timeLeft variable
        quizClock.value = timeLeft;
        }
    }




/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}
