

const addNote = document.getElementById('addNote');
const board = document.getElementById('board');

function render(){

    let notes=localStorage.getItem('notes')
    console.log(notes)

    retvd = JSON.parse(notes);
    retvd.forEach((note)=>{
            createNote(note)
        })
    }
render()


addNote.addEventListener('click',()=>{

    createNote()
})

function createNote(textData){

    let note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `

        <div class="options">
            <button id="edit">e</button>
            <button id="delete">x</button>
        </div>

        <div class="text-section ">
            <div class="show-text">${textData?textData:''}</div>
            <textarea >${textData?textData:''}</textarea>
        </div>
    `
    addFunctionsToNote(note)
    board.appendChild(note)

}

function addFunctionsToNote(note){

    let deleteBtn = note.querySelector('#delete')
    let editBtn = note.querySelector('#edit')
    const showText = note.querySelector('.show-text')
    const textarea = note.querySelector('textarea')
    
    deleteBtn.addEventListener('click',(e)=>{

        const parentnode = e.target.parentNode.parentNode;

        parentnode.remove()
        updateLs()
    })


    editBtn.addEventListener('click',()=>{

        const textSection = note.querySelector('.text-section');
        
        //saveText(textarea,showText)
        textSection.classList.toggle('write-mode');
        
    })

    textarea.addEventListener('input',()=>{
        saveText(textarea,showText)
    })
}

function saveText(inputEl,outputEl){

    outputEl.innerText = inputEl.value;

    // key = value.slice(0,2);
    // localStorage.setItem(key,value)
    // let keyArr = []    
    
    updateLs()

    // keyArr.push(key)
    // console.log("savetext",keyArr)
    // keyArr = JSON.stringify(keyArr)
    // localStorage.setItem("keyArr",keyArr)

}

function updateLs(){

    const notesText = document.querySelectorAll('textarea')
    let notes = []

    notesText.forEach(note=>notes.push(note.value))
    //console.log(notes)

    localStorage.setItem("notes",JSON.stringify(notes))
}


// reference for typed code

//const deleteButtons = document.getElementById('edit');

// deleteButtons.addEventListener('click',(e)=>{

//     console.log(notes[0].getElementsByTagName('textarea')[0].value)
// })


// deleteButtons.forEach((btn)=>{

//     btn.addEventListener('click',(e)=>{

//         let node = e.target.parentNode.parentNode;
//         node.remove()
//     })
// })

