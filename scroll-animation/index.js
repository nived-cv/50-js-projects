
const boxes = document.querySelectorAll('.box')

// const h1 = document.querySelector('h1')
// console.log(h1.getBoundingClientRect().x)

const checkBoxes = ()=>{
    const triggerBottom = window.innerHeight/ 5 * 4
    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top

        if(boxTop<triggerBottom)
        box.classList.add('show')
        else
        box.classList.remove('show')
    })
}

window.addEventListener('scroll',checkBoxes);

