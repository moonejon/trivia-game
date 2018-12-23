let trivia1 = {
  question: "What is the name of the Doctor's home planet?",
  answers: ["Trenzalore", "Mars", "Gallifrey", "Skaro"],
  correctAnswer: [2]
};

let trivia2 = {
  question: "What actress played the character of Rose Tyler?",
  answers: [
    "Billie Piper",
    "Keira Knightley",
    "Emma Thompson",
    "Kylie Minogue"
  ],
  correctAnswer: [0]
};

let triviaQuestions = [trivia1, trivia2];

function generateQuestionCards() {
  for (i = 0; i < triviaQuestions.length; i++) {
    var questionsList = document.getElementById("questionsList");
    var card = document.createElement("div");
    card.className = "card w-50";
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var cardHeader = document.createElement("h4");
    cardHeader.className = "card-title";
    cardHeader.innerText = triviaQuestions[i].question;
    var cardFormDiv = document.createElement("div");
    questionsList.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(cardHeader);
    for (j = 0; j < triviaQuestions[i].answers.length; j++) {
      cardFormDiv.className = "form-check";
      cardBody.appendChild(cardFormDiv);
      var formInputRow = document.createElement("div");
      var formInput = document.createElement("input");
      formInput.className = "form-check-input";
      formInput.type = "radio";
      formInput.name = "Answer " + triviaQuestions[i].answers.indexOf;
      cardFormDiv.appendChild(formInputRow);
      formInputRow.appendChild(formInput);
    }
  }
  //   document.body.appendChild(questionsList);
}

generateQuestionCards();
