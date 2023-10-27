//9:50
//10:26

const optionList = document.querySelectorAll('.option')
const imageSection = document.querySelector('.image-section')

optionList.forEach((option)=>{

    option.addEventListener('click',(e)=>{
        
        ShowImage(e.target.innerText)

        optionList.forEach((option)=>option.classList.remove('active'))
        option.classList.add('active')
    })
})

function ShowImage(url){

    imageSection.innerHTML = `<img src = ${url}.jpg>`;

}