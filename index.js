const buttons = document.querySelectorAll('div.divRelative button');
let mySound;
buttons[0].addEventListener('click', ()=>{
    mySound = new Audio ('/sounds/hit-hat.wav');
    mySound.play()
})
buttons[1].addEventListener('click', ()=>{
    mySound = new Audio ('/sounds/redoblante.wav');
    mySound.play()
})
buttons[2].addEventListener('click', ()=>{
    mySound = new Audio ('/sounds/tom1.wav');
    mySound.play()
})
buttons[3].addEventListener('click', ()=>{
    mySound = new Audio ('/sounds/tom2.wav');
    mySound.play()
})
buttons[4].addEventListener('click', ()=>{
    mySound = new Audio ('/sounds/tom3.wav');
    mySound.play()
})
buttons[5].addEventListener('click', ()=>{
    mySound = new Audio ('/sounds/tom4.wav');
    mySound.play()
})
buttons[6].addEventListener('click', ()=>{
    mySound = new Audio ('/sounds/bombo.wav');
    mySound.play()
})
buttons[7].addEventListener('click', ()=>{
    mySound = new Audio ('/sounds/crash.wav');
    mySound.play()
})



