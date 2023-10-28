
const container = document.querySelector('.container');
const loadingTime = 4
let idx = 0;
const rawData = [
        {"quote":"fantabolous service !! this is gigantic",
        "img":"https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80&w=1035&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name":"Muthuvel Pandiyan",
        "title":"jailer"
    },
    {
        "quote":"Amazing service !! this is bootifool",
        "img":"https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80&w=1035&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name":"Velayudhan",
        "title":"Forest man"
    },
    {
        "quote":"Horrible and this",
        "img":"https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80&w=1035&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "name":"MuthuPandi",
        "title":"Tamil paandi"
    }   
    ]

//execution here ```````````

setInterval(createCard,1000*loadingTime)

// ``````````````

function createCard(){

    const [quote,img,name,title] = getData()
    container.innerHTML = `
        <div class="progress"></div>
        <div class="quote">${quote}</div>
        <div class="person">
            <div class="image-section"><img src="${img}"></div>
            <div class="text-section">
                <p>${name}</p>
                <p>${title}</p>
            </div>
        </div>
    `
}

function getData(){

    idx >= rawData.length-1 ? idx=0 : idx++
    const {quote,img,name,title} = rawData[idx]
    return [quote,img,name,title]
}

// function deleteCard(){
//     const El = document.querySelector('.container')
//     El.remove()
// }