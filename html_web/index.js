const image = document.getElementById("image");
const start = document.getElementById("start");

let i = 1;
let id;
let audio = new Audio("../Asset/bad_apple.wav");
audio.load();

start.addEventListener('click', () => {
  audio.addEventListener("loadeddata", () => {
    audio.addEventListener('play', () =>{
      id = setInterval(function() {
        image.src = "../Asset/image_sequence/bad_apple_"+ i.toLocaleString("en-US", {
          minimumIntegerDigits: 3,
          useGrouping: false
        }) + ".png";
        i++;
      }, 33.5 )
    });
    audio.addEventListener('close', () =>{
      clearInterval(id);
    });
    audio.play();
  })
});