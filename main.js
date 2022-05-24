nose_X = 0;
nose_Y = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        nose_X = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("x position of nose = " + nose_X + "y position of nose = " + nose_Y);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("LeftWristX = " + leftWristX + "RightWristX = " + rightWristX + "difference" + difference);
    }
}

function modelLoaded() {
console.log("poseNet Initilized");
}

function draw() {
    document.getElementById("square_size").innerHTML = "Width And Heigth of Square will be = " + difference + "px";

    background("white");
    fill("#2A6478");
    stroke("#2A6478");
    square(nose_X, nose_Y, difference);
}

