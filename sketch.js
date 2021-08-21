var ship,ship_collided;
var sea,sea_Img;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,200,400,400);
  sea.addImage(seaImg);
  sea.scale = 0.3;

  ship = createSprite(100,235,10,10);
  ship.addAnimation("ship", shipImg1);
  ship.scale = 0.2;


}

function draw() {
  background(0);
  drawSprites();
  console.log(sea.x);
  sea.velocityX = -3;
  if(sea.x<0 ) {
    sea.x = sea.width/8;

  }
}   