
const feedbackEls = document.querySelectorAll('.feedback')
const container = document.getElementById('container')
const btn = document.querySelector('.btn')

let selectedFeedback = ''

feedbackEls.forEach(el => el.addEventListener('click',feedbackSelect))

async function feedbackSelect(el){
    el.preventDefault()

    const feedbackBox = el.target.parentNode
    feedbackEls.forEach((element) => element.classList.remove('active'))

    setTimeout(()=>feedbackBox.classList.add('active'),50)

    selectedFeedback=feedbackBox.innerText.slice(2,)
}

btn.addEventListener('click',()=>{

    if(selectedFeedback!=''){
        let responseEl = document.createElement('div');
        responseEl.classList.add('response')
        responseEl.innerHTML=`
                <p>❤️</p>
                <p>Thank You</p>
                <p>Feedback <span>${selectedFeedback}</span></p>
                <p>We'll use your feedback to improve our customer support</p>
        `
        container.classList.add('hidden')
        document.body.appendChild(responseEl)
    }
})

