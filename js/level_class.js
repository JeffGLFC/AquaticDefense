function level(myMap,myWayPoints,myHealth)
{
	var map = myMap;
	var wayPoints = myWayPoints;
	var health = myHealth;
}

level.prototype.lose = function()
{
	console.log('Game over, you lose');
	createjs.Ticker.setPaused(true);
}

level.prototype.getWayPoints = function(current)
{
	if(this.wayPoints.length < current+1)
	{
		return this.wayPoints[current+1];
	}
	else
	{
		this.damage();
	}
}

level.prototype.damage = function()
{
	this.health = this.health - 1;
	if(this.health > 1)
	{
		this.die();
	}
}



	
