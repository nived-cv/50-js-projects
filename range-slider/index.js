

const range = document.getElementById('range')


range.addEventListener('input',(e)=>{

    const value = +e.target.value;  // plus sign convert to value of number for some reason !!??
    const label = e.target.nextElementSibling
  
    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(label).getPropertyValue('width');

    let num_width = parseInt(label_width);
    let slide_width = parseInt(range_width);

    const max = +e.target.max
    const min = +e.target.min

    const left = value * (slide_width/max) - (num_width/2)
    label.style.left = `${left}px`

    console.log(num_width,slide_width)
    label.innerHTML = value;
})
