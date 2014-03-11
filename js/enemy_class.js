function enemy(myType,mySpeed,myHealth,myDescription,myIcon,myStartLocation,myWayPoint)
{
	this.kind = myType;
	this.baseSpeed = mySpeed;
	this.currentSpeed = this.baseSpeed;
	this.speedTimer = 0;
	this.health = myHealth;
	this.description = myDescription;
	this.icon = myIcon;
	this.identifier = new createjs.Bitmap(myIcon);
	this.startLocation = myStartLocation
	this.waypoint = myWayPoint;

	this.identifier.x = myStartLocation['x'];
	this.identifier.y = myStartLocation['y'];
	stage.addChild(this.identifier);
	stage.update();

}

enemy.prototype.move = function() 
{
	//console.log(this.identifier.x + "," + this.identifier.y);
	console.log(this.waypoint);
	//createjs.Tween.get(this.identifier,{loop:true}).to({x:924},3000).to({x:0},3000);
	createjs.Tween.get(this.identifier,{loop:true}).to({x:this.identifier.x,y:this.identifier.y},3000).to(this.waypoint,3000);
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



	
