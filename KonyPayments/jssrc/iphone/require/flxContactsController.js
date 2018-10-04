define('userflxContactsController',{
    //Type your controller code here 
});
define('flxContactsControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnPayee **/
    AS_Button_ab0f524959364fc28ec3cc3949279ed0: function AS_Button_ab0f524959364fc28ec3cc3949279ed0(eventobject, context) {
        var self = this;
        this.executeOnParent("navToPayForm", context);
    }
});



define('flxContactsController',["userflxContactsController","flxContactsControllerActions"],
		function(){
			var controller = require("userflxContactsController");
			var controllerActions = ["flxContactsControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});
