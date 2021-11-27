var numberOfButtons = document.querySelectorAll(".drum").length;

// DETECTING BUTTON PRESS
for(var i = 0 ; i < numberOfButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick(){
 var sound =this.innerHTML;
 makeSound(sound);
 buttonPress(sound);

}

// DETECTING KEYBOARD PRESS
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonPress(event.key);
});

// ADDING PRESS CLASS
function buttonPress(element){
    var bttnp = document.querySelector("." + element);
    bttnp.classList.add("pressed");
    setTimeout(function()
    { bttnp.classList.remove("pressed");},100);
}


function makeSound(key){

    switch(key){
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            case 'a':
               var audio = new Audio('./sounds/tom-2.mp3');
               audio.play();
               break;
               case 's':
                   var audio = new Audio('./sounds/tom-3.mp3');
                   audio.play();
                   break;
                   case 'd':
                       var audio = new Audio('./sounds/tom-4.mp3');
                       audio.play();
                       break;
   
                       case 'j':
                           var audio = new Audio('./sounds/snare.mp3');
                           audio.play();
                           break;
   
                           case 'k':
                               var audio = new Audio('./sounds/crash.mp3');
                               audio.play();
                               break;
                               case 'l':
                                   var audio = new Audio('./sounds/kick-bass.mp3');
                                   audio.play();
                                   break;
    }

}
// document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);


// var audio = new Audio('./sounds/tom-1.mp3');
// audio.play();