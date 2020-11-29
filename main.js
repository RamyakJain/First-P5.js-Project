function preload(){

}
function setup(){
    canvas = createCanvas(1000, 1000);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    fill(255, 255, 255);
    square(300, 20, 395);
    image(video,400, 100, 220, 250);
    fill(0, 0, 250);
    stroke(0,0,250);
    circle(350, 60, 50);
    circle(650, 60, 50);
    fill(240, 240, 0);
    circle(410, 60, 50);
    fill(173,216,230);
    circle(470, 60, 50);
    fill(2.5,250,2.5);
    circle(470, 60, 50);
    fill(240, 240, 0);
    circle(530, 60, 50);
    fill(2.5,250,2.5);
    circle(590, 60, 50);
    fill(240, 240, 0);
    circle(410, 60, 50);
    fill(240,240,0);
    circle(350, 130, 50);
    fill(2.5,250,2.5);
    circle(350, 205, 50);
    fill(240, 240, 0);
    circle(350, 275, 50);
    fill(2.5,250,2.5);
    circle(350, 335, 50);
    fill(0, 0, 250);
    circle(350, 390, 50);
    fill(240, 240, 0);
    circle(410, 390, 50);
    fill(173,216,230);
    circle(470, 390, 50);
    fill(2.5,250,2.5);
    circle(470, 390, 50);
    fill(240, 240, 0);
    circle(530, 390, 50);
    fill(2.5,250,2.5);
    circle(590, 390, 50);
    fill(240, 240, 0);
    circle(410, 390, 50);
    fill(0, 0, 250);
    circle(650, 390, 50);
    fill(240,240,0);
    circle(350, 130, 50);
    fill(2.5,250,2.5);
    circle(350, 205, 50);
    fill(240, 240, 0);
    circle(650, 275, 50);
    fill(2.5,250,2.5);
    circle(650, 335, 50);
    fill(2.5,250,2.5);
    circle(650, 205, 50);
    fill(240, 240, 0);
    circle(650, 275, 50);
    fill(2.5,250,2.5);
    fill(240,240,0);
    circle(650, 130, 50);
}
function take_snapshot(){
    save('image.png');
}