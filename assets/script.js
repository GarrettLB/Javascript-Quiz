// TODO function for rendering buttons
// TODO functions for each set of buttons/ questions

// VARIABLES/QUERYSELECTORS
var H1 = document.querySelector("#H1")
var P = document.querySelector("#P")
var Bttn1 = document.querySelector("#Bttn1")
var Bttn2 = document.querySelector("#Bttn2")
var OL = document.querySelector("#OL")
var H2 = document.querySelector("#H2")



// TODO Start Screen
function StartScreen() {
    H1.textContent = "Code Quiz Challenge"
    P.innerHTML = "Try to answer the following code-related questions within the time limit.<br />Keep in mind that incorrect answers will penelize your score/time by ten seconds."
    Bttn1.textContent = "Start"
    Bttn2.setAttribute("style", "display: none")

    Bttn1.addEventListener("click", Quiz)
}

function Quiz(){
    H1.textContent = "Commonly used data types DO NOT include:"
    P.innerHTML = ""
    Bttn1.setAttribute("style", "display: none")

    var li1 = document.createElement("li")
    li1.textContent = "strings"
    OL.appendChild(li1)
}

StartScreen();



// TODO create questions
// Questions:
// Commonly used data types DO NOT include: strings, booleans, alerts, numbers
// The condition in an if/ else statement is enclosed in: quotes, curly brackets, parenthesis, square brackets
// Arrays in Javascript can be used to store: numbers and strings, other arrays, booleans, all of the above
// String valuse must be enclosed with ___ when being assigned to variables: commas, curly brackets, quotes, parenthesis
// A very useful tool used during development and debugging for printing content to the debugger is: 
// Javascript,  terminal/bash, for loops, console.log