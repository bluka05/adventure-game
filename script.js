let currentState = "start";

const questionText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");

function clearAnswers() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }
}

function renderQuestion() {
    clearAnswers();
    
    questionText.textContent = "The World Cup is about to begin. What do you do?";
}

renderQuestion();