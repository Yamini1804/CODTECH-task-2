const questions = [
    {
      question: "Which Programming language is used for web development?",
      options: ["C++", "Python", "Javascript", "Java"],
      answer: "Javascript",
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlink Text Markup Language", "Hyperlink Mark Language"],
        answer: "HyperText Markup Language",
    },
    {
        question: "CSS is used for?",
        options: ["Data Analysis", "Website Styling", "Backend Development", "Mobile Apps"],
        answer: "Website Styling"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const resultContainer = document.getElementById("result-container");
  const finalScore = document.getElementById("final-score");
  
  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach((option) => {
      const div = document.createElement("div");
      div.textContent = option;
      div.classList.add("option");
      div.addEventListener("click", () => selectAnswer(div, currentQuestion.answer));
      optionsContainer.appendChild(div);
    });
  }
  
  function selectAnswer(selectedDiv, correctAnswer) {
    if (selectedDiv.textContent === correctAnswer) {
      selectedDiv.classList.add("correct");
      score++;
    } else {
      selectedDiv.classList.add("incorrect");
    }
  
    const options = document.querySelectorAll(".option");
    options.forEach((option) => (option.style.pointerEvents = "none"));
  
 
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        showResult();
      }
    }, 500);
  }
  
  function showResult() {
    document.getElementById("question-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    finalScore.textContent = `Your Score: ${score} / ${questions.length}`;
  }
  
  displayQuestion();
  
