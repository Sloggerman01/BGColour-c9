var ball
function setup() {
  createCanvas(400,400);
  background("white")
  ball = createSprite(200,200,20,20);
}

function draw() 
{
if(keyDown("right")){
  background("green");
}
  if(keyDown("left")){
    background("yellow");
  }
  if(keyDown("up")){
    background("red");
  }
 if(keyDown("down")){
   background("orange");
 }
drawSprites();
}




