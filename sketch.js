var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(59,100);
  weight=random(500,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="brown";
  car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if(car.isTouching(wall)){
    car.velocityX=0;
 deformation=0.5*speed*speed*weight/22500;
 car.x=1450;
  }
  if (deformation>180){
    car.shapeColor="red";
  }
  else if (deformation<180 && deformation>80){
    car.shapeColor="yellow";
  }
  else if (deformation<80){
    car.shapeColor="green";
  }
  drawSprites();
}