const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Google Inc. was founded in ____ ?',
    answers: [
      { text: '1995', correct: false },
      { text: '1989', correct: false },
      { text: '1998', correct: true },
      { text: '2000', correct: false }
    ]
  },
  {
    question: ' What is the correct URL link to access your Google account?',
    answers: [
      { text: 'https://yahoo.com', correct: false },
      { text: 'https://hotmail.com/SignUp', correct: false },
      { text: 'None of the above', correct: false },
      { text: 'https://accounts.google.com/SignUpWithoutGmail?hl=e', correct: true }
    ]
  },
  {
    question: 'Google hangout was developed by?',
    answers: [
      { text: 'Google +', correct: true },
      { text: 'Google Talk', correct: false },
      { text: 'Hangouts', correct: false },
      { text: 'Allo', correct: false }
    ]
  },
  {
    question: 'Which is not a colour of google?',
    answers: [
      { text: 'Green', correct: false },
      { text: 'Orange', correct: true },
      { text: 'Red', correct: false },
      { text: 'Peach', correct: false }
    ]
  },
  {
    question: 'Where are documents that you place on Google Drive stored?',
    answers: [
      { text: 'On your school network', correct: false },
      { text: 'On a flash drive', correct: false },
      { text: 'In the cloud', correct: true },
      { text: 'Somewhere in claifornia', correct: false }
    ]
  },
  {
    question: 'What is the title of Google new browser?',
    answers: [
      { text: 'Google Chrome', correct: true },
      { text: 'Moxilla', correct: false },
      { text: 'Chrominism', correct: false },
      { text: 'Google Chromous', correct: false }
    ]
  },
  {
    question: 'The word "Google" originated from a misspelling of:',
    answers: [
      { text: 'Googad', correct: false },
      { text: 'Googol', correct: true },
      { text: 'Goolink', correct: false },
      { text: 'Goosearch', correct: false }
    ]
  },
  {
    question: 'Google was founded by Larry Page and who else?',
    answers: [
      { text: 'Terry Winograd', correct: false },
      { text: 'Steve Jobs', correct: false },
      { text: 'Sergey Brin', correct: true },
      { text: 'Bill Gates', correct: false }
    ]
  }
]