define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexContainer0b7b0d407f9544c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60%",
                "id": "FlexContainer0b7b0d407f9544c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "skin": "CopyslFbox0fa7c2d84793b41",
                "top": "100%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0b7b0d407f9544c.setDefaultUnit(kony.flex.DP);
            var FlexContainer0h6eacd971f0047 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlexContainer0h6eacd971f0047",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "CopyslFbox0h6b6a3a997874d",
                "top": "50dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0h6eacd971f0047.setDefaultUnit(kony.flex.DP);
            var FlexContainer0jae3ac79161e4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "FlexContainer0jae3ac79161e4a",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "10dp",
                "right": "10dp",
                "skin": "CopyslFbox0g357313e457149",
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0jae3ac79161e4a.setDefaultUnit(kony.flex.DP);
            var FlexContainer0fc9a547e1cda40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "FlexContainer0fc9a547e1cda40",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_h21f8de12a7f494d83ac1fa7d37acf4c,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0fc9a547e1cda40.setDefaultUnit(kony.flex.DP);
            var Label0eba89b5bfbf94c = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0eba89b5bfbf94c",
                "isVisible": true,
                "left": "25dp",
                "skin": "lblskn",
                "text": "ADD NEW CARD",
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
            var imgPlus = new kony.ui.Image2({
                "centerY": "50%",
                "height": "30dp",
                "id": "imgPlus",
                "isVisible": true,
                "onTouchEnd": controller.AS_Image_a9b1fcf08ee74baa840110a91a5fec85,
                "right": "20dp",
                "skin": "slImage",
                "src": "add_creditcard_plus_icon.png",
                "top": "2dp",
                "width": "30dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnSave = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "btnSave1",
                "height": "30dp",
                "id": "btnSave",
                "isVisible": false,
                "onClick": controller.AS_Button_fe707d42faa34d21b308e753a91dbce8,
                "right": "10dp",
                "skin": "btnSave1",
                "text": "Save",
                "top": "7dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0fc9a547e1cda40.add(Label0eba89b5bfbf94c, imgPlus, btnSave);
            var Label0c133dae1c50c4f = new kony.ui.Label({
                "centerX": "50%",
                "height": "4px",
                "id": "Label0c133dae1c50c4f",
                "isVisible": false,
                "left": "15dp",
                "right": "15dp",
                "skin": "lblLine",
                "textStyle": {},
                "top": "0dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var flxCreditCard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 92
                },
                "centerX": "50%",
                "clipBounds": true,
                "height": "200dp",
                "id": "flxCreditCard",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "right": "20dp",
                "skin": "slFbox",
                "top": "2dp",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flxCreditCard.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0ce72fee0a7e04d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "CopyFlexContainer0ce72fee0a7e04d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0ce72fee0a7e04d.setDefaultUnit(kony.flex.DP);
            var CopyLabel0c8395652cd4e48 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0c8395652cd4e48",
                "isVisible": true,
                "left": "10dp",
                "skin": "lblgreyFont",
                "text": "Name",
                "textStyle": {},
                "top": "7dp",
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
            var CopyLabel0acb1cd9af1d541 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0acb1cd9af1d541",
                "isVisible": true,
                "left": "98dp",
                "skin": "lblskn",
                "text": "-",
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
            var CopyLabel0fe0a843b33274b = new kony.ui.Label({
                "bottom": "0dp",
                "height": "2px",
                "id": "CopyLabel0fe0a843b33274b",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "lblLine",
                "textStyle": {},
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var txtfldCardName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "txtfldfocus",
                "height": "40dp",
                "id": "txtfldCardName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "110dp",
                "placeholder": "Card Holder Name",
                "secureTextEntry": false,
                "skin": "txtfieldskin",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            CopyFlexContainer0ce72fee0a7e04d.add(CopyLabel0c8395652cd4e48, CopyLabel0acb1cd9af1d541, CopyLabel0fe0a843b33274b, txtfldCardName);
            var CopyFlexContainer0f9e216b7321345 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "CopyFlexContainer0f9e216b7321345",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "50dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0f9e216b7321345.setDefaultUnit(kony.flex.DP);
            var CopyLabel0f152970400fa4d = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0f152970400fa4d",
                "isVisible": true,
                "left": "10dp",
                "skin": "lblgreyFont",
                "text": "Card Number",
                "textStyle": {},
                "top": "7dp",
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
            var CopyLabel0gd77ccc7859b45 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0gd77ccc7859b45",
                "isVisible": true,
                "left": "98dp",
                "skin": "lblskn",
                "text": "-",
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
            var CopyLabel0i1c07199181f44 = new kony.ui.Label({
                "bottom": "0dp",
                "height": "2px",
                "id": "CopyLabel0i1c07199181f44",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "lblLine",
                "textStyle": {},
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var txtFldCardNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "txtfldfocus",
                "height": "40dp",
                "id": "txtFldCardNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "110dp",
                "maxTextLength": 16,
                "placeholder": "Card Number",
                "secureTextEntry": false,
                "skin": "txtfieldskin",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": 0,
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            CopyFlexContainer0f9e216b7321345.add(CopyLabel0f152970400fa4d, CopyLabel0gd77ccc7859b45, CopyLabel0i1c07199181f44, txtFldCardNumber);
            var CopyFlexContainer0dd9ec95bca8147 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "CopyFlexContainer0dd9ec95bca8147",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "100dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0dd9ec95bca8147.setDefaultUnit(kony.flex.DP);
            var CopyLabel0f5c0e99c5b8c49 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0f5c0e99c5b8c49",
                "isVisible": true,
                "left": "10dp",
                "skin": "lblgreyFont",
                "text": "Expiry Date",
                "textStyle": {},
                "top": "7dp",
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
            var CopyLabel0fae5613d3aed42 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0fae5613d3aed42",
                "isVisible": true,
                "left": "98dp",
                "skin": "lblskn",
                "text": "-",
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
            var CopyLabel0a9b5705f0c7d44 = new kony.ui.Label({
                "bottom": "0dp",
                "height": "2px",
                "id": "CopyLabel0a9b5705f0c7d44",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "lblLine",
                "textStyle": {},
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var txtFldDate = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "txtfldfocus",
                "height": "40dp",
                "id": "txtFldDate",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "110dp",
                "maxTextLength": null,
                "placeholder": "MM/YY",
                "secureTextEntry": false,
                "skin": "txtfieldskin",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "123dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            CopyFlexContainer0dd9ec95bca8147.add(CopyLabel0f5c0e99c5b8c49, CopyLabel0fae5613d3aed42, CopyLabel0a9b5705f0c7d44, txtFldDate);
            var CopyFlexContainer0gf6701ac8ae44a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "CopyFlexContainer0gf6701ac8ae44a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "150dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0gf6701ac8ae44a.setDefaultUnit(kony.flex.DP);
            var CopyLabel0efb5117514d44c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0efb5117514d44c",
                "isVisible": true,
                "left": "10dp",
                "skin": "lblgreyFont",
                "text": "CVV",
                "textStyle": {},
                "top": "7dp",
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
            var CopyLabel0c4c50100bd1d47 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0c4c50100bd1d47",
                "isVisible": true,
                "left": "98dp",
                "skin": "lblskn",
                "text": "-",
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
            var txtFldcvv = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "txtfldfocus",
                "height": "40dp",
                "id": "txtFldcvv",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "110dp",
                "maxTextLength": 3,
                "placeholder": "CVV",
                "secureTextEntry": false,
                "skin": "txtfieldskin",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoComplete": false,
                "autoCorrect": false
            });
            CopyFlexContainer0gf6701ac8ae44a.add(CopyLabel0efb5117514d44c, CopyLabel0c4c50100bd1d47, txtFldcvv);
            flxCreditCard.add(CopyFlexContainer0ce72fee0a7e04d, CopyFlexContainer0f9e216b7321345, CopyFlexContainer0dd9ec95bca8147, CopyFlexContainer0gf6701ac8ae44a);
            FlexContainer0jae3ac79161e4a.add(FlexContainer0fc9a547e1cda40, Label0c133dae1c50c4f, flxCreditCard);
            var SegCards = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "CopyLabel0a9b5705f0c7d44": "",
                    "CopyLabel0i1c07199181f44": "",
                    "Image0f63afa6213274a": "credite_card_icon_02.png",
                    "imgselect": "imagedrag.png",
                    "lblBlur": "Label",
                    "lcardnum": "Card Number",
                    "lexpire": "Expiry Date",
                    "lminus": "-",
                    "lminus2": "-",
                    "txtFldCardNumber": "Label",
                    "txtFldDate": "Label",
                    "txtfldCardname": "Label"
                }],
                "groupCells": false,
                "height": "250dp",
                "id": "SegCards",
                "isVisible": true,
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_d9695979d6ce4b14b1e54d2a7481939d,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "right": "10dp",
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0g8a4f546528b4f",
                "rowTemplate": "flxCard",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
                "selectionBehaviorConfig": {
                    "imageIdentifier": "imgselect",
                    "selectedStateImage": "tick_mark_hover.png",
                    "unselectedStateImage": "tick_normal.png"
                },
                "separatorColor": "f5f5f500",
                "separatorRequired": true,
                "separatorThickness": 10,
                "showScrollbars": false,
                "top": "10dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "CopyFlexContainer0dd9ec95bca8147": "CopyFlexContainer0dd9ec95bca8147",
                    "CopyFlexContainer0f9e216b7321345": "CopyFlexContainer0f9e216b7321345",
                    "CopyLabel0a9b5705f0c7d44": "CopyLabel0a9b5705f0c7d44",
                    "CopyLabel0i1c07199181f44": "CopyLabel0i1c07199181f44",
                    "FlexContainer0c391ab83a4464a": "FlexContainer0c391ab83a4464a",
                    "FlexContainerblur": "FlexContainerblur",
                    "Image0f63afa6213274a": "Image0f63afa6213274a",
                    "flxCard": "flxCard",
                    "imgselect": "imgselect",
                    "lblBlur": "lblBlur",
                    "lcardnum": "lcardnum",
                    "lexpire": "lexpire",
                    "lminus": "lminus",
                    "lminus2": "lminus2",
                    "txtFldCardNumber": "txtFldCardNumber",
                    "txtFldDate": "txtFldDate",
                    "txtfldCardname": "txtfldCardname"
                },
                "width": "90%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxwire = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "130dp",
                "id": "flxwire",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "8dp",
                "skin": "CopyslFbox0ba326fd551a543",
                "top": "10dp",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxwire.setDefaultUnit(kony.flex.DP);
            var FlexContainer0b6f90c1384ba42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "FlexContainer0b6f90c1384ba42",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "20dp",
                "onClick": controller.AS_FlexContainer_e9b04d36791049f1b9cdefbba0110a39,
                "skin": "CopyslFbox0j80716d26be649",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0b6f90c1384ba42.setDefaultUnit(kony.flex.DP);
            var Image0ee65f9d789ce44 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "150dp",
                "id": "Image0ee65f9d789ce44",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "google_pay.png",
                "width": "60%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0b6f90c1384ba42.add(Image0ee65f9d789ce44);
            var CopyFlexContainer0f5b73af9897b4d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "CopyFlexContainer0f5b73af9897b4d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "onClick": controller.AS_FlexContainer_ef7d90f4e60d4c5bb0236b1843d7d6b6,
                "skin": "CopyslFbox0j80716d26be649",
                "width": "40%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0f5b73af9897b4d.setDefaultUnit(kony.flex.DP);
            var CopyImage0i940a0e6abc74a = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "150dp",
                "id": "CopyImage0i940a0e6abc74a",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "apple_pay.png",
                "width": "60%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0f5b73af9897b4d.add(CopyImage0i940a0e6abc74a);
            flxwire.add(FlexContainer0b6f90c1384ba42, CopyFlexContainer0f5b73af9897b4d);
            FlexContainer0h6eacd971f0047.add(FlexContainer0jae3ac79161e4a, SegCards, flxwire);
            var CopyFlexContainer0b7c155798cd34c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "CopyFlexContainer0b7c155798cd34c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "flexgrey",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyFlexContainer0b7c155798cd34c.setDefaultUnit(kony.flex.DP);
            var btncreditcard = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "btnTrans1",
                "height": "80%",
                "id": "btncreditcard",
                "isVisible": true,
                "left": "50dp",
                "onClick": controller.AS_Button_iaee813e09ad41c78fe7ab727eb0550c,
                "skin": "btnskn3",
                "text": "CREDITCARD",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnwire = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "btnTrans1",
                "height": "80%",
                "id": "btnwire",
                "isVisible": true,
                "left": "170dp",
                "onClick": controller.AS_Button_dbc193feb0f545609b2b19499c2ef7a8,
                "skin": "btnTrans1",
                "text": "WIRE",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyImage0jeca641816c24f = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "CopyImage0jeca641816c24f",
                "isVisible": true,
                "onTouchEnd": controller.AS_Image_cb70417a9a2d41b1b651479a72dd4c1c,
                "right": "30dp",
                "skin": "slImage",
                "src": "down_arrow_icon.png",
                "top": "9dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0b7c155798cd34c.add(btncreditcard, btnwire, CopyImage0jeca641816c24f);
            FlexContainer0b7b0d407f9544c.add(FlexContainer0h6eacd971f0047, CopyFlexContainer0b7c155798cd34c);
            var FlxBlur = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 60
                },
                "clipBounds": true,
                "height": "100%",
                "id": "FlxBlur",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxBlur.setDefaultUnit(kony.flex.DP);
            var FlexContainer0i16a6cc2706b4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "FlexContainer0i16a6cc2706b4a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "flxSkin",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlexContainer0i16a6cc2706b4a.setDefaultUnit(kony.flex.DP);
            var Image0c6a2ebdcc8bd46 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "25dp",
                "id": "Image0c6a2ebdcc8bd46",
                "isVisible": true,
                "left": "10dp",
                "onTouchEnd": controller.AS_Image_h14beb642a1a4a93ac58e329e8e71892,
                "skin": "slImage",
                "src": "arrow_left_white_icon.png",
                "top": "25dp",
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
            FlexContainer0i16a6cc2706b4a.add(Image0c6a2ebdcc8bd46, Label0f721b2b4de584e);
            var FlexContainer0d34a8521156f46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-6dp",
                "clipBounds": true,
                "height": "50dp",
                "id": "FlexContainer0d34a8521156f46",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_a2b17c51de7c4e3ca5c4109bc2a73714,
                "skin": "flexgrey",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlexContainer0d34a8521156f46.setDefaultUnit(kony.flex.DP);
            var Label0c63925eddacc47 = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0c63925eddacc47",
                "isVisible": true,
                "left": "50dp",
                "skin": "CopydefLabel0f91ae16d547a40",
                "text": "SELECT MODE OF PAYMENT",
                "textStyle": {},
                "top": "7dp",
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
            var Image0j1e85d44442a46 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "Image0j1e85d44442a46",
                "isVisible": true,
                "right": "30dp",
                "skin": "slImage",
                "src": "up_arrow_icon.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0d34a8521156f46.add(Label0c63925eddacc47, Image0j1e85d44442a46);
            var Button0ee25da74c4c14a = new kony.ui.Button({
                "bottom": "8%",
                "focusSkin": "btnFloat",
                "height": "70dp",
                "id": "Button0ee25da74c4c14a",
                "isVisible": true,
                "onClick": controller.AS_Button_g6b780b964084a4982373efc75b53871,
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
            var Flxtop1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "240dp",
                "id": "Flxtop1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0g357313e457149",
                "top": "65dp",
                "width": "90%",
                "zIndex": 2
            }, {}, {});
            Flxtop1.setDefaultUnit(kony.flex.DP);
            var FlexContainer0a06fc547c4eb4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "FlexContainer0a06fc547c4eb4c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0a06fc547c4eb4c.setDefaultUnit(kony.flex.DP);
            var Image0e728839a0a264c = new kony.ui.Image2({
                "centerY": "50%",
                "height": "90%",
                "id": "Image0e728839a0a264c",
                "isVisible": true,
                "left": "10dp",
                "skin": "slImage",
                "src": "payee_icon.png",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0f043201d8f044b = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0f043201d8f044b",
                "isVisible": true,
                "left": "70dp",
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
            var Label0gad4efc078c442 = new kony.ui.Label({
                "bottom": "0dp",
                "height": "2px",
                "id": "Label0gad4efc078c442",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "lblLine",
                "textStyle": {},
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContainer0a06fc547c4eb4c.add(Image0e728839a0a264c, Label0f043201d8f044b, Label0gad4efc078c442);
            var FlexContainer0fcbddbb0784c42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "FlexContainer0fcbddbb0784c42",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "60dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0fcbddbb0784c42.setDefaultUnit(kony.flex.DP);
            var Label0j1750dd7a10f4a = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0j1750dd7a10f4a",
                "isVisible": true,
                "left": "10dp",
                "skin": "lblgreyFont",
                "text": "Amount",
                "textStyle": {},
                "top": "7dp",
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
            var Label0c9a4814db3a849 = new kony.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "Label0c9a4814db3a849",
                "isVisible": true,
                "left": "70dp",
                "skin": "lblLine",
                "text": "Label",
                "textStyle": {},
                "top": "0dp",
                "width": "2px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var Label0bc5eeb5a65644f = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0bc5eeb5a65644f",
                "isVisible": true,
                "left": "80dp",
                "skin": "lblskn",
                "text": "$ 1500",
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
            var Label0b9ab7e0c8e684c = new kony.ui.Label({
                "bottom": "0dp",
                "height": "2px",
                "id": "Label0b9ab7e0c8e684c",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "lblLine",
                "textStyle": {},
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            FlexContainer0fcbddbb0784c42.add(Label0j1750dd7a10f4a, Label0c9a4814db3a849, Label0bc5eeb5a65644f, Label0b9ab7e0c8e684c);
            var CopyFlexContainer0i69a24fe2d4b4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "CopyFlexContainer0i69a24fe2d4b4a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "110dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0i69a24fe2d4b4a.setDefaultUnit(kony.flex.DP);
            var CopyLabel0ga666d269cf94b = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0ga666d269cf94b",
                "isVisible": true,
                "left": "10dp",
                "skin": "lblgreyFont",
                "text": "Mode",
                "textStyle": {},
                "top": "7dp",
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
            var CopyLabel0daf551fff9d14b = new kony.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "CopyLabel0daf551fff9d14b",
                "isVisible": true,
                "left": "70dp",
                "skin": "lblLine",
                "text": "Label",
                "textStyle": {},
                "top": "0dp",
                "width": "2px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblCardnum = new kony.ui.Label({
                "centerY": "50.23%",
                "id": "lblCardnum",
                "isVisible": true,
                "left": "80dp",
                "onTouchEnd": controller.AS_Label_j775c0edb75f4709912785b640642f67,
                "skin": "lbltextTrans",
                "text": "Display selected credit card details",
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
            var CopyLabel0f3acd8d2ede242 = new kony.ui.Label({
                "bottom": "0dp",
                "height": "2px",
                "id": "CopyLabel0f3acd8d2ede242",
                "isVisible": true,
                "left": "10dp",
                "right": "10dp",
                "skin": "lblLine",
                "textStyle": {},
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var imgcard = new kony.ui.Image2({
                "centerY": "50%",
                "height": "90%",
                "id": "imgcard",
                "isVisible": false,
                "right": "20dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "8dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlexContainerblur = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": true,
                    "value": 35
                },
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "FlexContainerblur",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "80dp",
                "skin": "CopyslFbox",
                "top": "0dp",
                "width": "110dp",
                "zIndex": 10
            }, {}, {});
            FlexContainerblur.setDefaultUnit(kony.flex.DP);
            var lblBlur = new kony.ui.Label({
                "centerY": "50%",
                "height": "40dp",
                "id": "lblBlur",
                "isVisible": true,
                "left": "0dp",
                "skin": "lblskn",
                "text": "Label",
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
            FlexContainerblur.add(lblBlur);
            CopyFlexContainer0i69a24fe2d4b4a.add(CopyLabel0ga666d269cf94b, CopyLabel0daf551fff9d14b, lblCardnum, CopyLabel0f3acd8d2ede242, imgcard, FlexContainerblur);
            var FlexContainer0b91b8cb1d52b42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "FlexContainer0b91b8cb1d52b42",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "170dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0b91b8cb1d52b42.setDefaultUnit(kony.flex.DP);
            var Button0f01906146e524e = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "btntransgrey",
                "height": "40dp",
                "id": "Button0f01906146e524e",
                "isVisible": true,
                "left": "14dp",
                "onClick": controller.AS_Button_gae54c874ad94f1b91e9ed9b94e3edda,
                "skin": "btntransgrey",
                "text": "TRANSFER",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSuccess = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSuccess",
                "isVisible": false,
                "right": "20dp",
                "skin": "CopydefLabel0h8f8a8e86bb249",
                "text": "Transfer Successful !",
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
            FlexContainer0b91b8cb1d52b42.add(Button0f01906146e524e, lblSuccess);
            Flxtop1.add(FlexContainer0a06fc547c4eb4c, FlexContainer0fcbddbb0784c42, CopyFlexContainer0i69a24fe2d4b4a, FlexContainer0b91b8cb1d52b42);
            var Flxtop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "305dp",
                "id": "Flxtop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            Flxtop.setDefaultUnit(kony.flex.DP);
            Flxtop.add();
            FlxBlur.add(FlexContainer0i16a6cc2706b4a, FlexContainer0d34a8521156f46, Button0ee25da74c4c14a, Flxtop1, Flxtop);
            var FlxRating = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 60
                },
                "centerX": "50%",
                "clipBounds": true,
                "height": "250dp",
                "id": "FlxRating",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0g357313e457149",
                "top": "153dp",
                "width": "90%",
                "zIndex": 2
            }, {}, {});
            FlxRating.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "centerX": "50%",
                "height": "70dp",
                "id": "imgLogo",
                "isVisible": true,
                "skin": "slImage",
                "src": "payment_logo.png",
                "top": "15dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLine = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblLine",
                "isVisible": true,
                "skin": "lblLine",
                "textStyle": {},
                "top": "100dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var lblRatingNote = new kony.ui.Label({
                "centerX": "50%",
                "height": "60dp",
                "id": "lblRatingNote",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0j7f6ab42e8044a",
                "text": "Please share your experience by rating the app.",
                "textStyle": {},
                "top": "110dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            var FlexContainer0d949e12e6e4145 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "FlexContainer0d949e12e6e4145",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "175dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0d949e12e6e4145.setDefaultUnit(kony.flex.DP);
            var btnRate = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "btnornagrbdr",
                "height": "45dp",
                "id": "btnRate",
                "isVisible": true,
                "left": "45dp",
                "onClick": controller.AS_Button_a4a1a0fecf7e4f7db7d4069b5ad0489b,
                "skin": "btnornagrbdr",
                "text": "RATE NOW",
                "top": "164dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancel = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "btnornagrbdr",
                "height": "45dp",
                "id": "btnCancel",
                "isVisible": true,
                "left": "20dp",
                "onClick": controller.AS_Button_e9bcc61b669642f59f94aa763e09c2d2,
                "skin": "btnornagrbdr",
                "text": "CANCEL",
                "top": "164dp",
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0d949e12e6e4145.add(btnRate, btnCancel);
            FlxRating.add(imgLogo, lblLine, lblRatingNote, FlexContainer0d949e12e6e4145);
            this.add(FlexContainer0b7b0d407f9544c, FlxBlur, FlxRating);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_a656c6ee63514e7a867548df6406fde4,
            "skin": "CopyslForm0fd0222421de34f"
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