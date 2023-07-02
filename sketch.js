var bg,bgimage;
var player,playerimage;
var jetleft,jetright;
var bulletgroup;
var heligroup;
var blastImg;
var heli;
var blast2img;
var edges;
var bulletImage;
var bomb,bombimage;
var bombgroup;

function preload(){
  bgimage=loadImage("bg.png");
  //playerimage=loadAnimation("DYing1.png","DYing2.png","DYing3.png","DYing4.png","DYing5.png","DYing6.png","DYing7.png","DYing8.png","DYing9.png");
  jetleft=loadImage("Jetleft.png");
  jetright=loadImage("jetright.png");
    blastImg=loadImage("blast.png");
    blast2img=loadImage("blast2.png");
    bulletImage=loadImage("Bullet.png");
    bombimage=loadImage("bombblast.png");
}
function setup() {
  createCanvas(1600,800);
  bg=createSprite(800, 380, 1600, 800);
  bg.addImage(bgimage);

  player=createSprite(800,500,20,40);
 // player.addAnimation("p",playerimage);

 bulletgroup=new Group();
  heligroup=new Group();
  bombgroup=new Group();

  edges=createEdgeSprites();
}

function draw() {
  background(0,0,0); 
  
  if(keyDown("left")){
    player.x=player.x-5;
  }
  if(keyDown("right")){
    player.x=player.x+5;
  }
  helicopter();
  spawnbullet();

  if(bulletgroup.isTouching(heligroup)){
    heli.addImage(blastImg);
    heli.scale=0.3;
    heli.velocityY=7;
    heli.velocityX=0;
  }
  if(bombgroup.isTouching(player)){
    player.addImage(blast2img);
    player.scale=1.5;
   
  }

 /* if(heligroup.isTouching(edges[3])){
    heligroup[0].velocityY=0;
    heligroup[0].velocityX=0;
    heligroup[0].addImage(blast2img);
    heligroup[0].scale=0.7;
  }*/
  drawSprites();
}
function helicopter(){
  if(frameCount%300===0){
    var num=Math.round(random(1,2));
    if(num===1){
      heli=createSprite(1400,100,50,50);
      heli.addImage(jetleft);
      heli.velocityX=-5;
      heli.y=random(50,400);
    }
    else if(num===2){
      heli=createSprite(0,100,50,50);
      heli.addImage(jetright);
      heli.velocityX=5;
      heli.y=random(50,400);
    }
   heli.scale=0.25;
    heligroup.add(heli);

      bomb=createSprite(1400,100,50,50);
      bomb.addImage("22",bombimage);
      bomb.scale=0.08;
      bomb.y=heli.y;
      
      bomb.x=heli.x;

     
      if(num===1){
        bomb.velocityX=-random(3,15);
        bomb.velocityY=5;
      }
      if(num===2){
        bomb.velocityX=random(3,10);
        bomb.velocityY=5;
      }
      bombgroup.add(bomb);
    }
}
function spawnbullet(){
  if(keyWentDown("b")){
    var bullet=createSprite(0,0,10,10);
    bullet.addImage(bulletImage);
    bullet.scale=0.05;
    bullet.x=player.x;
    bullet.y=480;
    bullet.velocityY=-4;
    bulletgroup.add(bullet);
  }
}