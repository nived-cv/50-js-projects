//10:40
//10:58

const password = document.getElementById('password')
const bg = document.getElementById('bg')
let data =''

password.addEventListener('input',(e)=>{

    data+=e.data
    let blurAmount = 8 - data.length;
    bg.style.filter = `blur(${blurAmount}px)`
    
})

