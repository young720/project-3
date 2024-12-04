
function stations () {
  document.getElementById("header").innerHTML = "You clicked the radio tuner. If you didn't have a cassette, you could poke around radio stations to hear popular music, sports, or a radio talk show.";
}

function play() {
  var audio = new Audio('project 3 images/Boombox Bruno Audio.mp3');
  audio.play();
  document.getElementById("header").innerHTML = "You clicked the pause/play button! Enjoy the music! It's designed to mimic the sound quality an actual boombox would produce. Now try exploring other buttons.";
}

function reverse() {
  document.getElementById("header").innerHTML = "You clicked the reverse button. This reverses the tape. Depending on machine, this could be until you stop holding the reverse button or it reverses for the entire tape.";
}
function stop() {
  document.getElementById("header").innerHTML = "You clicked the stop button. Unlike pause, stop completely ends the playing of the music by disenaging the tape.";
}
function fastForward() {
  document.getElementById("header").innerHTML = "You clicked the fast-forward button. This fast-forwards through the tape, either until you stop holding it or until the tape ends, depending on machine.";
}
function cassetteOptions() {
  document.getElementById("header").innerHTML = "You clicked where a cassette would be inputted. The same cassette could be put in a walkman or boombox. In later models, this was repalced with a DVD input.";
}
