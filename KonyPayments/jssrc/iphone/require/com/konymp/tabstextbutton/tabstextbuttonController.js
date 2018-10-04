/*
#
#  Created by Team Kony.
#  Copyright (c) 2017 Kony Inc. All rights reserved.
#
*/
define('com/konymp/tabstextbutton/konyLogger',[],function() {
    /**
     * @module KonyLogger v1.1
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
        this.enableServerLogging = false;
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": KonyLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            if (this.enableServerLogging === true) {
                if ((KNYMetricsService !== undefined) && (KNYMetricsService !== null) && (KNYMetricsService !== "")) {
                    if (typeof KNYMetricsService.sendEvent === "function") {
                        /** sendEvent params - eventType, subEventType, formID, widgetID, flowTag, metaInfo{JSON} **/
                        KNYMetricsService.sendEvent("Custom", "KonyLogger", "MarketPlaceComponent", logObj.component, null, logObj);
                    }
                }
            }
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
define('com/konymp/tabstextbutton/baseTab',['com/konymp/tabstextbutton/konyLogger'],function() {
    var konyLoggerModule = require('com/konymp/tabstextbutton/konyLogger');
    var konymp = konymp || {};
    konymp.logger = new konyLoggerModule("Tabs");
    return {
        /**
         * @function createDynamicFlex
         * @description This function is used to create Dynamic FlexContainer at run time
         * @private
         * @param {string} id
         * @param {string} left
         * @param {string} height
         * @param {string} width
         * @param {string} centerX
         * @param {string} centerY
         * @param {string} onClickCallback
         */
        createDynamicFlex: function(id, left, top, height, width, centerX, centerY, onClickCallback) {
            konymp.logger.trace("----------Entering createDynamicFlex function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                flx = new kony.ui.FlexContainer({
                    "id": id,
                    "top": top + "%",
                    "left": left + "%",
                    "width": width + "%",
                    "height": height + "%",
                    "zIndex": 5,
                    "centerX": centerX,
                    "centerY": centerY,
                    "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                    "isVisible": true,
                    "onClick": onClickCallback,
                    "clipBounds": true,
                }, {
                    "padding": [0, 0, 0, 0]
                }, {});
                konymp.logger.trace("---------------Exiting createDynamicFlex function---------------", konymp.logger.FUNCTION_EXIT);
                return flx;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            }
        },
        /**
         * @function createDynamicLabels
         * @description This function is used to create a Label at Run-Time
         * @private
         * @param {string} id
         * @param {string} text
         * @param {string} centerX
         * @param {string} centerY
         *return {widget} lbl
         */
        createDynamicLabels: function(id, text, centerX, centerY) {
            konymp.logger.trace("----------Entering createDynamicLabels function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var lblBasic = {
                    "id": id,
                    "skin": "konympTitleDullSkin",
                    "centerX": centerX,
                    "centerY": centerY,
                    "zIndex": 7,
                    "text": text,
                    "isVisible": true
                };
                var lblLayout = {};
                var lblPlatForm = {};
                var lbl = new kony.ui.Label(lblBasic, lblLayout, lblPlatForm);
                konymp.logger.trace("---------------Exiting createDynamicLabels function---------------", konymp.logger.FUNCTION_EXIT);
                return lbl;
            } catch (exception) {
                alert(JSON.stringify(exception));
            }
        },
        createDynamicImage: function(id, left, top, height, width, centerX, centerY, src) {
            try {
                konymp.logger.debug("#####In createDynamicImage", konymp.logger.FUNCTION_ENTRY);
                var createdImage = new kony.ui.Image2({
                    "id": id,
                    "isVisible": true,
                    "left": left,
                    "width": width,
                    "top": top,
                    "height": height,
                    "centerX": centerX,
                    "centerY": centerY,
                    "src": src,
                    "imageScaleMode": 1
                }, {}, {});
                return createdImage;
            } catch (exception) {
                konymp.logger.error("#####Exception in createDynamicImage : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        /**
         * @function setContentOffset
         * @description This function is used to setContentOffset of the flxTabs. 
         * @private
         * @param {string} index
         */
        setContentOffset: function(context, tabId) {
            try {
                konymp.logger.debug("#####In setContentOffset", konymp.logger.FUNCTION_ENTRY);
                var contentOffsetOfTab = context.view["flxTab" + (parseInt(tabId))].left;
                context.view.flxTabs.setContentOffset({
                    "x": contentOffsetOfTab
                }, true);
                context.view.flxTabs.forceLayout();
                konymp.logger.debug("#####In setContentOffset", konymp.logger.FUNCTION_ENTRY);
            } catch (exception) {
                konymp.logger.error("#####Exception in setContentOffset : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
    };
});
/*
#
#  Created by Team Kony.
#  Copyright (c) 2017 Kony Inc. All rights reserved.
#
*/
define('com/konymp/tabstextbutton/usertabstextbuttonController',['com/konymp/tabstextbutton/konyLogger','com/konymp/tabstextbutton/baseTab'],function() {
    var konyLoggerModule = require('com/konymp/tabstextbutton/konyLogger');
    var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("Tabs")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;
    constants.DEFAULT_TAB_WIDTH = "33.3%";
    constants.DEFAULT_TAB_COUNT = 6;
    constants.LAST_SELECTED_INDEX = 0;
    constants.DEFAULT_SELECTED_INDEX = 0;
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._tabCount = constants.DEFAULT_TAB_COUNT;
            this._widthOfTab = constants.DEFAULT_TAB_WIDTH;
            this._lastSelectedIndex = constants.LAST_SELECTED_INDEX;
            this._currentSelectedIndex = constants.DEFAULT_SELECTED_INDEX;
            this.title0 = null;
            this.title1 = null;
            this.title2 = null;
            this.title3 = null;
            this.title4 = null;
            this.title5 = null;
            this._postShowFlag = true;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            defineGetter(this, "tabCount", function() {
                konymp.logger.trace("----------Entering tabCount Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._tabCount;
            });
            defineSetter(this, "tabCount", function(val) {
                konymp.logger.trace("----------Entering tabCount Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    var baseContext = require('com/konymp/tabstextbutton/baseTab');
                    if (isNaN(val) || val > constants.DEFAULT_TAB_COUNT || val <= 0) {
                        var exception = {};
                        exception.property = "tabCount";
                        exception.message = "Invalid number entered";
                        throw exception;
                    }
                    this.baseContext = baseContext;
                    this._tabCount = val;
                } catch (exception) {
                    konymp.logger.error("#####Exception in tabCount : " + exception.message + exception.property, konymp.logger.EXCEPTION);
                    if (exception.property === "tabCount") {
                        throw exception;
                    }
                }
                konymp.logger.trace("----------Entering tabCount Setter---------", konymp.logger.FUNCTION_ENTRY);
            });
            defineGetter(this, "tabWidth", function() {
                konymp.logger.trace("----------Entering tabWidth Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._widthOfTab;
            });
            defineSetter(this, "tabWidth", function(val) {
                konymp.logger.trace("----------Entering tabWidth Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    if (isNaN(parseInt(val)) || val.charAt(val.length - 1) !== '%') {
                        var exception = {};
                        exception.property = "tabWidth";
                        exception.message = "Invalid tabWidth";
                        throw exception;
                    }
                    this._widthOfTab = val;
                    this.view.flxIndicator.width = val;
                } catch (exception) {
                    konymp.logger.error("#####Exception in tabWidth : " + exception.message, konymp.logger.EXCEPTION);
                    if (exception.property === "tabWidth") {
                        throw exception;
                    }
                }
                konymp.logger.trace("----------Entering tabWidth Setter---------", konymp.logger.FUNCTION_ENTRY);
            });
            defineGetter(this, "title0", function() {
                konymp.logger.trace("----------Entering title0 Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._title0;
            });
            defineSetter(this, "title0", function(val) {
                konymp.logger.trace("----------Entering title0 Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    this._title0 = val;
                } catch (exception) {
                    konymp.logger.error("#####Exception in title0 : " + exception.message, konymp.logger.EXCEPTION);
                }
                konymp.logger.trace("----------Entering title0 Setter---------", konymp.logger.FUNCTION_ENTRY);
            });
            defineGetter(this, "title1", function() {
                konymp.logger.trace("----------Entering title1 Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._title1;
            });
            defineSetter(this, "title1", function(val) {
                konymp.logger.trace("----------Entering title1 Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    this._title1 = val;
                } catch (exception) {
                    konymp.logger.error("#####Exception in title1 : " + exception.message, konymp.logger.EXCEPTION);
                }
                konymp.logger.trace("----------Entering title1 Setter---------", konymp.logger.FUNCTION_ENTRY);
            });
            defineGetter(this, "title2", function() {
                konymp.logger.trace("----------Entering title2 Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._title2;
            });
            defineSetter(this, "title2", function(val) {
                konymp.logger.trace("----------Entering title2 Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    this._title2 = val;
                } catch (exception) {
                    konymp.logger.error("#####Exception in title2 : " + exception.message, konymp.logger.EXCEPTION);
                }
                konymp.logger.trace("----------Entering title2 Setter---------", konymp.logger.FUNCTION_ENTRY);
            });
            defineGetter(this, "title3", function() {
                konymp.logger.trace("----------Entering title3 Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._title3;
            });
            defineSetter(this, "title3", function(val) {
                konymp.logger.trace("----------Entering title3 Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    this._title3 = val;
                } catch (exception) {
                    konymp.logger.error("#####Exception in title3 : " + exception.message, konymp.logger.EXCEPTION);
                }
                konymp.logger.trace("----------Entering title3 Setter---------", konymp.logger.FUNCTION_ENTRY);
            });
            defineGetter(this, "title4", function() {
                konymp.logger.trace("----------Entering title4 Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._title4;
            });
            defineSetter(this, "title4", function(val) {
                konymp.logger.trace("----------Entering title4 Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    this._title4 = val;
                } catch (exception) {
                    konymp.logger.error("#####Exception in title4 : " + exception.message, konymp.logger.EXCEPTION);
                }
                konymp.logger.trace("----------Entering title4 Setter---------", konymp.logger.FUNCTION_ENTRY);
            });
            defineGetter(this, "title5", function() {
                konymp.logger.trace("----------Entering title5 Getter---------", konymp.logger.FUNCTION_ENTRY);
                return this._title5;
            });
            defineSetter(this, "title5", function(val) {
                konymp.logger.trace("----------Entering title5 Setter---------", konymp.logger.FUNCTION_ENTRY);
                try {
                    this._title5 = val;
                } catch (exception) {
                    konymp.logger.error("#####Exception in title5 : " + exception.message, konymp.logger.EXCEPTION);
                }
                konymp.logger.trace("----------Entering title5 Setter---------", konymp.logger.FUNCTION_ENTRY);
            });
        },
        /**
         * @function createTabs
         * @description Helper and validation function that creates tabs
         * @public
         * @param {Object} tabData 
         */
        createTabs: function(tabData) {
            try {
                konymp.logger.debug("#####Entering createTabs", konymp.logger.FUNCTION_ENTRY);
                this.tabData = [];
                this._lastSelectedIndex = 0;
                this._currentSelectedIndex = 0;
                this.view.flxIndicator.left = "0%";
                this.view.lblSkin.isVisible = false;
                this.view.lblDullSkin.isVisible = false;
                if (tabData === null || tabData === undefined) {
                    this.tabData = [this.title0, this.title1, this.title2, this.title3, this.title4, this.title5];
                } else {
                    this.tabCount = tabData.length;
                    if (this.tabCount > constants.DEFAULT_TAB_COUNT || this.tabCount === 0) {
                        this.view.remove(this.view.flxTabs);
                        return;
                    }
                    this.tabData = tabData;
                }
                for (var loopCount = 0; loopCount < constants.DEFAULT_TAB_COUNT; loopCount++) {
                    if (this.view["flxTab" + loopCount] !== null && this.view["flxTab" + loopCount] !== undefined) {
                        this.view.flxTabs.remove(this.view["flxTab" + loopCount]);
                    }
                }
                this.addFlexsToTheHeader();
                this.goToTab(0);
                konymp.logger.debug("#####Entering createTabs", konymp.logger.FUNCTION_ENTRY);
            } catch (exception) {
                konymp.logger.error("#####Exception in createTabs : " + exception.message, konymp.logger.EXCEPTION);
            }
        },
        /**
         * @function addFlexsToTheHeader
         * @description This function helper function for createTabs
         * @private
         */
        addFlexsToTheHeader: function() {
            konymp.logger.trace("----------Entering addFlexsToTheHeader function ---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var left = 0;
                var width = parseInt(this._widthOfTab);
                for (var loopCount = 0; loopCount < this.tabCount; loopCount++) {
                    var id = "flxTab" + loopCount;
                    var createdFlex = this.baseContext.createDynamicFlex(id, left, 0, 100, width, null, null, this.onClickOfTabs.bind(this));
                    this.view.flxTabs.add(createdFlex);
                    left = left + width;
                }
                this.addTitleToTheTabs();
            } catch (exception) {
                konymp.logger.error("#####Exception in addFlexsToTheHeader : " + exception.message, konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting addFlexsToTheHeader function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function addTitleToTheTabs
         * @description This function is used create Labels and create a Title to the Tab 
         * @private
         */
        addTitleToTheTabs: function() {
            konymp.logger.trace("----------Entering addTitleToTheTabs function ---------", konymp.logger.FUNCTION_ENTRY);
            try {
                for (var loopCount = 0; loopCount < this.tabCount; loopCount++) {
                    var id = "lblTitle" + loopCount;
                    var createdLabel = this.baseContext.createDynamicLabels(id, this.tabData[loopCount], "50%", "50%");
                    createdLabel.skin = this.sknTextInactive;
                    this.view["flxTab" + loopCount].add(createdLabel);
                }
                this.view.lblTitle0.skin = this.sknTextActive;
            } catch (exception) {
                konymp.logger.error("#####Exception in addTitleToTheTabs : " + exception.message, konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting addTitleToTheTabs function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function onClickOfTabs
         * @description This function is used to invoke when consumer click on the Tabs
         * @private
         * @param {JSON} eventObject
         */
        onClickOfTabs: function(eventObject) {
            konymp.logger.trace("----------Entering onClickOfTabs function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var index = (eventObject.id).charAt(eventObject.id.length - 1);
                this.baseEvent(index);
            } catch (exception) {
                konymp.logger.error("#####Exception in onClickOfTabs : " + exception.message, konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting onClickOfTabs function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function baseEvent
         * @description This is a helper function
         * @private
         * @param {string} index
         */
        baseEvent: function(index) {
            konymp.logger.trace("----------Entering baseEvent function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this.underlineAnimation(index);
                this._currentSelectedIndex = index;
                if (index === 0) {
                    this.baseContext.setContentOffset(this, 0);
                } else {
                    this.baseContext.setContentOffset(this, parseInt(this._currentSelectedIndex) - 1);
                }
                if (this.onTabChange !== null && this.onTabChange !== undefined) {
                    this.onTabChange(this.getSelectedTabDetails());
                }
            } catch (exception) {
                konymp.logger.error("#####Exception in baseEvent : " + exception.message, konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting baseEvent function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function underlineAnimation
         * @description This function is used to make a Blink animation when consumer Clicks on the Tabs
         * @private
         * @param {string} index   
         */
        underlineAnimation: function(index) {
            konymp.logger.trace("----------Entering underlineAnimation function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                this.swapTheSkinForSelected(index);
            } catch (exception) {
                alert(JSON.stringify(exception));
            }
            konymp.logger.trace("---------------Exiting underlineAnimation function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function swapTheSkinForSelected
         * @description This function is used to swap the skin between the current Selected tab and the last selected Tab.
         * @private
         * @param {string} index
         */
        swapTheSkinForSelected: function(index) {
            konymp.logger.trace("----------Entering swapTheSkinForSelected function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (index !== this._lastSelectedIndex) {
                    this.view["lblTitle" + index].skin = this.sknTextActive;
                    this.view["lblTitle" + this._lastSelectedIndex].skin = this.sknTextInactive;
                    this.moveIndicator(index, this._lastSelectedIndex);
                    this._lastSelectedIndex = index;
                }
            } catch (exception) {
                konymp.logger.error("#####Exception in swapTheSkinForSelected : " + exception.message, konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting swapTheSkinForSelected function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function moveIndicator
         * @description This function is used to move the indicator
         * @private
         * @param {string} index
         * @param {string} recentSelected
         */
        moveIndicator: function(index, recentSelected) {
            konymp.logger.trace("----------Entering moveIndicator function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var left, width, finalLeft = null,
                    finalWidth;
                if (index !== recentSelected) {
                    var finalIndex = index;
                    if (index - recentSelected > 0) {
                        finalIndex = recentSelected;
                        finalLeft = this.view["flxTab" + index].left;
                        width = Math.abs(index - recentSelected + 1);
                    } else {
                        width = Math.abs(index - recentSelected) + 1;
                    }
                    width = width * parseInt(this._widthOfTab) + "%";
                    left = this.view["flxTab" + finalIndex].left;
                    finalWidth = this._widthOfTab;
                    this.animateTab(left, width, finalLeft, finalWidth);
                }
            } catch (exception) {
                konymp.logger.error("#####Exception in moveIndicator : " + exception.message, konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting moveIndicator function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function animateTab
         * @description This function is to animate the indicator towards the Right side.
         * @private
         * @param {string} left
         * @param {string} width
         * @param {string} finalLeft
         * @param {string} finalWidth
         */
        animateTab: function(left, width, finalLeft, finalWidth) {
            konymp.logger.trace("----------Entering animateTab function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (finalLeft === null) {
                    finalLeft = left;
                }
                this.view.flxIndicator.animate(kony.ui.createAnimation({
                    "100": {
                        "left": finalLeft,
                        "width": finalWidth,
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        }
                    },
                    "50": {
                        "left": left,
                        "width": width,
                        "stepConfig": {
                            "timingFunction": kony.anim.EASE
                        }
                    }
                }), {
                    "delay": 0,
                    "iterationCount": 1,
                    "fillMode": kony.anim.FILL_MODE_FORWARDS,
                    "duration": 0.5
                });
            } catch (exception) {
                konymp.logger.error("#####Exception in animateTab : " + exception.message, konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting animateTab function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function moveLeft
         * @description This API is used to move the selected Tab towards the Left
         * @private
         */
        moveLeft: function() {
            konymp.logger.trace("----------Entering moveLeft api---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (this._currentSelectedIndex > 0) {
                    this._currentSelectedIndex = parseInt(this._currentSelectedIndex) - 1;
                    this.baseEvent(this._currentSelectedIndex);
                }
            } catch (exception) {
                konymp.logger.error("#####Exception in moveLeft : " + exception.message, konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting moveLeft api---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function moveRight
         * @description This AP is used to move the selectedtab towards the Right
         * @private
         */
        moveRight: function() {
            konymp.logger.trace("----------Entering moveRight api---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if (this.tabCount > this._currentSelectedIndex && parseInt(this._currentSelectedIndex) + 1 !== parseInt(this.tabCount)) {
                    this._currentSelectedIndex = parseInt(this._currentSelectedIndex) + 1;
                    this.baseEvent(this._currentSelectedIndex);
                }
            } catch (exception) {
                konymp.logger.error("#####Exception in moveRight : " + exception.message, konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting moveRight api---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function goToTab
         * @description This api is used to select the tab at run time. 
         * @public
         * @param {string} tabindex
         */
        goToTab: function(tabIndex) {
            konymp.logger.trace("----------Entering gotoTab function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                if ((tabIndex !== null && tabIndex !== undefined && !isNaN(tabIndex)) && (tabIndex >= 0 && tabIndex < this.tabCount)) {
                    this._currentSelectedIndex = tabIndex;
                    this.baseEvent(this._currentSelectedIndex);
                } else {
                    throw {
                        "Error": "Invalid State",
                        "message": "TabIndex doesn't exist"
                    };
                }
            } catch (exception) {
                konymp.logger.error("#####Exception in gotoTab : " + exception.message, konymp.logger.EXCEPTION);
                throw exception;
            }
            konymp.logger.trace("---------------Exiting gotoTab function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getSelectedTabDetails
         * @description This api is used to know which tab is selected at run time. 
         * @public
         * @return {JSON} tabIndex and tabTitle
         */
        getSelectedTabDetails: function() {
            konymp.logger.trace("----------Entering getSelectedTabDetails function---------", konymp.logger.FUNCTION_ENTRY);
            try {
                var index = this._currentSelectedIndex;
                var tabDetails = {};
                tabDetails.text = this.tabData[index];
                tabDetails.tabIndex = index;
                return tabDetails;
            } catch (exception) {
                konymp.logger.error("#####Exception in getSelectedTabDetails : " + exception.message, konymp.logger.EXCEPTION);
            }
            konymp.logger.trace("---------------Exiting getSelectedTabDetails function---------------", konymp.logger.FUNCTION_EXIT);
        },
        /**
         * @function getSelectedTabIndex
         * @description This api is used to get the current selected Index
         * @public
         * @return {int} tabIndex
         */
        getSelectedTabIndex: function() {
            try {
                konymp.logger.trace("----------Entering getSelectedTabIndex function---------", konymp.logger.FUNCTION_ENTRY);
                return this._currentSelectedIndex;
            } catch (exception) {
                konymp.logger.error("#####Exception in getSelectedTabIndex : " + exception.message, konymp.logger.EXCEPTION);
            }
        }
    };
});
define('com/konymp/tabstextbutton/tabstextbuttonControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** preShow defined for tabstextbutton **/
    AS_FlexContainer_g56a255573e544c8ac06dc7411918ce7: function AS_FlexContainer_g56a255573e544c8ac06dc7411918ce7(eventobject) {
        var self = this;
        if (this._postShowFlag) {
            this.createTabs(null);
            this._postShowFlag = false;
        }
    }
});
define('com/konymp/tabstextbutton/tabstextbuttonController',["com/konymp/tabstextbutton/usertabstextbuttonController", "com/konymp/tabstextbutton/tabstextbuttonControllerActions"], function() {
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
