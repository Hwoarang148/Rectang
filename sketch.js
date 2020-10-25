var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
fixedRect.shapeColor = "blue";
fixedRect.debug = true;

  movingRect = createSprite(200, 220, 80, 30);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

}

function draw() {
  background("yellow");  

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
  movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2 &&
  fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2) {
  
  fixedRect.shapeColor = "black";
  movingRect.shapeColor = "black";

} else {
  fixedRect.shapecolor = "blue";
  movingRect.shapeColor = "blue";
}

  drawSprites();
}