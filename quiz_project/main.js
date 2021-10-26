// quiz to be given to user
const quiz = [
    {
        question:"What does HTML Stand For?",
        a:'HyperText Markup Language',
        b:'HyperActive Markup Language',
        c:'Hyper Markup Language',
        d:'None of the above',
        answer:'a'
    },
    {
        question:"What does CSS Stand For?",
        a:'Cascade Standard Style',
        b:'Cascading Style Sheets',
        c:'Style Sheet',
        d:'None of the above',
        answer:'b'
    },
    {
        question:"is Javascript a front end or front end?",
        a:'back',
        b:'front',
        c:'both',
        d:'None of the above',
        answer:'b'
    },
    {
        question:"What are some elements of HTML",
        a:'table, color, background-color',
        b:'table, images, font-weight',
        c:'links, lists, tables',
        d:'None of the above',
        answer:'c'
    }
]
  
// grabbing DOM elements
const quiz_container = document.querySelector('.quiz-container');
const question = document.querySelector('.question');
const answers = document.querySelectorAll('.answer'); 
const submitBTN = document.querySelector('#submitBTN');   
const answer_text_a = document.querySelector('.answer-text-a');
const answer_text_b = document.querySelector('.answer-text-b');
const answer_text_c = document.querySelector('.answer-text-c');
const answer_text_d = document.querySelector('.answer-text-d');

// core variables needed in code
let score = 0;
let quizCount = 0;
let correct = [];
let wrong = [];

// to load quiz when you come to the page
function loadQuiz(){
    const counter = quiz[quizCount];
    question.textContent = counter.question;
    answer_text_a.textContent = counter.a;
    answer_text_b.textContent = counter.b;
    answer_text_c.textContent = counter.c;
    answer_text_d.textContent = counter.d;
}

// selecting answer by ID to label 
function selectAnswer(){
    let select;
    answers.forEach(function(answer){
       
            if(answer.checked){
                select = answer.id; 
            }
    })
    return select;
}

// eventlisteners
// load content when page loads
window.addEventListener('DOMContentLoaded', loadQuiz);

// when hit submit button it checks answer
submitBTN.addEventListener('click', () => {
    const getAnswer = selectAnswer();
    
    // comparing answer, implenting score, either pushing correct or 
    // wrong to array to display in results
    if(getAnswer === quiz[quizCount].answer){
        score++;
        correct.push(quiz[quizCount].question);
    }else{
        wrong.push(quiz[quizCount].question);
    }
    quizCount++;
    
    // making sure all questions get on the quiz to be answered
    if(quizCount < quiz.length){
        loadQuiz();
    }else{

        // display results
      quiz_container.innerHTML = ` 
        <h1 class="summary">Results of your quiz</h1>
        <p class="space">You have successfully answered ${score} / ${quiz.length} questions correctly</p>
        
        <h1 class="summary"> You have gotten these questions correct</h1>
       <p class="space"> ${correct.join('<br/>')}</p>

        <h1 class="summary"> You have gotten these questions wrong</h1>
        <p class="space">${wrong.join('<br/>')}</p>

        <button class="btn" id="resetQuiz">Reset Quiz</button>
      `
      const resetBTN = document.querySelector('#resetQuiz');
      resetBTN.addEventListener('click', resetQuiz);
    }  
});
// to reset quiz
function resetQuiz(){
   location.reload();
}