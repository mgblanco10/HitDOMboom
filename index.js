const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three')

let mySound;
function play(button) {
    if(button.onclick===buttonOne){
    mySound = new Audio ('/sounds/tom1.wav');
    mySound.play()
    }
    if(button.onclick===buttonTwo){
    mySound = new Audio ('/sounds/redoblante.wav');
    mySound.play()
    }
    
  }


buttonOne.addEventListener('click', play);
buttonTwo.addEventListener('click', play)



