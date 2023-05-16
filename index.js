// const buttons = document.querySelectorAll('div.divRelative button');
// let mySound;
// buttons[0].addEventListener('click', ()=>{
//     mySound = new Audio ('/sounds/hit-hat.wav');
//     mySound.play()
// })
// buttons[1].addEventListener('click', ()=>{
//     mySound = new Audio ('/sounds/redoblante.wav');
//     mySound.play()
// })
// buttons[2].addEventListener('click', ()=>{
//     mySound = new Audio ('/sounds/tom1.wav');
//     mySound.play()
// })
// buttons[3].addEventListener('click', ()=>{
//     mySound = new Audio ('/sounds/tom2.wav');
//     mySound.play()
// })
// buttons[4].addEventListener('click', ()=>{
//     mySound = new Audio ('/sounds/tom3.wav');
//     mySound.play()
// })
// buttons[5].addEventListener('click', ()=>{
//     mySound = new Audio ('/sounds/tom4.wav');
//     mySound.play()
// })
// buttons[6].addEventListener('click', ()=>{
//     mySound = new Audio ('/sounds/bombo.wav');
//     mySound.play()
// })
// buttons[7].addEventListener('click', ()=>{
//     mySound = new Audio ('/sounds/crash.wav');
//     mySound.play()
// })

const buttons = document.querySelectorAll(".small, .big");
const soundFiles = ['hit-hat', 'redoblante', 'tom1', 'tom2', 'tom3', 'tom4', 'bombo', 'crash'];

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    const mySound = new Audio('/sounds/' + soundFiles[index] + '.wav');
    mySound.play();
  });
});



