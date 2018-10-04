define('userflxFullSplashScreenController',{
    //Type your controller code here 
});
define('flxFullSplashScreenControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});



define('flxFullSplashScreenController',["userflxFullSplashScreenController","flxFullSplashScreenControllerActions"],
		function(){
			var controller = require("userflxFullSplashScreenController");
			var controllerActions = ["flxFullSplashScreenControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});
