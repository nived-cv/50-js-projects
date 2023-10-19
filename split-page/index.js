

const left = document.querySelector('.left')
const right = docuemnt.querySelctor('.right')
const container = document.querySelector('container')

left.addEventListener('mouseenter',()=>{
    container.classList.add('hover-left')
})