

const searchEl = document.querySelector('#search')
const listEl = document.querySelector('#list')
let search=''
// let peopleList = [{"name":"nived","place":"vadakara"},
//                     {"name":"das","place":"kozhikode"},
//                     {"name":"arun","place":"malappuram"},
//                     {"name":"arun","place":"malappuram"},
//                     {"name":"karnan","place":"ernakulam"},
//                 ]

getPeople()
async function getPeople(){

    const raw = await fetch('https://randomuser.me/api?results=20')
    const data = await raw.json()
    //console.log(data.results[0])
    createPeople(data.results)
}

function createPeople(data){

    let peopleHtml=''
    
    data.forEach((person)=>{

        let htmlFormat =  `
        <div class="item">
            <div class="profile-img"><img src="${person.picture.medium}"></div>
            <div class="text-section">
                <span class="name">${person.name.first}</span>
                <span class="place">${person.location.country}</span>
            </div>
        </div>
        `    
        peopleHtml +=htmlFormat;

    })
    listEl.innerHTML =peopleHtml
}

searchEl.addEventListener('input',()=>{

    const listOfPeople = document.querySelectorAll('.text-section')
    search=searchEl.value;


    listOfPeople.forEach((user)=>{

        const userName = user.querySelector('.name')
        const userPlace = user.querySelector('.place')

        user.parentNode.classList.remove('hidden')

        if(!(userName.innerText.includes(search)||userPlace.innerText.includes(search)))
        {
            user.parentNode.classList.add('hidden')
        }

        //listUserNames.parentNode.parentNode.classList.add('hidden')
    })

    //if(search.substring(listUserNames)||search.substring()){}

})

//createPeople(peopleList)

// const data = ["nived","me","ask me","me"]

// let arr = data.filter((x)=>x=="me")
// console.log(arr)
// search="hi meow"
// console.log(search.substring('i'))
