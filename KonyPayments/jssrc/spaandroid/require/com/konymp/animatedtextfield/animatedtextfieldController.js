define(function() {
    var controller = require("com/konymp/animatedtextfield/useranimatedtextfieldController");
    var actions = require("com/konymp/animatedtextfield/animatedtextfieldControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "placeholderText", function(val) {
            this.view.lblPlaceholder.text = val;
        });
        defineGetter(this, "placeholderText", function() {
            return this.view.lblPlaceholder.text;
        });
        defineSetter(this, "maxTextLength", function(val) {
            this.view.txtBoxComponent.maxTextLength = val;
        });
        defineGetter(this, "maxTextLength", function() {
            return this.view.txtBoxComponent.maxTextLength;
        });
        defineSetter(this, "secureTextEntry", function(val) {
            this.view.txtBoxComponent.secureTextEntry = val;
        });
        defineGetter(this, "secureTextEntry", function() {
            return this.view.txtBoxComponent.secureTextEntry;
        });
        defineSetter(this, "underlineVisibility", function(val) {
            this.view.lblUnderline.isVisible = val;
        });
        defineGetter(this, "underlineVisibility", function() {
            return this.view.lblUnderline.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_textBoxTextChange_e73a79dd40794954974a1bf0e1dacc04 = function() {
        if (this.textBoxTextChange) {
            this.textBoxTextChange.apply(this, arguments);
        }
    }
    return controller;
});