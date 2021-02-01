
var dog,dog_Img;

var bone,boneImg,boneGroup;

var stone, stoneImg, stoneGroup;

var score ;

var gameOver, gameOverImg;

var ground;

function preload()
{
	dog_Img = loadImage("running.png");
	boneImg = loadImage("BONES1.jpg");
	
	gameOverImg = loadImage("gameOver.png");
}

function setup() {
	createCanvas(1500,500);

	dog = createSprite(200,395,20,20);
	dog.addImage(dog_Img);
	dog.scale = 0.3;
	dog.velocityX = 4;

	bone = createSprite(600,380,15,30);
	bone.shapeColor = "white";

	stone = createSprite(900,395,50,50)
	stone.shapeColor = "black";
	
	ground = createSprite(750,490,1500,20);
	ground.x = ground.width /2;
	ground.shapeColor = "brown";


}


function draw() {
  rectMode(CENTER);
  
  if (ground.x < 0){
	ground.x = ground.width/2;
  }
  background(rgb(83,151,112));
  
  drawSprites();
 
}



