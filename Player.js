class Player{
    constructor(){

        this.player = createSprite(width/2, height/2, 60, 100)
        this.player.addImage("stand",standingKnight);  
        this.player.addAnimation("walk", walkingKnight);
        this.player.addAnimation("attack", attackingKnight);
    }

    move(){
        if( keyDown(UP_ARROW)){
            this.player.y -=5;
            this.player.changeAnimation("walk")
          }
        
          else if(keyDown(LEFT_ARROW)){
            this.player.x -=5;
            this.player.changeAnimation("walk");
          }
        
          else if(keyDown(RIGHT_ARROW)){
            this.player.x +=5;
            this.player.changeAnimation("walk");
          }
          else if(keyDown(DOWN_ARROW)){
            this.player.y +=5;
            this.player.changeAnimation("walk");
          }
          else{
            this.player.changeAnimation("stand");
          }
    }
    hit(){
        if(keyWentDown("e")){
            this.player.changeAnimation("attack");

        }
    }
}








