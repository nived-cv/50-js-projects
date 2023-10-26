
const container = document.getElementById('container')

const squaresno = (container.offsetWidth * container.offsetHeight)/(14*14);

function constructSquares(){

    smallSquareHtml = `

        <div class='square-small'>
        </div>
    `
    let totalSquare = ''
    for(let i=0;i<squaresno;i++)
    {
        totalSquare+=smallSquareHtml
    }
    container.innerHTML=totalSquare;

    let allSquares=container.querySelectorAll('.square-small');
    allSquares.forEach((square)=>{
        square.addEventListener('mouseover',(e)=>{

            e.target.style.backgroundColor=getRandomColor()

        })

        square.addEventListener('mouseleave',(e)=>{

            setTimeout(()=>{
            e.target.style.backgroundColor='#aaa'

            },400)

        })
    })
}

function getRandomColor(){
    colorList = ["red","blue","green","lightgreen","orange","rebeccapurple","teal"]

    return colorList[Math.floor(Math.random()*colorList.length)]

}


constructSquares()