const buttons = document.querySelectorAll(".small, .big");
const soundFiles = ['hit-hat', 'redoblante', 'tom1', 'tom2', 'tom3', 'tom4', 'bombo', 'crash'];

buttons.forEach(function(button, index) {
  button.addEventListener('click', function() {
    const mySound = new Audio('/sounds/' + soundFiles[index] + '.wav');
    mySound.play();
  });
});


const menu = document.querySelector(".navBurger");
const buttonMenu= document.querySelector(".burgerMenuOpen");
const buttonClose= document.querySelector(".burgerMenuClose");
const opacity = document.querySelector(".div");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    opacity.classList.remove('opacity');
    buttonClose.style.display = "none";
    buttonMenu.style.display = "flex";
  } else {
    menu.classList.add("showMenu");
    opacity.classList.add('opacity');
    buttonClose.style.display = "flex";
    buttonMenu.style.display = "none";
  }
}

buttonClose.addEventListener("click", toggleMenu);
buttonMenu.addEventListener("click", toggleMenu);

function redirectToPixabay() {
  // window.location.href = 'https://pixabay.com/es/sound-effects/';
  window.open('https://pixabay.com/es/sound-effects/', '_blank');
}




