
const textElem = document.getElementById('joke');
const btn = document.getElementById('jokeBtn')

const getJoke = async()=>{

    const rawData  = await fetch('https://icanhazdadjoke.com/',{headers:{"Accept":"application/json"}})
    let getData = await rawData.json()
    joke = getData.joke
    textElem.innerText = joke
}

btn.addEventListener('click',getJoke)
getJoke()

