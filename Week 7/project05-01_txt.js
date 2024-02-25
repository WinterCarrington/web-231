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
