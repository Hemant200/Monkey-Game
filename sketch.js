
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var ground
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  createCanvas(600,400);
  monkey = createSprite(100,300,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  //ground
  ground = createSprite(400,335,800,5);
 
 
 
  
  //group
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
}


function draw() {
background("white");

if (gameState===PLAY)
{
  if (keyDown("space")&&monkey.y>295)
{
  monkey.velocityY=-12;
}
  monkey.velocityY=monkey.velocityY+0.8;
  //collide
  monkey.collide(ground);
  Banana();
  obstacles();
}
  //collide
  monkey.collide(ground);
  
    if(obstaclesGroup.isTouching(monkey)){
        gameState = END;
    }
  else if (gameState === END) 
{
  bananaGroup.setVelocityXEach=0;
  obstaclesGroup.setVelocityXEach=0;
  obstaclesGroup.setLifetimeEach(-1);
  
}
  
  if (monkey.isTouching(bananaGroup)) 
      {
      bananaGroup.destroyEach();
      }
  score = frameCount/frameRate();
    drawSprites();
  
 

  
  
  
}

function Banana()
{ 
  if (frameCount%80===0) 
 {
  banana = createSprite(600,300,10,10);
  banana.y=Math.round(random(190,270))
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-12;
  banana.lifetime=200;
  bananaGroup.add(banana);
 }
}
function obstacles()
{
  if (frameCount%100===0) 
  {
  var obstacle = createSprite(600,316,10,10);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.1;
   obstacle.velocityX=-7;
   obstacle.lifetime=200;
    obstaclesGroup.add(obstacle);
  }
}






