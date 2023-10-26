//finish within 5:15

const next = document.getElementById('next')
const prev = document.getElementById('prev')
const slider= document.getElementById('slider')
const itemCount = document.querySelectorAll('.image-container').length;
let idx =0;

setInterval(()=>{
    idx++;
    moveImage()
},1000)

prev.addEventListener('click',()=>{
    idx--;
    moveImage()
})
next.addEventListener('click',()=>{

    idx++;
    moveImage();
})



function moveImage(){

    if(idx<0)
    idx=(itemCount - 1)

    else if(idx>itemCount - 1)
    idx=0

    slider.style.transform=`translateX(${-idx * 280}px)`

}
