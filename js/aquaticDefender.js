function init()
{
	stage = new createjs.Stage("demoCanvas");
	var bg = new createjs.Bitmap("assets/grass1_bg.png");

	enemies = [];
	towers = [];
	startLocation = {x: 32,y:64};
	newlamprey = new enemy('lamprey','10','50',"Sea Lamprey", "assets/lamprey.png",startLocation);

	enemies.unshift(newlamprey);
	newlamprey = new enemy('lamprey','10','50',"Sea Lamprey", "assets/lamprey.png",startLocation);
	enemies.unshift(newlamprey);
	newlamprey = new enemy('lamprey','10','50',"Sea Lamprey", "assets/lamprey.png",startLocation);
	enemies.unshift(newlamprey);

	enemies[0].update();
	enemies[1].update();
	enemies[2].update();
	//stage.addChild(enemies[0].identifier);
	



    //Create a stage by getting a reference to the canvas
    stage = new createjs.Stage("demoCanvas");

	var bg = new createjs.Bitmap("assets/grass1_bg.png");
	lamprey1 = new createjs.Bitmap("assets/lamprey.png");
    lamprey1.x = lamprey1.y = 0;

    lamprey2 = new createjs.Bitmap("assets/lamprey.png");
    lamprey2.x = lamprey2.y = 320;
    
    stage.addChild(bg);
    //stage.addChild(lamprey1);
    //stage.addChild(lamprey2);
    //stage.addChild(bgSrc);
    //Update stage will render next frame

    createjs.Ticker.addEventListener('tick',tick);
  	createjs.Tween.get(lamprey1,{loop:true}).to({x:924},3000).to({x:0},3000);  
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

