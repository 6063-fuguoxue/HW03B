let numCircles = 6000;
let circles = []; // use arrays to store the previous random circles
let circle = {} // store each circle as a dictionary

let x = 0, y = 0, r = 0;
let overlapping = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  fill(216,20,21);
  randomSeed(1010);

  for (let n=0; n<numCircles; n++) { // Get n number of circle proposals
    overlapping = false;
    // generate a circle at random position
    circle = {
      x: random(windowWidth), 
      y: random(windowHeight), 
      r: int(random(5,30)) // random circle diameter between 5 and 20
    }
    // If this is not the first circle, we need to check it against each of the previous circles
    if (circles.length != 0){ 
      for (let i=0; i<circles.length; i++) {
        // Get a previous circle from the list
        prevCircle = circles[i]; 
        // Get the distance between the current and previous circles
        let d = dist(circle.x, circle.y, prevCircle.x, prevCircle.y);
        if (d < (circle.r + prevCircle.r)) {
          overlapping = true;
          break;
        }
      }
    }

    // If no overlapping after checking, then draw the circle and add it to the list
    if (!overlapping) {
        circles.push(circle);
    }
  }
  // Draw the circles in the circles[] array
  for (let m=0; m<circles.length; m++){
    ellipse(circles[m].x, circles[m].y, circles[m].r * 2);
  }
}
