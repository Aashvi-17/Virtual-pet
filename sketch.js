//Create variables here
var dog,happydog;
 
var database;
var foodS,foodStock;;
 
function preload()
{
	dog=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png");

  barking=loadSound("barking.mp3");
}

function setup() {
 
	createCanvas(500, 500);
  Doggie=createSprite(250,200,10,10);
  Doggie.addImage(dog);
  Doggie.scale=0.5;

  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
 
}


function draw() {  
background(46,139,87);

  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    Doggie.addImage(happydog);
    barking.play();
    
}

drawSprites();

strokeWeight(5);
textSize("15");
stroke("red");
fill("white");

text("food left : " + foodS,100,480);

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food: x
  })






}

