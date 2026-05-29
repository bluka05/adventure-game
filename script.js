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

    if (currentState === "start") {
    questionText.textContent = "The World Cup is about to begin. What do you do?";

    addAnswerButton("Practice", "practice");
    addAnswerButton("Rest", "rest");
    } else if (currentState === "practice") {
        questionText.textContent = "You stay after training. The coach asks what skill you want to improve.";

        addAnswerButton("Shoot", "shootTraining");
        addAnswerButton("Pass", "passTraining");
    } else if (currentState === "rest") {
        questionText.textContent = "You return to your room to recover before the match.";

        addAnswerButton("Study Opponent", "studyOpponent");
        addAnswerButton("Relax", "relax");
    }
}

renderQuestion();