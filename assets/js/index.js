
$(document).ready(function () {
  $(".question").hide();
});
/**QUIZ QUESTIONS**/

let questions = [
  {
    question: "What is the italian capital?",
    img: "assets/images/rome.jpg",
    answers: [
      { text: "Rome", correct: true },
      { text: "Turin", correct: false },
      { text: "Milan", correct: false },
      { text: "Bari", correct: false },
    ],
  },
  {
    question: "How many seas has Italy?",
    img: "assets/images/sea.jpg",
    answers: [
      { text: "Two", correct: false },
      { text: "Four", correct: true },
      { text: "Three", correct: false },
      { text: "Over 5", correct: false },
    ],
  },
  {
    question: "Who was Leonardo Da Vinci?",
    img: "assets/images/leonardo.jpg",
    answers: [
      { text: "A politician of the roman empire", correct: false },
      { text: "a builder", correct: false },
      { text: "an artist, scientist,engineer and more...", correct: true },
      { text: "a theft", correct: false },
    ],
  },
  {
    question: "Why Garibaldi is famous?",
    img: "assets/images/garibaldi.jpg",
    answers: [
      { text: "He was a famour artist", correct: false },
      { text: "He lead a troop of a 1000 men to free Italy", correct: true },
      { text: "he was a rebel", correct: false },
      { text: "I have no idea", correct: false },
    ],
  },
  {
    question:
      "What is considerate internationally the fashion city in Italy and worldwide?",
    img: "assets/images/milan.jpg",
    answers: [
      { text: "Turin", correct: false },
      { text: "Rome", correct: false },
      { text: "Bari", correct: false },
      { text: "Milan", correct: true },
    ],
  },
  {
    question: "In what italian city was the pizza invented?",
    img: "assets/images/pizza.jpg",
    answers: [
      { text: "Milan", correct: false },
      { text: "Bologna", correct: false },
      { text: "Padova", correct: false },
      { text: "Napoli", correct: true },
    ],
  },
  {
    question: "What is the most drunk aperitif in Italy?",
    img: "assets/images/aperol.jpg",
    answers: [
      { text: "Aperol Spritz", correct: true },
      { text: "Amaretto coffee", correct: false },
      { text: "Mimosa coktail", correct: false },
      { text: "Chinotto", correct: false },
    ],
  },
  {
    question:
      "In what region of Italy is the National Museum of the Italian Risorgimento?",
    img: "assets/images/museum.jpg",
    answers: [
      { text: "Sicily", correct: false },
      { text: "Puglia", correct: false },
      { text: "Campania", correct: false },
      { text: "Piemonte", correct: true },
    ],
  },
  {
    question: "What does it mean in italian Prego?",
    img: "assets/images/prego.jpg",
    answers: [
      { text: "Thank you", correct: false },
      { text: "You are welcome", correct: true },
      { text: "See you soon", correct: false },
      { text: "Goodbye", correct: false },
    ],
  },
  {
    question: "Is what part of Italy is Venice located?",
    img: "assets/images/venice.jpg",
    answers: [
      { text: "North", correct: true },
      { text: "South", correct: false },
      { text: "Center Italy", correct: false },
      { text: "South east", correct: false },
    ],
  },
];

let questionContainer = document.getElementById("quiz-questions");
let questionElement = document.getElementById("question-info");
let answersButtonsClass = document.getElementsByClassName("answer-btn");
let nextButton = document.getElementById("next-button");
let shuffledQuestions, currentQuestion;
let imageElement = document.getElementById("image");
let scoreElement = document.getElementById("score-headings");
let scoreContainer = document.getElementById("score");
let tryAgain = document.getElementById("try-again-btn");
let restartGame = document.getElementById("restart-button");
let score = 0;
let answerButtonsArray;

$("#start-button").click(function () {
  $("#page").hide("slow");
  $(".question").show("fast");
});

startQuiz();

/**Shuffles the order of the quiz questions, starts the quiz and shows first question**/
function startQuiz() {

  /**Change the order of the questions**/
 shuffledQuestions = questions.sort(() => Math.random() - 0.5);

  /** Question index**/
  currentQuestion = 0;

  nextQuestion();
}

/**showing the next question**/
function nextQuestion() {
  nextButton.classList.add("d-none");
  showQuestion(shuffledQuestions[currentQuestion]);
  $(".answer-btn").prop("disabled", false);
}

/**question container with questions,images and answer buttons relative to each question**/

function showQuestion(question) {
  questionElement.innerText = question.question;
  imageElement.src = question.img;
  question.answers.forEach((answer, index) => {
    const button = document.getElementById("answer-btn-" + (index + 1));
    button.innerText = answer.text;
    button.removeAttribute("data-correct");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
/**empty array to reset the buttons**/
function selectAnswer(e) {
  answerButtonsArray = [];
  const selectedButton = e.target;
  if (selectedButton.dataset.correct === "true") {
    score++;
  }

  /**disabling the answers after each click**/
  $(".answer-btn").prop("disabled", true);
  Array.from(answersButtonsClass).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
    answerButtonsArray.push(button);
  });
  if (shuffledQuestions.length > currentQuestion + 1) {
    nextButton.classList.remove("d-none");
  } else {
    scoreContainer.classList.remove("d-none");
    questionContainer.classList.add("d-none");
    $("h3").hide();
    scoreElement.innerText = "Your score is: " + score + "/" + questions.length;
    quizOutcome();
    tryAgain.addEventListener("click", () => {
      scoreContainer.classList.add("d-none");
      score = 0;
      startQuiz();
      resetButtonState();
      questionContainer.classList.remove("d-none");
      $("h3").show();
    });
  }
}

  /**function with two statements of if or Else depending on the score**/
function quizOutcome() {
  if (score > 6) {
    $("#outcome").html(`<div class="text-center">  
         <a href="https://www.italymagazine.com/featured-story/five-documentaries-take-you-italy target="_blank">Watch this documentary if you are passionate about Italy and want to learn more</a> </div>`);
  } else {
    $("#outcome").html(`<div class="text-center">  
         <a href="https://www.nationalgeographic.com/travel/destinations/europe/italy/ target="_blank">We recommend you to check the National Geographic website to learn more about Italy</a> 
          
         </div>`);
  }
}

/**function onlclick add a class colour if correct green or if else red**/
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("green");
  } else {
    element.classList.add("red");
  }
}
/**remove function onclick remove the colour**/
function clearStatusClass(element) {
  element.classList.remove("green");
  element.classList.remove("red");
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  resetButtonState();
  nextQuestion();
});
/**resetting the buttons**/
function resetButtonState() {
  answerButtonsArray.forEach((element) => {
    clearStatusClass(element);
  });
}


