/*
#
#  Created by Team Kony.
#  Copyright (c) 2017 Kony Inc. All rights reserved.
#
*/
define(function() {
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