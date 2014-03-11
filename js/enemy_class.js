function enemy(myType,mySpeed,myHealth,myDescription,myIcon,myStartLocation)
{
	var type = myType;
	var baseSpeed = mySpeed;
	var currentSpeed = baseSpeed;
	var speedTimer = 0;
	var health = myHealth;
	var description = myDescription;
	var icon = myIcon;
	identifier = new createjs.Bitmap(myIcon);

console.log(stage);
	 identifier.x = myStartLocation['x'];
	 identifier.y = myStartLocation['y'];
	 stage.addChild(identifier);
	 stage.update();

}

enemy.prototype.move = function() 
{
	console.log('moving');
}

enemy.prototype.update = function()
{
	this.calcSpeed();
	this.move();
}

enemy.prototype.calcSpeed = function()
{
	if(this.speedTimer == 0 && (this.currentSpeed != this.baseSpeed))
	{
		this.currentSpeed = this.baseSpeed;
	}
	else
	{
		this.speedTimer--;
	}
}

enemy.prototype.takeDamage = function(damage)
{
	this.health = this.health - damage;
	if(this.health > 0)
	{
		this.die();
	}
}

enemy.prototype.die = function()
{
	console.log('dead');
}



	
