text('Aaron', 50, 400);
noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;
function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500)
        
canvas = createCanvas(550, 350);
canvas.position(550, 150)

poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose', gotposes)
}
function gotposes(results)
{
if(results.length > 0)
{
    console.log(results)
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = "+ noseX +"noseY ="+ noseY )
    leftwristX = results[0].pose.leftWrist.x
    rightwristX = results[0].pose.rightWrist.x
    difference = floor(leftwristX - rightwristX)
}
}
function modelloaded()
{
    console.log('poseNst is initialized')
}
function draw()
{
    background('#969792')
    document.getElementById("square_sides").innerHTML = "width and heigth of the square will be" + difference
    text('Aaron', 50, 400);
    square(noseX, noseY, difference)
}
