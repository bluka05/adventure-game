let currentState = "start";

const questionText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");

function clearAnswers() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }
}

function addAnswerButton(answerText, nextState) {
    const button = document.createElement("button");
    button.textContent = answerText;
    button.addEventListener("click", function () {
        currentState = nextState;
        renderQuestion();
    });

    answersContainer.appendChild(button);

}


function renderQuestion() {
    clearAnswers();

    questionText.textContent = "The World Cup is about to begin. What do you do?";

    addAnswerButton("Practice", "practice");
    addAnswerButton("Rest", "rest");

}

renderQuestion();