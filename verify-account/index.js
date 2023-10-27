
const inpList = document.querySelectorAll('.inp')
let idx=0

inpList[0].focus()
window.addEventListener('keydown',(e)=>{

    if(e.key=='Backspace'){

        idx--
        if(idx<0)
        idx=0

        setTimeout(()=>inpList[idx].focus(),10)
    }
    else{
        inpList[idx].focus()
        idx++

        if(idx>inpList.length-1)
        idx=inpList.length-1;

    }

    
    // else{

    //     if(idx>inpList.length-1)
    //     idx=inpList.length-1

    //     if(idx<0)
    //     idx=0

    //     inpList[idx].value=e.key
    //     idx++
    // }

    

})