const questions = [
  {
    question:
      " If you want to import just the Component from the React library, what syntax do you use?",
    answers: [
      { text: "A. import React.Component from 'react'", correct: false },
      { text: "B. import [ Component ] from 'react' 'react'", correct: false },
      { text: "C. import Component from 'react'", correct: false },
      { text: "D. import { Component } from 'react'", correct: true },
    ],
  },
  {
    question:
      "Given the following code, what does this React element look like? React.createElement('h1', null, 'What's happening?') ",

    answers: [
      { text: "A. h1 props={null}>What's happening? h1   ", correct: false },
      { text: "B. h1 What's happening? h1", correct: true },
      { text: "C. h1 id='component'>What's happening? h1", correct: false },
      { text: "D. h1 id='element'>What's happening? h1", correct: false },
    ],
  },
  {
    question: "When do you use useLayoutEffect?",
    answers: [
      { text: "A. to optimize for all devices", correct: false },
      { text: "B. to complete the update", correct: true },
      { text: "C. to change the layout of the screen", correct: false },
      {
        text: "D. when you need the browser to paint before the effect runs",
        correct: false,
      },
    ],
  },
  {
    question:
      " How do you destructure the properties that are sent to the Dish component?  ",
    answers: [
      {
        text: "A. function Dish([name, cookingTime]) { return h1{name} {cookingTime}h1; }",
        correct: false,
      },
      {
        text: "B.function Dish({name, cookingTime}) { return h1 {name} {cookingTime} h1; }",
        correct: true,
      },
      {
        text: "C.function Dish(props) { return h1 {name} {cookingTime} h1; }",
        correct: false,
      },
      {
        text: "D.function Dish(...props) { return h1 {name} {cookingTime} h1; }",
        correct: false,
      },
    ],
  },
  {
    question:
      "Why is it important to avoid copying the values of props into a component's state where possible?",
    answers: [
      { text: "A. because you should never mutate state", correct: false },
      {
        text: "B. because getDerivedStateFromProps() is an unsafe method to use",
        correct: false,
      },
      {
        text: "C. because you want to allow a component to update in response to changes in the props",
        correct: true,
      },
      {
        text: "D. because you want to allow data to flow back up to the parent",
        correct: false,
      },
    ],
  },
  {
    question: "What is the children prop?",
    answers: [
      {
        text: "A. a property that adds child components to state",
        correct: false,
      },
      {
        text: "B. a property that lets you set an array as a property",
        correct: false,
      },
      {
        text: "C. a property that lets you pass data to child elements",
        correct: false,
      },
      {
        text: "D. a special property that JSX creates on components that contain both an opening tag and a closing tag, referencing it's contents.",
        correct: true,
      },
    ],
  },
  {
    question: "Which library does the fetch() function come from?",
    answers: [
      { text: "A. FetchJS", correct: false },
      { text: "B. ReactDOM", correct: false },
      {
        text: "C. No library. fetch() is supported by most browsers.",
        correct: true,
      },
      { text: "D. React", correct: false },
    ],
  },
  {
    question: " What is Axios in the context of React.js?",
    answers: [
      { text: "A styling library", correct: false },
      { text: "B. A state management tool", correct: false },
      {
        text: "C. A JavaScript library for making HTTP requests",
        correct: true,
      },
      { text: "D. A routing library", correct: false },
    ],
  },
  {
    question: " How do you install Axios in a React project??",
    answers: [
      { text: "A. npm install react-axios", correct: false },
      { text: "B. npm install axios", correct: true },
      { text: "C. npm install react-http", correct: false },
      { text: "D. npm install http-axios-react", correct: false },
    ],
  },
  {
    question: "  How do you handle errors in an Axios request?",
    answers: [
      { text: "A. Using the error method", correct: false },
      { text: "B. Using the fail method", correct: false },
      { text: "C. Using the handleError method", correct: false },
      { text: "D. Using the catch method", correct: true },
    ],
  },
  {
    question: " How can you pass parameters in an Axios POST request in React?",
    answers: [
      { text: "A. Using the data property", correct: true },
      { text: "B. Using the params property", correct: false },
      { text: "C. Using the body property", correct: false },
      { text: "D. Using the payload property", correct: false },
    ],
  },
  {
    question:
      "In React, what is a common approach to managing Axios requests in functional components?",
    answers: [
      { text: "A. Utilizing the useEffect hook", correct: true },
      {
        text: "B. Using the componentDidMount lifecycle method",
        correct: false,
      },
      {
        text: "C. Embedding Axios calls directly in the component body",
        correct: false,
      },
      {
        text: "D. Creating a separate class for Axios requests",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is the primary advantage of using Axios over the traditional fetch API in React?",
    answers: [
      { text: "A. Axios provides a simpler syntax", correct: false },
      { text: "B. Axios is faster in making HTTP requests", correct: false },
      {
        text: "C. Axios has built-in support for interceptors and cancel tokens",
        correct: true,
      },
      {
        text: "D. Axios is the official HTTP library recommended by the React team",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  let questionContent = questionNo + ". " + currentQuestion.question + "<br>";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });

  questionElement.innerHTML = questionContent;
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
