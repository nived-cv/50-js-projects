

const btn = document.getElementById('button')
const toast = document.getElementById('toasts')
const messages = ["message1","messages2","messages3"]

btn.addEventListener('click',createNotification)

function createNotification(){

    const notif =  document.createElement('div')
    notif.classList.add('toast');
    notif.innerText = getRandomMessage()
    toast.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },3000)
}


function getRandomMessage(){

    return messages[Math.floor(Math.random() * messages.length)]
}