var dog,dogS, happyDog, foodS, foodStock, database;
var feed, addFood, fedTime, lastFed, foodObj;

function preload()
{
  dog = loadImage("images/dogImg.png");
 happyDog = loadImage("images/dogImg1.png");
 foodS.addimage("images/milk.png");
}

function setup() {
  createCanvas(1000, 500);
  foodObj= new Food();
  database=firebase.database();
   dogS = createSprite(800,250,60,100);
   dogS.addImage(dog);
   dogS.scale = 0.2;
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  feed=createButton("Feed The Dog!")
  feed.position(700,100);
  feed.mousePressed(FeedDog);
  addFood=createButton("Add Food")
  addFood.position(800,100);
  addFood.mousePressed(addFoods);
}

function draw() {  
background(0,200,100);
foodObj.display();
fedTime=database.ref('feedTime');
fedTime.on("value", function(data){
  lastFed=data.val();
})

if(lastFed>=12){
  text("Last Feed" + lastFed/12 + "PM", 350, 30);
} else if(lastFed===0){
  text("Last Feed 12 AM", 350,30);
}else(text("Last Feed" + lastFed + "AM", 350,30))

  drawSprites();
  textSize(20);
  fill(0)
}

function readStock(data){
  foodS=data.val();
  foodObj.updatefoodStock(foodS);
}

function FeedDog(){
  dogS.addImage(happyDog);
  foodObj.updatefoodstock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food: foodObj.getFoodStock(),
    feedTime: hour()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}