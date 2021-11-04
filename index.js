var sound0 = new Audio('sounds/crash.mp3');
var sound1 = new Audio('sounds/kick-bass.mp3');
var sound2 = new Audio('sounds/snare.mp3');
var sound3 = new Audio('sounds/tom-1.mp3');
var sound4 = new Audio('sounds/tom-2.mp3');
var sound5 = new Audio('sounds/tom-3.mp3');
var sound6 = new Audio('sounds/tom-4.mp3');

for (var i = 0; i < 7; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonPress(buttonInnerHTML);
  });
}

addEventListener("keydown", function(event){
makeSound(event.key);
buttonPress(event.key);
});


function makeSound(key) {

  switch (key) {
    case "w":
      sound0.play();
      break;

    case "a":
      sound1.play();
      break;

    case "s":
      sound2.play();
      break;

    case "d":
      sound3.play();
      break;

    case "j":
      sound4.play();
      break;

    case "k":
      sound5.play();
      break;

    case "l":
      sound6.play();
      break;

    default:
  }
}

function buttonPress(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);
  console.log(activeButton);

}
