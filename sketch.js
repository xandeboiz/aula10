var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
  box.shapeColor = "white";
}

function draw() 
{
  background(30);
  movimento();
  drawSprites();
}

function movimento() {
  if(keyWentDown("left")){
    box.velocityX = -5;
  }
  if(keyWentUp("left")){
    box.velocityX = 0;
  }
  if(keyWentDown("right")){
    box.velocityX = 5;
  }
  if(keyWentUp("right")){
    box.velocityX = 0;
  }
  if(keyWentDown("up")){
    box.velocityY = -5;
  }
  if(keyWentUp("up")){
    box.velocityY = 0;
  }
  if(keyWentDown("down")){
    box.velocityY = 5;
  }
  if(keyWentUp("down")){
    box.velocityY = 0;
  }
}