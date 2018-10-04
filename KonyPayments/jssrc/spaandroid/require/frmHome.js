define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
            this.setDefaultUnit(kony.flex.DP);
            var SegContacts = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "btnPayee": "Pay",
                    "imgContact": "imagedrag.png",
                    "lEmail": "Email",
                    "lPlace": "Place",
                    "lbNumber": "- Mobile Number",
                    "lblAddress": "- Hyderabad",
                    "lblEmail": "- test@kony.com",
                    "lblName": "Name of the Payee",
                    "lmobile": "Mobile"
                }, {
                    "btnPayee": "Pay",
                    "imgContact": "imagedrag.png",
                    "lEmail": "Email",
                    "lPlace": "Place",
                    "lbNumber": "- Mobile Number",
                    "lblAddress": "- Hyderabad",
                    "lblEmail": "- test@kony.com",
                    "lblName": "Name of the Payee",
                    "lmobile": "Mobile"
                }, {
                    "btnPayee": "Pay",
                    "imgContact": "imagedrag.png",
                    "lEmail": "Email",
                    "lPlace": "Place",
                    "lbNumber": "- Mobile Number",
                    "lblAddress": "- Hyderabad",
                    "lblEmail": "- test@kony.com",
                    "lblName": "Name of the Payee",
                    "lmobile": "Mobile"
                }, {
                    "btnPayee": "Pay",
                    "imgContact": "imagedrag.png",
                    "lEmail": "Email",
                    "lPlace": "Place",
                    "lbNumber": "- Mobile Number",
                    "lblAddress": "- Hyderabad",
                    "lblEmail": "- test@kony.com",
                    "lblName": "Name of the Payee",
                    "lmobile": "Mobile"
                }],
                "groupCells": false,
                "height": "320dp",
                "id": "SegContacts",
                "isVisible": true,
                "left": "10dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_dd6c1e7494554a52ac15f2243efb7d1a,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": "10dp",
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0bfd30fb9140a49",
                "rowTemplate": "flxContacts",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "f5f5f500",
                "separatorRequired": true,
                "separatorThickness": 10,
                "showScrollbars": true,
                "top": "215dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnPayee": "btnPayee",
                    "flxContPayee": "flxContPayee",
                    "flxContacts": "flxContacts",
                    "imgContact": "imgContact",
                    "lEmail": "lEmail",
                    "lPlace": "lPlace",
                    "lbNumber": "lbNumber",
                    "lblAddress": "lblAddress",
                    "lblEmail": "lblEmail",
                    "lblName": "lblName",
                    "lmobile": "lmobile"
                },
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexContainer0f26035572a2747 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "FlexContainer0f26035572a2747",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "flxSkin",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0f26035572a2747.setDefaultUnit(kony.flex.DP);
            var Image0dbb96cb5176245 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "Image0dbb96cb5176245",
                "isVisible": true,
                "left": "5dp",
                "skin": "slImage",
                "src": "hamburger_menu.png",
                "top": "0dp",
                "width": "25dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0f721b2b4de584e = new kony.ui.Label({
                "height": "100%",
                "id": "Label0f721b2b4de584e",
                "isVisible": true,
                "left": "50dp",
                "skin": "CopydefLabel0dcdedf8dc97246",
                "text": "Kony Payment App",
                "textStyle": {},
                "top": "0dp",
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
            FlexContainer0f26035572a2747.add(Image0dbb96cb5176245, Label0f721b2b4de584e);
            var Image0df0dc7a476534d = new kony.ui.Image2({
                "height": "150dp",
                "id": "Image0df0dc7a476534d",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "banner.png",
                "top": "50dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Button0ee25da74c4c14a = new kony.ui.Button({
                "bottom": "5%",
                "focusSkin": "btnFloat",
                "height": "70dp",
                "id": "Button0ee25da74c4c14a",
                "isVisible": true,
                "onClick": controller.AS_Button_b581e9fd1d8e4886a178cc7b4c515446,
                "right": "7%",
                "skin": "btnFloat",
                "width": "70dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Image0h5813f3b6b3148 = new kony.ui.Image2({
                "height": "80dp",
                "id": "Image0h5813f3b6b3148",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "tag_image.png",
                "top": "110dp",
                "width": "184dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.add(SegContacts, FlexContainer0f26035572a2747, Image0df0dc7a476534d, Button0ee25da74c4c14a, Image0h5813f3b6b3148);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_gc83d28d2ff740d29606b08d84b0a9ab,
            "skin": "CopyslForm0b2d82e3cdc474f"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});