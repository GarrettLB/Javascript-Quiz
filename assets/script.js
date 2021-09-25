// QUERYSELECTORS
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


// GLOBAL VARIABLES
var timercount = 75
var AllDone = false
var questionnumber = 1


// ELEMENTS
var BttnStrt = document.createElement("button")
var Bttn1 = document.createElement("button")
var Bttn2 = document.createElement("button")
var Bttn3 = document.createElement("button")
var Bttn4 = document.createElement("button")


// FUNCTIONS
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

function RenderButtons() {

    UL.appendChild(Bttn1)
    UL.appendChild(Bttn2)
    UL.appendChild(Bttn3)
    UL.appendChild(Bttn4)
}

function RemoveButtons() {

    Bttn1.parentNode.removeChild(Bttn1)
    Bttn2.parentNode.removeChild(Bttn2)
    Bttn3.parentNode.removeChild(Bttn3)
    Bttn4.parentNode.removeChild(Bttn4)
}

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function ULEventListener(event) {

    if (event.target.id === "C") {

        questionnumber += 1
        Right();
        if (questionnumber < 6) {
            NextQuestion(questionnumber);
        } else {
            ScoreScreen()
        }    
    } else if (event.target.id === "I") {

        questionnumber += 1
        Wrong();
        if (questionnumber < 6) {
            NextQuestion(questionnumber);
        } else {
            ScoreScreen()
        }
    }
}

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

function OLEventListener(event) {

    if (event.target.id === "clear") {
        ClearScores()
    }
    if (event.target.id === "again") {
        StartScreen()
    }
}

function ClearScores() {

    localStorage.setItem("Highscores", null)
    HighScoreScreen()
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
        alert("Initials must be three letters max!")
    }
    else {
        localStorage.setItem("Highscores", JSON.stringify(Highscores))
        document.querySelector("#Initials").value = ""

        HighScoreScreen();
    }
}

function Quiz() {

    UL.removeChild(BttnStrt)
    BttnStrt.removeEventListener("click", Quiz)
    
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


// SCREENS
function StartScreen() {

    timercount = 75
    AllDone = false
    questionnumber = 1
    removeChildren(UL)
    removeChildren(OL)
    OL.setAttribute("style", "display: hidden")
    UL.setAttribute("style", "display: initial")

    OL.removeEventListener("click", OLEventListener)
    Bttn2.removeEventListener("click", StartScreen)

    H1.textContent = "Code Quiz Challenge"
    P.innerHTML = "Try to answer the following code-related questions within the time limit.<br />Keep in mind that incorrect answers will penelize your score/time by ten seconds."
    
    BttnStrt.textContent = "Start"

    UL.appendChild(BttnStrt)

    BttnStrt.addEventListener("click", Quiz)
}

function Question1() {

    H1.textContent = "Commonly used data types DO NOT include:";
    P.innerHTML = "";

    Bttn1.textContent = "1. Strings";
    Bttn2.textContent = "2. Booleans";
    Bttn3.textContent = "3. Alerts";
    Bttn4.textContent = "4. Numbers";

    Bttn1.id = 'I'
    Bttn2.id = 'I'
    Bttn3.id = 'C'
    Bttn4.id = 'I'

    RenderButtons();

    UL.addEventListener("click", ULEventListener)
}

function Question2() {

    H1.textContent = "The condition in an if/ else statement is enclosed in:";

    Bttn1.textContent = "1. Quotes";
    Bttn2.textContent = "2. Curly brackets";
    Bttn3.textContent = "3. Parenthesis";
    Bttn4.textContent = "4. Square brackets";

    Bttn1.id = 'I'
    Bttn2.id = 'I'
    Bttn3.id = 'C'
    Bttn4.id = 'I'
}

function Question3() {

    H1.textContent = "Arrays in Javascript can be used to store:";

    Bttn1.textContent = "1. Numbers and strings";
    Bttn2.textContent = "2. Other arrays";
    Bttn3.textContent = "3. Booleans";
    Bttn4.textContent = "4. All of the above";
    
    Bttn1.id = 'I'
    Bttn2.id = 'I'
    Bttn3.id = 'I'
    Bttn4.id = 'C'
}

function Question4() {

    H1.textContent = "String valuse must be enclosed with ___ when being assigned to variables:";

    Bttn1.textContent = "1. Commas";
    Bttn2.textContent = "2. Curly brackets";
    Bttn3.textContent = "3. Quotes";
    Bttn4.textContent = "4. Parenthesis";

    Bttn1.id = 'I'
    Bttn2.id = 'I'
    Bttn3.id = 'C'
    Bttn4.id = 'I'
}

function Question5() {

    H1.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";

    Bttn1.textContent = "1. Javascript";
    Bttn2.textContent = "2. Terminal/bash";
    Bttn3.textContent = "3. For loops";
    Bttn4.textContent = "4. Console.log";

    Bttn1.id = 'I'
    Bttn2.id = 'I'
    Bttn3.id = 'I'
    Bttn4.id = 'C'
}

function ScoreScreen() {

    AllDone = true;
    UL.removeEventListener("click", ULEventListener)

    RemoveButtons();
    timeDiv.setAttribute("style", "visibility: hidden;");
    Form.setAttribute("style", "display: flex");

    H1.textContent = "All Done!"
    P.textContent = "Your final score is:   "
    Span.textContent = timercount

    ScoreBttn.addEventListener("click", Submit)
}

function HighScoreScreen() {
    removeChildren(OL)
    Form.setAttribute("style", "display: none");
    UL.setAttribute("style", "display: none")

    
    H1.textContent = "Scores"
    P.textContent = ""
    Span.textContent = ""

    var Highscores = JSON.parse(localStorage.getItem("Highscores"));

    if (Highscores === null) {
        Highscores = []
    }

    OL.setAttribute("style", "display: initial")
    for (var i = 0; i < Highscores.length; i++) {
        var scores = Highscores[i];

        var li = document.createElement("li");
        li.innerHTML = scores
    
        OL.appendChild(li);
    }

    Bttn1.textContent = "Clear Scores"
    Bttn2.textContent = "Play again"

    Bttn1.setAttribute("id", "clear")
    Bttn2.setAttribute("id", "again")

    OL.appendChild(Bttn1)
    OL.appendChild(Bttn2)

    OL.addEventListener("click", OLEventListener)
}

StartScreen();