/*
#
#  Created by Team Kony.
#  Copyright (c) 2017 Kony Inc. All rights reserved.
#
*/
define(function() {
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
          	this._postShowFlag=true;
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
                      if(this.view["flxTab" + loopCount]!==null && this.view["flxTab" + loopCount]!==undefined)
                        {
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
                }else {
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
                this.view.flxIndicator.animate(
                    kony.ui.createAnimation({
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
				}
              else{
                throw{"Error":"Invalid State",
                     "message":"TabIndex doesn't exist"};
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