

const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')


setTimeout(getData,2000)


function getData  (){

    header.innerHTML=`
    <img src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    `
    title.innerHTML = `
    Lorem ipsum dolor sit amet.
    `

    excerpt.innerHTML = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ratione.
    `

    profile_img.innerHTML = `
    <img src="https://images.unsplash.com/photo-1606122017369-d782bbb78f32?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">

    `

    name.innerHTML =  'John Doe'
    date.innerHTML = 'Oct 8 , 2020'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))

}