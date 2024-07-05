const image = document.getElementById("image");
const start = document.getElementById("start");

let i = 1;
let id;
let audio = new Audio("../Asset/bad_apple.wav");
audio.preload = "auto";
start.addEventListener('click', () => {
    audio.addEventListener('play', () =>{
      id = setInterval(function() {
        image.src = "../Asset/image_sequence/bad_apple_"+ i.toLocaleString("en-US", {
          minimumIntegerDigits: 3,
          useGrouping: false
        }) + ".png";
        if (i == 6562){
          clearInterval(id);
        }
        i++;
      }, 33.4 )
    });
    audio.play();
});