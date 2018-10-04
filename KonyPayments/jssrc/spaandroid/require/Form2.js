define("Form2", function() {
    return function(controller) {
        function addWidgetsForm2() {
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
                "top": "0%",
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
                "onClick": controller.AS_FlexContainer_f78bf2a7c6be4da7840bff76d560db88,
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
                "onClick": controller.AS_Button_ed609403fb0248fca0536fc171f28116,
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
                "onRowClick": controller.AS_Segment_i4e24f852fc040c79a0820bf28f641e2,
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
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "FlexContainer0b6f90c1384ba42",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_a69658f9b6f543dd9ef2fbc4bc7e7114,
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
                "onClick": controller.AS_FlexContainer_b05f28a227104114981c61dde719e6f2,
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
                "onClick": controller.AS_Button_gaf43eb27f354e229090e432f2152d0e,
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
                "onClick": controller.AS_Button_aa4fcd8409fb416f9828a21597083445,
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
            this.add(FlexContainer0b7b0d407f9544c);
        };
        return [{
            "addWidgets": addWidgetsForm2,
            "enabledForIdleTimeout": false,
            "id": "Form2",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
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