let trex ,trex_running;
let ground, groundImage

function preload(){
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png')
  groundImage=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,20,50)
  trex.addAnimation("running", trex_running)
  trex.scale = 0.5

  //create a ground sprite
 ground=createSprite(300,180,600,5)
 ground.velocityX=-2
 ground.addImage(groundImage)
 ground.x = ground.width/2
}

function draw(){
  background("white")

  console.log(ground.x)

  //make the trex jump on space press
  if(keyDown("space")){
    trex.velocityY=-10
  }

  //gravity
  trex.velocityY = trex.velocityY + 0.5

  trex.collide(ground)

  //infinte scrolling screen
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  drawSprites()
}
