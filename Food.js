class Food{
    constructor(){
        this.foodStock=0;
        this.lastFed;
        this.image=loadImage("images/milk.png");
    }
    updatefoodStock(foodStock){
        this.foodStock= foodStock;
    }
    getFedtime(lastFed){
        this.lastFed= lastFed;
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock= this.foodStock-1;
        }
    }

    getFoodStock(){
        return this.foodStock;
    }
    
    display(){
        var x= 80;
        var y=100;
        imageMode(CENTER);
        image(this.image, 80,50,70,70);
        if(this.foodStock!=0){
            for(var i=0; i<foodStock; i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image, x,y, 50, 50);
                x=x+30;
            }
        }
    }
}