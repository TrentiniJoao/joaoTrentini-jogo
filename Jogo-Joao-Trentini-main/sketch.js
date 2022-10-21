var canvas;
var backgroundImage, car1_img, car2_img,car3_img,car4_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var gameState = "play";
var player;
var car1, boot, fuels, powerCoins, obstacles;
var blastImage;

var intro, pista;


function preload() {
  backgroundImage = loadImage("assets/planodefundo.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  car3_img = loadImage("assets/car3.png");
  car4_img = loadImage("assets/car4.png");
  track = loadImage("assets/pista.png");
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  lifeImage = loadImage("assets/life.png");
  blastImage = loadImage("assets/blast.png")
}

function setup() {
  canvas = createCanvas(600, 600);
 
  pista = createSprite(300, 0);
  pista.addImage("pista",track);
  pista.velocity.y = 1;

  player = createSprite(width/2,camera.position.y+500,400,20);
  player.addImage("player",car1_img);
  player.scale=0.07
}

function draw(){
  background(0);
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      player.x = player.x - 3;
    }
    
    if(keyDown("right_arrow")){
      player.x = player.x + 3;
    }
    
    if(keyDown("space")){
      player.velocityY = -10;
    }
    
    player.velocityY = player.velocityY + 0.8
    
    if(pista.y > 400){
      pista.y = 300
    }

    
    //climbersGroup.collide(player);
    /*
    if(climbersGroup.isTouching(player)){
      player.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(player) || player.y > 600){
      player.destroy();
      gameState = "end"
    }
    */
    drawSprites();
  }
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Fim de Jogo", 230,250)
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function bootGame() {
  if (frameCount % 70 === 0) {
    boot = createSprite(random(width - 1400,width - 600), random(height - 100,height + 100));
    //boot.addImage("car1", car2_img);
   
    boot.scale = 0.07;
    //boot.addImage("blast", blastImage);
    boot.velocity.y = -5;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: boot.addImage(car2_img);
              break;
      case 2: boot.addImage(car3_img);
              boot.scale = 0.9;
              break;
      case 3: boot.addImage(car4_img);
              boot.scale = 0.9;
              break;
      default: break;
    }
  }
   

  
  
}
