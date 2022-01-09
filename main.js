song = "";


function preload() {
  song = loadSound("Spidey.mp3");
}

function setup() {
    canvas = createCanvas(400,400);
    video = createCapture(VIDEO);

    canvas.center();
    video.hide();

}

function draw() {
    image(video,0,0,400,400);
}

function play() {
  song.play();
  song.setVolume(1);
song.setSpeed(1);
}

