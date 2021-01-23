class Btn
{
    constructor()
    {
       // this.fuel = createButton('FUEL');
        this.fire = createButton('FIRE');
        this.aim = createButton('AIM');
        
    }

    display()
    {
       // this.fuel.style.backgroundImage = "url('images/test.png')";
      //  this.fuel.position(displayWidth/4+180, displayHeight/2+240);
        this.fire.position(displayWidth/2 + 300, displayHeight/2+240);
        this.aim.position(displayWidth/2 + 790, displayHeight/2+240);
        //this.fuel.backgroundImage="url('images/test.png')";
    }
}