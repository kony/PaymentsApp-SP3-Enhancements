/*
#
#  Created by Team Kony.
#  Copyright (c) 2017 Kony Inc. All rights reserved.
#
*/
define('com/konymp/animatedtextfield/KonyLogger',[],function() {
    /**
     * @module KonyLogger v0.2
     * @author AyyappaSwamy.Thatavarthy / Praharshita.Krishna
     * @category functionality
     * @description This module implements the KonyLogger class
     * KonyLogger provides the functionality of 6 logging levels viz.,
     * 1.TRACE	2.DEBUG	 3.INFO  4.WARN  5.ERROR 6.SILENT
     * It also supports capturing events viz.,
     * DEFAULT, FUNCTION_ENTRY, FUNCTION_EXIT, EXCEPTION, SUCCESS_CALLBACK, ERROR_CALLBACK, SERVICE_CALL, DATA_STORE
     * 2017 Kony Inc. 
     */
    /**
     * @member of  KonyLogger.js
     * @function KonyLogger
     * @param method - The function to be called to log the given message. 
     * When no parameter is passed, kony.print is called by default.
     * @returns an instance of KonyLogger class.
     * @description - This is the constructor for KonyLogger. 
     * This method initializes the instance created.
     **/
    var KonyLogger = function() {
        this.printMethod = kony.print;
        this.reuseableComponentName = arguments[0] || "appContext";
        var loggerGenerator = function() {
            this.trace = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "TRACE", message, event);
            };
            this.debug = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "DEBUG", message, event);
            };
            this.info = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "INFO", message, event);
            };
            this.warn = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "WARN", message, event);
            };
            this.error = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "ERROR", message, event);
            };
        };
        this.setLogLevel = function(logLevel) {
            if (this.isValidLogLevel(logLevel)) {
                if (typeof logLevel === "string") {
                    this.currentLogLevel = this.logLevels[logLevel];
                } else if (typeof logLevel === "number") {
                    this.currentLogLevel = logLevel;
                }
                var logMethods = Object.keys(this.logLevels);
                for (var i = 0; i < logMethods.length; i++) {
                    var methodName = logMethods[i].toLowerCase();
                    this[methodName] = (i < this.currentLogLevel) ? function() {} : (new loggerGenerator())[methodName];
                }
                return true;
            } else {
                return false;
            }
        };
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": KonyLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            this.printMethod(JSON.stringify(logObj, null, '\t'));
        };
        this.setLogLevel("TRACE");
    };
    /**
     * @member of  KonyLogger
     * @property logLevels - This enum holds the 6 levels of logging and their order.
     **/
    KonyLogger.prototype.logLevels = {
        "TRACE": 0,
        "DEBUG": 1,
        "INFO": 2,
        "WARN": 3,
        "ERROR": 4,
        "SILENT": 5
    };
    /**
     * @member of  KonyLogger
     * @property eventTypes - This array holds 8 types of events.
     **/
    KonyLogger.prototype.supportedEventTypes = ["DEFAULT", "FUNCTION_ENTRY", "FUNCTION_EXIT", "SUCCESS_CALLBACK", "ERROR_CALLBACK", "EXCEPTION", "SERVICE_CALL", "DATA_STORE"];
    /** KonyLogger EventTypes**/
    KonyLogger.prototype.DEFAULT = 0;
    KonyLogger.prototype.FUNCTION_ENTRY = 1;
    KonyLogger.prototype.FUNCTION_EXIT = 2;
    KonyLogger.prototype.SUCCESS_CALLBACK = 3;
    KonyLogger.prototype.ERROR_CALLBACK = 4;
    KonyLogger.prototype.EXCEPTION = 5;
    KonyLogger.prototype.SERVICE_CALL = 6;
    KonyLogger.prototype.DATA_STORE = 7;
    /**
     * @member of  KonyLogger
     * @property defaultLogLevel - This property holds the default logLevel
     * It is intialised to "TRACE".
     **/
    KonyLogger.prototype.defaultLogLevel = KonyLogger.prototype.logLevels["TRACE"];
    /**
     * @member of  KonyLogger
     * @function isValidLogLevel
     * @param logLevel - (string or number)
     * @description - This method validates the logLevel parameter with the enum logLevels
     * @return boolean
     **/
    KonyLogger.prototype.isValidLogLevel = function(logLevel) {
        if ((logLevel !== undefined) && (logLevel !== null) && (logLevel !== "")) {
            if (typeof logLevel === "string") {
                if (logLevel.toUpperCase() in this.logLevels) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof logLevel === "number") {
                for (var logLevelKey in this.logLevels) {
                    if (logLevel === this.logLevels.logLevelKey) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
    };
    /**
     * @member of  KonyLogger
     * @function getLogLevel
     * @param none
     * @description - This method returns the current log level of the instance
     * @return type number
     **/
    KonyLogger.prototype.getLogLevel = function() {
        return this.currentLogLevel;
    };
    /**
     * @member of  KonyLogger
     * @function setPrintMethod
     * @param method: type function - The method to print the log/message.
     * The default value is kony.print
     * @description - This method sets the current log method to 'method'
     * @return none
     **/
    KonyLogger.prototype.setPrintMethod = function(method) {
        if ((method !== undefined) && (method !== null) && (method !== "")) {
            if (typeof method === "function") {
                this.printMethod = method;
            }
        }
    };
    KonyLogger.Utils = {};
    /**
     * @member of  KonyLogger
     * @function getDateTimeStamp
     * @param none
     * @description - It returns the current date and time stamp in "DD/MM/YY HH:MM AM/PM" format
     * @return type string
     **/
    KonyLogger.Utils.getDateTimeStamp = function() {
        var dateTimeStamp = "";
        var currentDateObj = new Date();
        dateTimeStamp += currentDateObj.getDate() + "/" + (currentDateObj.getMonth() + 1) + "/" + currentDateObj.getFullYear();
        dateTimeStamp += " ";
        var hours = currentDateObj.getHours();
        if (hours > 12) {
            dateTimeStamp += (hours - 12) + ":" + currentDateObj.getMinutes() + " PM";
        } else {
            dateTimeStamp += hours + ":" + currentDateObj.getMinutes() + " AM";
        }
        return dateTimeStamp;
    };
    return KonyLogger;
});
/*
#
#  Created by Team Kony.
#  Copyright (c) 2017 Kony Inc. All rights reserved.
#
*/
define('com/konymp/animatedtextfield/useranimatedtextfieldController',['com/konymp/animatedtextfield/KonyLogger'],function() {
    var konymp = konymp || {};
    var KonyLoggerModule = require("com/konymp/animatedtextfield/KonyLogger");
    konymp.logger = (new KonyLoggerModule("Animated Text Field")) || function() {};
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            konymp.logger.info("Entered constructor of component", konymp.logger.FUNCTION_ENTRY);
            this._placeholderSkin = null;
            this._placeholderFocusSkin = null;
            this._underlineSkin = null;
            this._underlineFocusSkin = null;
            this._textboxSkin = null;
            if (baseConfig.placeholderSkin !== null) {
                this._placeholderSkin = baseConfig.placeholderSkin;
            }
            if (baseConfig.placeholderFocusSkin !== null) {
                this._placeholderFocusSkin = baseConfig.placeholderFocusSkin;
            }
            if (baseConfig.underlineSkin !== null) {
                this._underlineSkin = baseConfig.underlineSkin;
            }
            if (baseConfig.underlineFocusSkin !== null) {
                this._underlineFocusSkin = baseConfig.underlineFocusSkin;
            }
            if (baseConfig.textboxSkin !== null) {
                this._textboxSkin = baseConfig.textboxSkin;
            }
            konymp.logger.info("Exiting constructor of component", konymp.logger.FUNCTION_EXIT);
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            konymp.logger.info("Entered initGettersSetters function of component", konymp.logger.FUNCTION_ENTRY);
            defineSetter(this, "placeholderSkin", function(val) {
                this.view.lblPlaceholder.skin = val;
                this._placeholderSkin = val;
            });
            defineGetter(this, "placeholderSkin", function() {
                return this._placeholderSkin;
            });
            defineSetter(this, "placeholderFocusSkin", function(val) {
                this._placeholderFocusSkin = val;
            });
            defineGetter(this, "placeholderFocusSkin", function() {
                return this._placeholderFocusSkin;
            });
            defineSetter(this, "underlineSkin", function(val) {
                this.view.lblUnderline.skin = val;
                this._underlineSkin = val;
            });
            defineGetter(this, "underlineSkin", function() {
                return this._underlineSkin;
            });
            defineSetter(this, "underlineFocusSkin", function(val) {
                this._underlineFocusSkin = val;
            });
            defineGetter(this, "underlineFocusSkin", function() {
                return this._underlineFocusSkin;
            });
            defineSetter(this, "textboxSkin", function(val) {
                this.view.txtBoxComponent.skin = val;
            });
            defineGetter(this, "textboxSkin", function() {
                return this.view.txtBoxComponent.skin;
            });
            if (this._placeholderSkin !== null) {
                this.placeholderSkin = this._placeholderSkin;
            }
            if (this._underlineSkin !== null) {
                this.underlineSkin = this._underlineSkin;
            }
            if (this._textboxSkin !== null) {
                this.textboxSkin = this._textboxSkin;
            }
            konymp.logger.info("Exiting initGettersSetters function of component", konymp.logger.FUNCTION_EXIT);
        },
        animateComponent: function(obj) {
            konymp.logger.info("Entered animateComponent function of component", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.info("Parameter to be animated " + JSON.stringify(obj));
            obj.animate(kony.ui.createAnimation({
                "100": {
                    "top": "-30%",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
                    },
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.25
            }, {
                "animationEnd": this.changeSkins(obj, "animate")
            });
            konymp.logger.info("Exiting animateComponent function of component", konymp.logger.FUNCTION_EXIT);
        },
        changeSkins: function(obj, animateVal) {
            konymp.logger.info("Entered changeSkins function of component", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.info("Parameter obj " + JSON.stringify(obj) + "animateVal is " + animateVal);
            if (animateVal === "animate") {
                obj.skin = this.placeholderFocusSkin;
                obj.padding = [0, 0, 0, 0];
                obj.width = "90%";
                this.view.txtBoxComponent.setFocus(true);
                this.view.lblUnderline.height = "5%";
                this.view.lblUnderline.skin = this.underlineFocusSkin;
            } else {
                obj.padding = [0, 10, 0, 0];
                obj.skin = this.placeholderSkin;
                obj.width = "100%";
                this.view.lblUnderline.height = "3%";
                this.view.lblPlaceholder.setFocus(true);
                this.view.lblUnderline.skin = this.underlineSkin;
            }
            this.view.forceLayout();
            konymp.logger.info("Exiting changeSkins function of component", konymp.logger.FUNCTION_EXIT);
        },
        onDone: function(obj) {
            konymp.logger.info("Entered onDone function of component", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.info("Parameter obj is " + JSON.stringify(obj));
            if (this.onTextBoxDone !== null && this.onTextBoxDone !== undefined) {
                this.onTextBoxDone();
            } else {
                if (this.view.txtBoxComponent.text === null || this.view.txtBoxComponent.text === "") {
                    obj.animate(kony.ui.createAnimation({
                        "100": {
                            "top": "0%",
                            "stepConfig": {
                                "timingFunction": kony.anim.EASE
                            },
                        }
                    }), {
                        "delay": 0,
                        "iterationCount": 1,
                        "fillMode": kony.anim.FILL_MODE_FORWARDS,
                        "duration": 0.25
                    }, {
                        "animationEnd": this.changeSkins(obj, "reverse")
                    });
                }
            }
            konymp.logger.info("Exiting onDone function of component", konymp.logger.FUNCTION_EXIT);
        },
        getText: function() {
            konymp.logger.info("Entered getText API of component", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.info("Exiting getText API of component", konymp.logger.FUNCTION_EXIT);
            return this.view.txtBoxComponent.text;
        }
    };
});
define('com/konymp/animatedtextfield/animatedtextfieldControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDone defined for txtBoxComponent **/
    AS_TextField_bd12b2785425422daec71bc2722ef1c1: function AS_TextField_bd12b2785425422daec71bc2722ef1c1(eventobject, changedtext) {
        var self = this;
        this.onDone(this.view.lblPlaceholder);
    },
    /** onTouchStart defined for lblPlaceholder **/
    AS_Label_acc0d2ac01dc4f8191d968f89d24d7f6: function AS_Label_acc0d2ac01dc4f8191d968f89d24d7f6(eventobject, x, y) {
        var self = this;
        this.animateComponent(this.view.lblPlaceholder);
    }
});
define('com/konymp/animatedtextfield/animatedtextfieldController',["com/konymp/animatedtextfield/useranimatedtextfieldController", "com/konymp/animatedtextfield/animatedtextfieldControllerActions"], function() {
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
