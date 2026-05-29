let currentState = "start";

const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");

function renderStory() {
    storyText.textContent = "The World Cup is about to begin. What do you do?";
}

renderStory();