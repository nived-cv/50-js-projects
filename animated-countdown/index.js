

const btn = document.getElementById('start')
let counter = document.getElementById('counter')
const text = document.getElementById('text')

btn.addEventListener('click',async(e)=>{

    e.target.classList.add('hidden')
    counter.classList.remove("hidden")
    text.innerText="Get Ready"
    console.log(e.target)
    countdown(e)
    //e.target.classList.remove('hidden')
})

function countdown(e){

    let count=3

    myInterval=setInterval(()=>{

        counter.innerText=count
        count--

        if(count<0)
        {
        clearInterval(myInterval)
        btn.classList.remove('hidden')    
        counter.classList.add("hidden")
        text.innerText="Go"
        }

    },1000)

    
}