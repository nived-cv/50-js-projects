//2:28
//3:24

const inp = document.querySelector('#inp')
const form = document.querySelector('#form-input')
const container = document.querySelector('.container')
let text =''

renderItems()
inp.addEventListener('input',()=>{

    text = inp.value;
})

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    if(text!='')
    addToDo(text)
    inp.value=''
})

function renderItems(){

    let rawData = localStorage.getItem('savedData')
    if(rawData)
    {
        let dataList = JSON.parse(rawData)
        dataList.forEach((data)=>addToDo(data.text,data.completed))
    }
}

function addToDo(text,completed=false){

    const El = document.createElement('div')
    El.classList.add('entry')
    completed==true?El.classList.add('completed'):''
    El.innerText = text

    El.addEventListener('click',() => {
        El.classList.toggle('completed')
        updateStorage()
        
    })
    container.appendChild(El);
    updateStorage()
}

function updateStorage(){

    let savedData = []
    const entries = document.querySelectorAll('.entry')
    entries.forEach(entry => savedData.push({"text":entry.innerText,"completed":entry.classList.contains('completed')}))
    localStorage.setItem('savedData',JSON.stringify(savedData))
}