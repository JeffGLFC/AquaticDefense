function init()
{
	stage = new createjs.Stage("demoCanvas");
	var bg = new createjs.Bitmap("assets/stream1_bg.png");
	stage.addChild(bg);

	enemies = [];
	towers = [];
	startLocation = {x: 32,y:64};

	waypoints = [{x: 288,y:64},{x: 544,y:416},{x: 608,y:416},{x: 928,y:224}];
	lamprey = new enemy('lamprey','10','50',"Sea Lamprey", "assets/lamprey.png",{x: 0,y:224},waypoints);
	enemies.unshift(lamprey);
	waypoints = [{x: 288,y:96},{x: 544,y:448},{x: 608,y:448},{x: 928,y:224}];
	lamprey = new enemy('lamprey','10','50',"Sea Lamprey", "assets/lamprey.png",{x: 0,y:256},waypoints);
	enemies.unshift(lamprey);
	waypoints = [{x: 288,y:128},{x: 544,y:480},{x: 608,y:480},{x: 928,y:224}];
	lamprey = new enemy('lamprey','10','50',"Sea Lamprey", "assets/lamprey.png",{x: 0,y:288},waypoints);
	enemies.unshift(lamprey);

	enemies.forEach(function(enemy){
		enemy.identifier.addEventListener("click", handleClick);
		// console.log('test');
		// console.log(enemy.identifier);
		enemy.move();
	});
       
    //Update stage will render next frame

    createjs.Ticker.addEventListener('tick',tick);

}

function handleClick(event)
{
	alert('clicked');
}

function tick()
{
	enemies.forEach(function(enemy){
		//enemy.move();
	});
	stage.update();
}

function moveLamprey(myLamprey)
{
	var dir1 = Math.random(); 
	var dir2 = Math.random(); 

	if(dir1 > 0.5)
	{
		//move horizontally
		if(myLamprey.x == 924)
		{
			var newX = myLamprey.x - 32;
			createjs.Tween.get(myLamprey).to({x:newX},1000);
			//myLamprey.x = myLamprey.x-32;
		}
		else if(myLamprey.x == 0)
		{
			var newX = myLamprey.x + 32;
			createjs.Tween.get(myLamprey).to({x:newX},1000);
			//myLamprey.x = myLamprey.x+32;
		}
		else if(dir2 > 0.5)
		{
			var newX = myLamprey.x + 32;
			createjs.Tween.get(myLamprey).to({x:newX},1000);
			//myLamprey.x = myLamprey.x+32;
		}
		else
		{
			var newX = myLamprey.x - 32;
			createjs.Tween.get(myLamprey).to({x:newX},1000);
			//myLamprey.x = myLamprey.x-32;
		}
	}
	else
	{
		//move vertically
		if(myLamprey.y == 608)
		{
			var newY = myLamprey.y - 32;
			createjs.Tween.get(myLamprey).to({y:newY},1000);
			//myLamprey.y = myLamprey.y-32;
		}
		else if(myLamprey.y == 0)
		{
			var newY = myLamprey.y + 32;
			createjs.Tween.get(myLamprey).to({y:newY},1000);
			//myLamprey.y = myLamprey.y+32;
		}
		else if(dir2 > 0.5)
		{
			var newY = myLamprey.y + 32;
			createjs.Tween.get(myLamprey).to({y:newY},1000);
			//myLamprey.y = myLamprey.y+32;
		}
		else
		{
			var newY = myLamprey.y - 32;
			createjs.Tween.get(myLamprey).to({y:newY},1000);
			//myLamprey.y = myLamprey.y-32;
		}
	}
}

