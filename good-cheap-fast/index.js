

const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')
const toggleList = document.querySelectorAll('.toggle')
let checkedList =[]

toggleList.forEach((toggle)=>{

    toggle.addEventListener('change',()=>{

        //console.log(checkedList.length)
        if(toggle.checked)
        checkedList.push(toggle)
        else
        checkedList.pop(toggle)

        if(checkedList.length == toggleList.length)
        {
            checkedList[0].checked=false
            checkedList=checkedList.slice(1,checkedList.length)
        }
    })

})

