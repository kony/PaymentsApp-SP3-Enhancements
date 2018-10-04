define('userflxCardController',{
    //Type your controller code here 
});
define('flxCardControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});



define('flxCardController',["userflxCardController","flxCardControllerActions"],
		function(){
			var controller = require("userflxCardController");
			var controllerActions = ["flxCardControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});
