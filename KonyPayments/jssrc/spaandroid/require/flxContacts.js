define("flxContacts", function() {
    return function(controller) {
        var flxContacts = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxContacts",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0g357313e457149",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxContacts.setDefaultUnit(kony.flex.DP);
        var flxContPayee = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxContPayee",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxContPayee.setDefaultUnit(kony.flex.DP);
        var imgContact = new kony.ui.Image2({
            "centerY": "50%",
            "height": "50dp",
            "id": "imgContact",
            "isVisible": true,
            "left": "-10dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "100dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblName = new kony.ui.Label({
            "centerY": "50%",
            "height": "40dp",
            "id": "lblName",
            "isVisible": true,
            "left": "85dp",
            "skin": "lblskn",
            "text": "Name of the Payee",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var btnPayee = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "btnskn2",
            "height": "50dp",
            "id": "btnPayee",
            "isVisible": true,
            "onClick": controller.AS_Button_ab0f524959364fc28ec3cc3949279ed0,
            "right": "10dp",
            "skin": "btnskn",
            "text": "Pay",
            "width": "50dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxContPayee.add(imgContact, lblName, btnPayee);
        var lbNumber = new kony.ui.Label({
            "height": "30dp",
            "id": "lbNumber",
            "isVisible": true,
            "left": "85dp",
            "skin": "lblgreyFont",
            "text": "- Mobile Number",
            "textStyle": {},
            "top": "60dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblEmail = new kony.ui.Label({
            "height": "30dp",
            "id": "lblEmail",
            "isVisible": true,
            "left": "85dp",
            "skin": "lblgreyFont",
            "text": "- test@kony.com",
            "textStyle": {},
            "top": "90dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblAddress = new kony.ui.Label({
            "height": "30dp",
            "id": "lblAddress",
            "isVisible": true,
            "left": "85dp",
            "skin": "lblgreyFont",
            "text": "- Hyderabad",
            "textStyle": {},
            "top": "120dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lmobile = new kony.ui.Label({
            "height": "30dp",
            "id": "lmobile",
            "isVisible": true,
            "left": "20dp",
            "skin": "lblskn",
            "text": "Mobile",
            "textStyle": {},
            "top": "60dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lEmail = new kony.ui.Label({
            "height": "30dp",
            "id": "lEmail",
            "isVisible": true,
            "left": "20dp",
            "skin": "lblskn",
            "text": "Email",
            "textStyle": {},
            "top": "90dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lPlace = new kony.ui.Label({
            "height": "30dp",
            "id": "lPlace",
            "isVisible": true,
            "left": "20dp",
            "skin": "lblskn",
            "text": "Place",
            "textStyle": {},
            "top": "120dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxContacts.add(flxContPayee, lbNumber, lblEmail, lblAddress, lmobile, lEmail, lPlace);
        return flxContacts;
    }
})