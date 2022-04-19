class Wizard{
    constructor(){
      this.wizard = createSprite(width/2 +1000, height/2, 60, 60)
      this.wizard.shapeColor = "red";
      this.attack  = false
/*         this.wizard.addImage("stand",standingKnight);  
        this.wizard.addAnimation("walk", walkingKnight);
        this.wizard.addAnimation("attack", attackingKnight);
 */    }

    attack(){
      d = dist(player.player.x, player.player.y, this.wizard.x, this.wizard.y)
      console.log(d);
      if(d<=500){
        this.attack = true;
        
        if(frameCount % 60 === 0){
          this.hit();
        }
      }

      this.attack = false;
     
    }
    hit(){
       var fireball = createSprite(this.wizard.x, this.wizard.y, 20, 20);
       //Figuring out the direction of the player
       //player is on the right
       if(player.player.x > this.wizard.x){
          fireball.velocityX = 10
       }
       else{
          fireball.velocityX = -10
       }
    }
}








