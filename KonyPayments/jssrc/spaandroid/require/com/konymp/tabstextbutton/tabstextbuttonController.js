define(function() {
    var controller = require("com/konymp/tabstextbutton/usertabstextbuttonController");
    var actions = require("com/konymp/tabstextbutton/tabstextbuttonControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "sknBackground", function(val) {
            this.view.flxTabs.skin = val;
        });
        defineGetter(this, "sknBackground", function() {
            return this.view.flxTabs.skin;
        });
        defineSetter(this, "sknTextActive", function(val) {
            this.view.lblSkin.skin = val;
        });
        defineGetter(this, "sknTextActive", function() {
            return this.view.lblSkin.skin;
        });
        defineSetter(this, "sknTextInactive", function(val) {
            this.view.lblDullSkin.skin = val;
        });
        defineGetter(this, "sknTextInactive", function() {
            return this.view.lblDullSkin.skin;
        });
        defineSetter(this, "sknHighlight", function(val) {
            this.view.flxIndicator.skin = val;
        });
        defineGetter(this, "sknHighlight", function() {
            return this.view.flxIndicator.skin;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});