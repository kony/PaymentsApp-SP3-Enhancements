define('userflexAPIsController',{
    //Type your controller code here 
});
define('flexAPIsControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});



define('flexAPIsController',["userflexAPIsController","flexAPIsControllerActions"],
		function(){
			var controller = require("userflexAPIsController");
			var controllerActions = ["flexAPIsControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});
