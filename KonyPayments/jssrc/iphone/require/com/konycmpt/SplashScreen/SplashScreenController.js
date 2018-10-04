define('com/konycmpt/SplashScreen/userSplashScreenController',[],function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._frmNameToNavigate = null;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineSetter(this, "frmNameToNavigate", function(value) {
                try {
                    this._frmNameToNavigate = value;
                } catch (e) {
                    alert("Error Occured" + JSON, stringify(e));
                }
            });
            defineGetter(this, "stateCount", function() {
                return this._stateCount;
            });
        },
        index: 0,
        data: null,
        showFirstScreen: function() {
            var controllerScope = this;
            /* controllerScope.view.flxToolbar.animate(
               kony.ui.createAnimation({100:{top:"91%","stepConfig":{}}}),
               {delay:0,fillMode:kony.anim.FILL_MODE_FORWARDS,duration:0.5},
               {animationEnd: function() {

               } 
               });*/
            this.view.flxToolbar.top = "91%";
        },
        setSplashScreenData: function(data) {
            if (data === undefined && data === null && data.length === 0) {
                kony.print("There are no data to set, either the data is null or undefined");
            } else {
                for (var i = 0; i < data.length; i++) {
                    if (i === 0) {
                        data[i].flexAppName = {
                            "isVisible": true
                        };
                    } else {
                        data[i].flexAppName = {
                            "isVisible": true
                        };
                    }
                }
                this.view.segGetStarted.removeAll();
                this.view.segGetStarted.widgetDataMap = {
                    "imgGetStart": "image",
                    "lblSplashDesc": "desc",
                    "flexAppName": "flexAppName",
                    "lblAppTitle": "appTitle"
                };
                this.view.segGetStarted.setData(data);
            }
        },
        onGetStarted: function() {
            this.view.flxToolbar.top = "100%";
            var navObject = new kony.mvc.Navigation(this._frmNameToNavigate);
            navObject.navigate();
        }
    };
});
define('com/konycmpt/SplashScreen/SplashScreenControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnGetStarted **/
    AS_Button_f924edd1b0184befa1005251278b1ee4: function AS_Button_f924edd1b0184befa1005251278b1ee4(eventobject) {
        var self = this;
        this.onGetStarted();
    },
    /** preShow defined for SplashScreen **/
    AS_FlexContainer_bb41b71cf12c417ca335e843845f2288: function AS_FlexContainer_bb41b71cf12c417ca335e843845f2288(eventobject) {
        var self = this;
        this.view.segGetStarted.pageSkin = "sknpaging";
    },
    /** postShow defined for SplashScreen **/
    AS_FlexContainer_f1bef0092c2d47778962efa6e1bd8c9e: function AS_FlexContainer_f1bef0092c2d47778962efa6e1bd8c9e(eventobject) {
        var self = this;
        this.showFirstScreen();
    }
});
define('com/konycmpt/SplashScreen/SplashScreenController',["com/konycmpt/SplashScreen/userSplashScreenController", "com/konycmpt/SplashScreen/SplashScreenControllerActions"], function() {
    var controller = require("com/konycmpt/SplashScreen/userSplashScreenController");
    var actions = require("com/konycmpt/SplashScreen/SplashScreenControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
