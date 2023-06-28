let img;
let x2;
let y2;

let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;
let r = 50;
var w = window.innerWidth;
var h = window.innerHeight;


function preload(){
  img = loadImage("P5/Sfera_singola.svg");
}

var canvas;
function setup(){
  canvas=createCanvas(w, h);
  canvas.position(0,0);
  canvas.style('z-index', '1');
}

function draw(){
  //background(255);
  clear();
  // ellipse (mouseX, mouseY, 400, 400);
  image(img, mouseX-400, mouseY-400, 800, 800);


  x += xspeed;
  y += yspeed;
  
  
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
}