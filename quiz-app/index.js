

const quizContainer = document.querySelector('.quiz-container');
const questionEl = quizContainer.querySelector('h2')
const optionEls = quizContainer.querySelectorAll('.option')
const inputEls = quizContainer.querySelectorAll('input[name=answer]')
const btn = document.getElementById('btn');
let idx = 0
let curr_answer=''
let score=0

const questions = [
    {"question":"which of these is procedural language",
    "options":["c","c++","javscript","java"],
    "answer":"c"
    },
    {"question":"what is Earth ?",
    "options":["planet","star","juice","candy"],
    "answer":"planet"
    },
    {"question":"what is Moon ?",
    "options":["planet","star","satellite","Abraham Lincoln"],
    "answer":"satellite"
    },
    ]

// flow of excution starts here------

curr_answer = getNextQuestion()

btn.addEventListener('click',()=>{

    incrementScore()    

    if(idx>=questions.length - 1)
    renderResult()
    else{
        idx++
        curr_answer = getNextQuestion()
    }

    clearSelection()
})

// ------------------------------

function getNextQuestion(){

    const {question,options,answer} = questions[idx]
    questionEl.innerText = question;
    optionEls.forEach((el,idx)=> el.textContent = options[idx])
    inputEls.forEach((el,idx)=>   el.value=options[idx])
    return answer
}

function incrementScore(){
    
    inputEls.forEach((el)=>{
        if(el.checked && el.value == curr_answer)
        score++
    })
}

function renderResult(){

    quizContainer.innerHTML = `<h2> You scored ${score} / ${questions.length}`
}

function clearSelection(){
    inputEls.forEach( el => el.checked=false )
}



