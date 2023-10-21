

const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('drop',dragDrop)
    empty.addEventListener('dragleave',dragLeave)
}

function dragStart(){
    this.classList.add('hold');
    setTimeout(()=>this.className ='invisible',0)
}

function dragEnd(){
    this.className='fill'
}

function dragLeave(){
    this.classList.remove('hovered')
}

function dragOver(e){
    e.preventDefault()
    
    this.classList.add('hovered')
}
function dragEnter(e){
    e.preventDefault()
}
function dragDrop(){

    this.class= 'empty';
    this.append(fill);
}