//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  dog_Img = loadImage("images/Dog.png");
  happyDog_Img = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database()
  
  dog = createSprite(250, 300, 150, 150);
  dog.addImage(dog_Img);
  dog.scale=0.15;

  foodStock = database.ref('Food');
foodStock.on("value", readStock)
}


function draw() { 
  background(46, 139, 87)
  
  if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog_Img);

  }

    //add styles here
    textSize(30);
    fill("yellow");
  stroke('black');
  text("Food Remaining:"+foodS, 170, 200)

  drawSprites();
}


  function readStock(data){

  
    foodS = data.val();
  }

  function writeStock(x){

    if(x<=0){
x= 0
    }else{
      x = x-1
    }
database.ref('/').update({
  Food:x
})
  }






