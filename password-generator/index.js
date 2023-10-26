
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const generate = document.getElementById('generate')
const upperCaseEl = document.getElementById('uppercase')
const numbersEl = document.getElementById('numbers')
const lowerCaseEl = document.getElementById('lowercase')
const symbolsEl = document.getElementById('symbols')
const clipboardEl = document.getElementById('clipboard')

// const trial = ()=>{
//     console.log(`${false + false + false+ false}`)
// }
// trial()

const randomFunc = {lower:getRandomLower,
                    upper:getRandomNumber,
                    number:getRandomNumber,
                    symbol:getRandomSymbol
                }


generate.addEventListener('click',()=>{
    const length = +lengthEl.value
    const hasLower = lowerCaseEl.checked;
    const hasUpper = upperCaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower,hasNumber,hasUpper,hasSymbol,length)
})                

function generatePassword(lower,upper,number,symbol,length){
    let generatedPassword = ''
    const typesCount = lower+upper+number+symbol;
    const typesArr = [{lower},{upper},{number},{symbol}].filter((item)=>Object.values(item)[0])

    if(typesCount==0)
    return ''

    for(let i =0; i<length;i+=typesCount){

        typesArr.forEach(type =>{

            const funcName = Object.keys(type)[0]
            generatedPassword +=randomFunc[funcName]()
        })
    }

    return generatedPassword.slice(0,length)

}

function getRandomLower(){

    return String.fromCharCode(Math.floor(Math.random()*26)+97)
}

function getRandomUpper(){

    return String.fromCharCode(Math.floor(Math.random()*26)+65)
}

function getRandomNumber(){

    return String.fromCharCode(Math.floor(Math.random()*10)+48)
}

function getRandomSymbol(){
    const symbols = "~!@#$%^&*()_+{}[]|\'',.<>/?`"
    return symbols[Math.floor(Math.random()*symbols.length)]
}

//console.log(getRandomSymbol())


clipboardEl.addEventListener('click',()=>{

    const textarea = document.createElement('textarea')
    const password = resultEl.innerText
    
    if(!password)
    return ''

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy');
    textarea.remove()

    alert('password copied to clipbaord !')

})
