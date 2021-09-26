noseX = 0;
noseY = 0;

function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/c1MP3rdT/clownnose-3.png')
}

function setup()
{
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-12.5;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
    //fill(255, 0, 0); colour
    //stroke(255, 0, 0); border
    //circle(noseX , noseY , 30); shape
    
}

function take_snapshot()
{
    save('My_Flitered_Image.png');
}