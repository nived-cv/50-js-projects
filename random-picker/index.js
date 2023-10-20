

const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)

    if(e.key == 'Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)
        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag=> tag.trim()!=='').map(tag => tag.trim())
    tagsEl.innerHTML=''
    tags.forEach((tag)=>{
            const tagEl = document.createElement('span')
            tagEl.classList.add('tag')
            tagEl.innerText = tag
            tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
    let times = 10
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()

        //console.log(randomTag)
        highLightTag(randomTag)

        setTimeout(()=>{
            unhighLightTag(randomTag)
        },100)
        times==0?finalOption(interval,randomTag):times--;

    },100)

}

//look why there is a delay , shouldn't the highlight work even withoyut setTimeout

function finalOption(interval,tag){
    clearInterval(interval)
    setTimeout(()=>{
        highLightTag(tag)
    },100)
    console.log(tag)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highLightTag(tag){
    tag.classList.add('highlight')
}
function unhighLightTag(tag){
    tag.classList.remove('highlight')
}