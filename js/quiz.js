const questions =[
    {
        question: "¿Cuál es el animal más grande del mundo?",
        answers:[
            {text: "Tiburon", correct: false},
            {text: "Ballena", correct: true},
            {text: "Elefante", correct: false},
            {text: "Jirafa", correct: false},
        ]
    },
    {
        question: "¿Cuál es la ciudad más pequeña del mundo?",
        answers:[
            {text: "Ciudad del vaticano", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Sri Lanka", correct: false},
        ]
    },
    {
        question: "¿Cuál es el desierto más grande del mundo?",
        answers:[
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antartica", correct: true},
        ]
    },
    {
        question: "¿Cuál es el continente más pequeño del mundo?",
        answers:[
            {text: "Asía", correct: false},
            {text: "Australia", correct: true},
            {text: "Artica", correct: false},
            {text: "Africa", correct: false},
        ]
    }

];

const questionElement= document.getElementById("question");

const answerButton= document.getElementById("answer-buttons");

const nextButton= document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score= 0;

function starQuiz(){
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}
function resetState(){
    nextButton.style.display= "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++;
    } else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Tu puntuacion es ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Intentalo denuevo";
    nextButton.style.display= "block";

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        starQuiz();
    }
})

showQuestion();