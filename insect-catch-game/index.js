
const screen = document.querySelector('.game-screen');
const messageEl = document.querySelector('.message')
const scoreEl = document.getElementById('score')
const timeEl = document.getElementById('time')
let m1 = 0,m2 = 0,s1 = 0,s2 = 0;
let score = 0
let sprites = {
    "fly":"🪰",
    "cat":"🐈",
    "dog":"🐕"
}

function createSprite(sprite){
    
    for(let i=0;i<2;i++) 
    {
        const el = document.createElement('div')
        el.classList.add('sprite')
        el.innerHTML = sprite;
        const {x,y} = generatePosition()
        el.style.left = x+'px'
        el.style.top = y +'px'
        screen.appendChild(el)

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

setInterval(()=>{

    s2==9 ? `${s2=0} ${s1++}`: s2++
    s1>0 && s1 == 9? s1 =0 : m2++,
    timeEl.innerText = `${m1} ${m2} : ${s1} ${s2}`;
},1000)
// test calls
createSprite(sprites.fly)
//