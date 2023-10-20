


const counters =  document.querySelectorAll('.counter')

counters.forEach((counter)=>{
    counter.innerText=0
    const target = parseInt(counter.getAttribute('data-target'));

    const updateCounter = ()=>{
       
        let count = counter.innerText

        count++
        counter.innerText = count

        if(count==target)
        clearInterval(count_interval)
    }
    
    
    const count_interval = setInterval(updateCounter,1)


})


//updateCounter()

