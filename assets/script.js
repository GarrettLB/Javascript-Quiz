// VARIABLES/QUERYSELECTORS
var H1 = document.querySelector("#H1")
var P = document.querySelector("#P")
var UL = document.querySelector("#UL")
var OL = document.querySelector("#OL")
var H2 = document.querySelector("#H2")
var timeDiv = document.querySelector("#timeDiv")
var DisplayTime = document.querySelector("#DisplayTime")
var BttnStrt = document.createElement("button")
var Span = document.querySelector("#Span")
var Form = document.querySelector("#Form")
var ScoreBttn = document.querySelector("#ScoreBttn")

var timercount = 75
var AllDone = false

var BttnStrt = document.createElement("button")

var Bttn1 = document.createElement("button")
var Bttn2 = document.createElement("button")
var Bttn3 = document.createElement("button")
var Bttn4 = document.createElement("button")

function DeleteButtons() {

    document.remove(Bttn1)
    document.remove(Bttn2)
    document.remove(Bttn3)
    document.remove(Bttn4)
}

// Start Screen
function StartScreen() {

    H1.textContent = "Code Quiz Challenge"
    P.innerHTML = "Try to answer the following code-related questions within the time limit.<br />Keep in mind that incorrect answers will penelize your score/time by ten seconds."
    
    BttnStrt.textContent = "Start"

    UL.appendChild(BttnStrt)

    BttnStrt.addEventListener("click", function(event) {
        event.stopPropagation();
        Quiz();
    })
}

function Quiz() {

    BttnStrt.parentNode.removeChild(BttnStrt)
    
    timeDiv.setAttribute("style", "visibility: visible;");

    DisplayTime.textContent = timercount
    var timer = setInterval(function () {
      timercount--
      DisplayTime.textContent = timercount
      
      if(timercount <= 0) {
        clearInterval(timer);
        ScoreScreen()
      }
      if (AllDone == true) {
        clearInterval(timer);
      }
    } ,1000);
    
    Question1();
}

function Wrong() {  

    H2.textContent = "Wrong!"
    DisplayTime.style.color = "red"
    setTimeout(function () {
        H2.textContent = ""
        DisplayTime.style.color = "black"
    }, 500)
    timercount -= 10
}

function Right() {

    H2.textContent = "Right!"
    setTimeout(function () {
        H2.textContent = ""
    }, 500)
}

function RemoveButtons() {
    Bttn1.parentNode.removeChild(Bttn1)
    Bttn2.parentNode.removeChild(Bttn2)
    Bttn3.parentNode.removeChild(Bttn3)
    Bttn4.parentNode.removeChild(Bttn4)
}

function RenderButtons() {
    UL.appendChild(Bttn1)
    UL.appendChild(Bttn2)
    UL.appendChild(Bttn3)
    UL.appendChild(Bttn4)
}

var questionnumber = 1
function NextQuestion(number) {
  
    if (number == 2) {
        Question2();
    }
    if (number == 3) {
        Question3();
    }
    if (number == 4) {
        Question4();
    }
    if (number == 5) {
        Question5();
    }
}

function Submit(event) {
    event.preventDefault();

    var Highscores = JSON.parse(localStorage.getItem("Highscores"));

    if (Highscores === null) {
        Highscores = []
    }

    var initials = document.querySelector("#Initials").value;
    var score = timercount

    var highscore = initials+" - "+score
    

    Highscores.push(highscore)

    if (initials.length > 3) {
        alert("Initials must be three letters maax!")
    }
    else {
        localStorage.setItem("Highscores", JSON.stringify(Highscores))
        document.querySelector("#Initials").value = ""

        HighScoreScreen();
    }
}

// TODO functions for each set of buttons/ questions
function Question1() {
    H1.textContent = "Commonly used data types DO NOT include:";
    P.innerHTML = "";

    Bttn1.textContent = "1. Strings";
    Bttn2.textContent = "2. Booleans";
    Bttn3.textContent = "3. Alerts";
    Bttn4.textContent = "4. Numbers";

    Bttn1.setAttribute("id", "I")
    Bttn2.setAttribute("id", "I")
    Bttn3.setAttribute("id", "C")
    Bttn4.setAttribute("id", "I")

    console.log(Bttn1.getAttribute("id"))

    RenderButtons();

    UL.addEventListener("click", function(event) {

        if (event.target.id === "C") {

            questionnumber += 1
            Right();
            if (questionnumber < 6) {
                NextQuestion(questionnumber);
            } else {
                ScoreScreen()
            }
            
        } else {

            questionnumber += 1
            Wrong();
            if (questionnumber < 6) {
                NextQuestion(questionnumber);
            } else {
                ScoreScreen()
            }
        }
    })
}

function Question2() {

    H1.textContent = "The condition in an if/ else statement is enclosed in:";

    Bttn1.textContent = "1. Quotes";
    Bttn2.textContent = "2. Curly brackets";
    Bttn3.textContent = "3. Parenthesis";
    Bttn4.textContent = "4. Square brackets";

    Bttn1.setAttribute("id", "I")
    Bttn2.setAttribute("id", "I")
    Bttn3.setAttribute("id", "C")
    Bttn4.setAttribute("id", "I")
}

function Question3() {

    H1.textContent = "Arrays in Javascript can be used to store:";

    Bttn1.textContent = "1. Numbers and strings";
    Bttn2.textContent = "2. Other arrays";
    Bttn3.textContent = "3. Booleans";
    Bttn4.textContent = "4. All of the above";

    Bttn1.setAttribute("id", "I")
    Bttn2.setAttribute("id", "I")
    Bttn3.setAttribute("id", "I")
    Bttn4.setAttribute("id", "C")
}

function Question4() {

    H1.textContent = "String valuse must be enclosed with ___ when being assigned to variables:";

    Bttn1.textContent = "1. Commas";
    Bttn2.textContent = "2. Curly brackets";
    Bttn3.textContent = "3. Quotes";
    Bttn4.textContent = "4. Parenthesis";

    Bttn1.setAttribute("id", "I")
    Bttn2.setAttribute("id", "I")
    Bttn3.setAttribute("id", "C")
    Bttn4.setAttribute("id", "I")
}

function Question5() {

    H1.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";

    Bttn1.textContent = "1. Javascript";
    Bttn2.textContent = "2. Terminal/bash";
    Bttn3.textContent = "3. For loops";
    Bttn4.textContent = "4. Console.log";

    Bttn1.setAttribute("id", "I")
    Bttn2.setAttribute("id", "I")
    Bttn3.setAttribute("id", "I")
    Bttn4.setAttribute("id", "C")
}

function ScoreScreen() {
    AllDone = true;
    RemoveButtons();
    timeDiv.setAttribute("style", "visibility: hidden;");
    Form.setAttribute("style", "display: flex");

    H1.textContent = "All Done!"
    P.textContent = "Your final score is:   "
    Span.textContent = timercount

    ScoreBttn.addEventListener("click", Submit)
}

function HighScoreScreen() {
    Form.setAttribute("style", "display: none");
    UL.setAttribute("style", "display: none")

    
    H1.textContent = "Highscores"
    P.textContent = ""
    Span.textContent = ""

    var StoredHighscores = JSON.parse(localStorage.getItem("Highscores"));

    OL.setAttribute("style", "display: initial")
    for (var i = 0; i < StoredHighscores.length; i++) {
        var scores = StoredHighscores[i];

        var li = document.createElement("li");
        li.innerHTML = scores
    
        OL.appendChild(li);
      }
}

StartScreen();