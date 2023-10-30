
const startScreen = document.querySelector('.start-screen')
const startBtn = document.querySelector('#startBtn')
const playerSelectScreen = document.querySelector('.choose-insect')
const characters = document.querySelectorAll('.character')
const gameScreen = document.querySelector('.game-screen');
const messageEl = document.querySelector('.message')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
let m1 = 0,m2 = 0,s1 = 0,s2 = 0;
let score = 0

//execution starts here
startBtn.addEventListener('click',()=>{
    startScreen.classList.add('inactive')
    setTimeout(()=> startScreen.remove(),800)
    playerSelectScreen.classList.remove('inactive')
})

characters.forEach((character)=>{
    character.addEventListener('click',(e)=>{
        playerSelectScreen.classList.add('inactive')
        setTimeout(()=>playerSelectScreen.remove(),800)
        gameScreen.classList.remove('inactive')
        let sprite=e.target.querySelector('.image').innerText
        console.log(sprite)
        createSprite(sprite)
        setInterval(timeIncrement,1000)
    })
})
//ends here

function createSprite(sprite){
    
    for(let i=0;i<2;i++) 
    {
        const el = document.createElement('div')
        el.classList.add('sprite')
        el.innerHTML = sprite;
        const {x,y} = generatePosition()
        el.style.left = x+'px'
        el.style.top = y +'px'
        gameScreen.appendChild(el)

        el.addEventListener('click',e => removeSprite(el) )
    }
}

function generatePosition(){

    let x = Math.ceil(Math.random() *  window.innerWidth)
    let y = Math.ceil(Math.random() *  window.innerHeight)
    return {x,y}
}

function removeSprite(el){

    scoreIncrement()
    createSprite(el.innerHTML)
    el.remove()
}

function scoreIncrement(){

    score++
    scoreEl.innerText = score

    if(score == 20)
    messageEl.classList.add('active')
}

function timeIncrement(){
    if(s2>=9) {
        s2=0;
        s1++;
    }
    else
    s2++

    if(s1>=5) {
        s1=0
        m2++
    }

    if(m2>=9) {
        m2=0
        m1++
    }
    timeEl.innerText = `${m1} ${m2} : ${s1} ${s2}`
}