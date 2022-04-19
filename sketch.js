var player, wizard;
var ground, d;
var walkingKnight, standingKnight, attackingKnight;

function preload(){
  walkingKnight = loadAnimation("Images/Knight/Knight1.png","Images/Knight/Knight1.png" ,"Images/Knight/Knight2.png", "Images/Knight/Knight2.png")
  standingKnight = loadImage("Images/Knight/Knight1.png")
  attackingKnight = loadAnimation("Images/Knight/Knight6.png","Images/Knight/Knight6.png","Images/Knight/Knight6.png","Images/Knight/Knight6.png","Images/Knight/Knight8.png","Images/Knight/Knight8.png","Images/Knight/Knight8.png", "Images/Knight/Knight8.png","Images/Knight/Knight7.png", "Images/Knight/Knight7.png", "Images/Knight/Knight7.png", "Images/Knight/Knight7.png" )
}


function setup() {
  createCanvas(windowWidth, windowHeight);
 /*  ground = createSprite(width/2, height/2, width, height)
  ground.shapeColor = "green"; */

 wizard = new Wizard();
  
  player = new Player();
}

function draw() {
  background(0);
  //GROUND
  fill("green");
  rect(0, 0, width, height); 

  camera.position.x = player.player.x;
  camera.position.y = player.player.y;

  //Distance between player & npc
 

  player.move();
  player.hit();


  drawSprites();
}


