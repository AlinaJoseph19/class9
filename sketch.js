var ball 
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if(keyDown("right")){
    ball.x = ball.x + 2
    ball.y = ball.y + 0
  }
  if(keyDown("left")){
    ball.x = ball.x - 2
    ball.y = ball.y + 0
  }
  if(keyDown("up")){
    ball.x = ball.x + 0
    ball.y = ball.y + 2
  }
  if(keyDown("down")){
    ball.x = ball.x + 0
    ball.y = ball.y - 2
  }
 drawSprites()
 
}




