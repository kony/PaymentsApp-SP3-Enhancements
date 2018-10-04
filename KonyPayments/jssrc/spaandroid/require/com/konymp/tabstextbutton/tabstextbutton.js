define(function() {
    return function(controller) {
        var tabstextbutton = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "11%",
            "id": "tabstextbutton",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "preShow": controller.AS_FlexContainer_g56a255573e544c8ac06dc7411918ce7,
            "skin": "konympsknGreyBackground",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        tabstextbutton.setDefaultUnit(kony.flex.DP);
        var flxTabs = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": false,
            "bounces": false,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "enableScrolling": true,
            "height": "60%",
            "horizontalScrollIndicator": false,
            "id": "flxTabs",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
            "skin": "konympsknFlxCGreyBackGround",
            "top": "0%",
            "verticalScrollIndicator": false,
            "width": "90%",
            "zIndex": 3
        }, {}, {});
        flxTabs.setDefaultUnit(kony.flex.DP);
        var flxTab1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxTab1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyslFbox",
            "top": "0%",
            "width": "33.30%",
            "zIndex": 7
        }, {}, {});
        flxTab1.setDefaultUnit(kony.flex.DP);
        var lbl1 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lbl1",
            "isVisible": false,
            "skin": "sknActiveGrey",
            "text": "Tab1",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxTab1.add(lbl1);
        var flxTab2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxTab2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "33.30%",
            "skin": "CopyslFbox",
            "top": "0%",
            "width": "33.30%",
            "zIndex": 4
        }, {}, {});
        flxTab2.setDefaultUnit(kony.flex.DP);
        var lbl2 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lbl2",
            "isVisible": false,
            "skin": "sknInactiveGrey",
            "text": "Tab2",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxTab2.add(lbl2);
        var flxTab3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxTab3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "66.60%",
            "skin": "CopyslFbox",
            "top": "0%",
            "width": "33.30%",
            "zIndex": 4
        }, {}, {});
        flxTab3.setDefaultUnit(kony.flex.DP);
        var lbl3 = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lbl3",
            "isVisible": true,
            "skin": "sknInactiveGrey",
            "text": "Tab3",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxTab3.add(lbl3);
        var flxIndicator = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "flxIndicator",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "konympsknHighlightGrey",
            "top": "0%",
            "width": "33.30%",
            "zIndex": 3
        }, {}, {});
        flxIndicator.setDefaultUnit(kony.flex.DP);
        flxIndicator.add();
        var lblSkin = new kony.ui.Label({
            "centerX": "16.50%",
            "centerY": "52%",
            "id": "lblSkin",
            "isVisible": true,
            "skin": "sknActiveGrey",
            "text": "Tab1",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 6
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblDullSkin = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "52%",
            "id": "lblDullSkin",
            "isVisible": true,
            "skin": "sknInactiveGrey",
            "text": "Tab2",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxTabs.add(flxTab1, flxTab2, flxTab3, flxIndicator, lblSkin, lblDullSkin);
        var flxRoundCorner = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "61%",
            "id": "flxRoundCorner",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "9dp",
            "skin": "konympsknRoundCorner",
            "top": "7dp",
            "width": "90%",
            "zIndex": 2
        }, {}, {});
        flxRoundCorner.setDefaultUnit(kony.flex.DP);
        flxRoundCorner.add();
        tabstextbutton.add(flxTabs, flxRoundCorner);
        return tabstextbutton;
    }
})