let currentState = "start";

const questionText = document.getElementById("story-text");
const answersContainer = document.getElementById("choices-container");

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
    } else if (currentState === "shootTraining") {
        questionText.textContent = "Your shooting improves. In the group stage, the score is tied in the final minute.";

        addAnswerButton("Shoot", "shootMatch");
        addAnswerButton("Pass", "passMatch");
    } else if (currentState === "passTraining") {
        questionText.textContent = "Your passing improves. A teammate runs into open space during the match.";

        addAnswerButton("Cross", "crossBall");
        addAnswerButton("Through Ball", "throughBall");
    } else if (currentState === "studyOpponent") {
        questionText.textContent = "You study the goalkeeper and notice he struggles with low shots.";

        addAnswerButton("Aim Left", "aimLeft");
        addAnswerButton("Aim Right", "aimRight");
    } else if (currentState === "relax") {
        questionText.textContent = "You feel rested and calm. The match is close and your team needs a leader.";

        addAnswerButton("Attack", "attack");
        addAnswerButton("Defend", "defend")
    } else if (currentState === "shootMatch") {
        questionText.textContent = "You score the winning goal. Your team reaches the World Cup Final.";

        addAnswerButton("Take Penalty", "takePenalty");
        addAnswerButton("Let Captain Shoot", "captainShoot");
    } else if (currentState === "passMatch") {
        questionText.textContent = "Your teammate scores from your pass. Your teamwork sends the team to the final.";

        addAnswerButton("Encourage Team", "teamHero");
        addAnswerButton("Stay Focused", "finalFocus");
    } else if (currentState === "crossBall") {
        questionText.textContent = "Your cross creates a goal. The stadium explodes with cheers.";

        addAnswerButton("Take Penalty", "takePenalty");
        addAnswerButton("Let Captain Shoot", "captainShoot");
    } else if (currentState === "throughBall") {
        questionText.textContent = "Your through ball becomes the assist of the tournament.";

        addAnswerButton("Encourage Team", "teamHero");
        addAnswerButton("Stay Focused", "finalFocus");
    } else if (currentState === "aimLeft") {
        questionText.textContent = "You aim left and score. Your smart preparation helps your team reach the final.";

        addAnswerButton("Take Penalty", "takePenalty");
        addAnswerButton("Let Captain Shoot", "captainShoot");
    } else if (currentState === "aimRight") {
        questionText.textContent = "The goalkeeper saves your shot, but your team keeps fighting and reaches the final.";

        addAnswerButton("Encourage Team", "teamHero");
        addAnswerButton("Stay Focused", "finalFocus");
    } else if (currentState === "attack") {
        questionText.textContent = "You push forward and help your team score an important goal.";

        addAnswerButton("Take Penalty", "takePenalty");
        addAnswerButton("Let Captain Shoot", "captainShoot");
    }  else if (currentState === "defend") {
        questionText.textContent = "You defend bravely and protect the lead.";

        addAnswerButton("Encourage Team", "teamHero");
        addAnswerButton("Stay Focused", "finalFocus");
    } else if (currentState === "takePenalty") {
        questionText.textContent = "The stadium becomes silent. You step up for the deciding penalty.";

        addAnswerButton("Left Corner", "championEnding");
        addAnswerButton("Right Corner", "mvpEnding");
    } else if (currentState === "captainShoot") {
        questionText.textContent = "You trust your captain and support your teammates from the halfway line.";

        addAnswerButton("Encourage Team", "teamHero");
        addAnswerButton("Stay Focused", "runnerUp");
    } else if (currentState === "finalFocus") {
        questionText.textContent = "You stay focused during the final moments of the match.";

        addAnswerButton("Lift Trophy", "championEnding");
        addAnswerButton("Celebrate Team", "teamHero");
    } else if (currentState === "championEnding") {
        questionText.textContent = "Ending: World Cup Champion! Your team wins the FIFA World Cup.";

        addAnswerButton("Play Again", "start");
    } else if (currentState === "mvpEnding") {
        questionText.textContent = "Ending: Tournament MVP! You become the best player of the tournament.";

        addAnswerButton("Play Again", "start");
    } else if (currentState === "teamHero") {
        questionText.textContent = "Ending: Team Hero. Your leadership inspires your country.";

        addAnswerButton("Play Again", "start");
    } else if (currentState === "runnerUp") {
        questionText.textContent = "Ending: Runner-Up. Your team reaches the final and earns respect.";

        addAnswerButton("Play Again", "start");
    }

}

renderQuestion();