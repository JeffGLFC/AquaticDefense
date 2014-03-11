function init()
{
	stage = new createjs.Stage("demoCanvas");
	var bg = new createjs.Bitmap("assets/grass1_bg.png");
	stage.addChild(bg);

	enemies = [];
	towers = [];
	startLocation = {x: 32,y:64};
	newlamprey1 = new enemy('lamprey','10','50',"Sea Lamprey", "assets/lamprey.png",{x: 32,y:64},{x: 32,y:608});

	enemies.unshift(newlamprey1);
	newlamprey2 = new enemy('lamprey','10','50',"Sea Lamprey", "assets/lamprey.png",{x: 64,y:64},{x: 64,y:608});
	enemies.unshift(newlamprey2);
	newlamprey3 = new enemy('lamprey','10','50',"Sea Lamprey", "assets/lamprey.png",{x: 96,y:64},{x: 96,y:608});
	enemies.unshift(newlamprey3);

	newlamprey1.move();
	newlamprey2.move();
	newlamprey3.move();


// enemies.forEach(function(enemy){
// 		enemy.move();
// 	});
    //Create a stage by getting a reference to the canvas
       
    //Update stage will render next frame

    createjs.Ticker.addEventListener('tick',tick);
//  	createjs.Tween.get(lamprey1,{loop:true}).to({x:924},3000).to({x:0},3000);  

	//createjs.Tween.get(enemies[1].identifier,{loop:true}).to({x:924},3000).to({x:0},3000);
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

