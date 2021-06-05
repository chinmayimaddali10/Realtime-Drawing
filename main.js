noseX = 0;
noseY = 0;
rightWX = 0;
leftWX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    posenet = ml5.poseNet(video, modeloaded);
    posenet.on('pose', gotposes);
}

function modeloaded() {
    console.log("posenet is working");
}

function draw() {
    background('#00ffff');
    document.getElementById("squareSide").innerHTML = "width and hight of the square will be " + difference + " pixels"
    fill('#ff0066');
    stroke('#ff0066');
    square(noseX, noseY, difference);
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX" + noseX + "noseY" + noseY);
        rightWX = results[0].pose.rightWrist.x;
        leftWX = results[0].pose.leftWrist.x;
        difference = floor(rightWX - leftWX);
        console.log("rightWX" + rightWX + "leftWX" + leftWX + "difference" + difference);

    }
}