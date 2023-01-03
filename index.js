
function clickHandler(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(innerHTML);
            break;
    }
}

function keyPress(event) {
    return event.key;
}

var buttonLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < buttonLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        clickHandler(buttonInnerHTML);

        buttonActive(buttonInnerHTML);
        
    });
}

document.addEventListener("keydown", function(event) {

    clickHandler(event.key);
    
    buttonActive(event.key);

})

function buttonActive(currentKey) {

    var currentClass = "." + currentKey;

    document.querySelector(currentClass).classList.add("pressed");
    
    setTimeout(function() {document.querySelector(currentClass).classList.remove("pressed")}, 100);
    
}