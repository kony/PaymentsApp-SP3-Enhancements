define('userfrmSplashController',{
    setGetStartedData: function() {
        var data = [{
            "image": "splash_screen_graphic_01.png",
            "appTitle": "Kony Payments",
            "desc": "Make easy P2P payments <br> using this application"
        }, {
            "image": "splash_screen_graphic_02.png",
            "appTitle": "Kony Payments",
            "desc": "Use your cards or wallets <br> to make your payments"
        }];
        this.view.SplashScreen.setSplashScreenData(data);
    }
});
define('frmSplashControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** preShow defined for frmSplash **/
    AS_Form_a7608571054a4d4db46d4f0c05cf24a7: function AS_Form_a7608571054a4d4db46d4f0c05cf24a7(eventobject) {
        var self = this;
        this.setGetStartedData();
    }
});



define('frmSplashController',["userfrmSplashController","frmSplashControllerActions"],
		function(){
			var controller = require("userfrmSplashController");
			var controllerActions = ["frmSplashControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});
