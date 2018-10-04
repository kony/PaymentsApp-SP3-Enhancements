define("flxCard", function() {
    return function(controller) {
        var flxCard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "blur": {
                "enabled": false,
                "value": 0
            },
            "clipBounds": true,
            "height": "60dp",
            "id": "flxCard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "flxcardskn",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCard.setDefaultUnit(kony.flex.DP);
        var FlexContainer0c391ab83a4464a = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "FlexContainer0c391ab83a4464a",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        FlexContainer0c391ab83a4464a.setDefaultUnit(kony.flex.DP);
        var Image0f63afa6213274a = new kony.ui.Image2({
            "centerY": "50%",
            "height": "40dp",
            "id": "Image0f63afa6213274a",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "credite_card_icon_02.png",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var txtfldCardname = new kony.ui.Label({
            "centerY": "50%",
            "height": "40dp",
            "id": "txtfldCardname",
            "isVisible": true,
            "left": "50dp",
            "skin": "CopyslLabel0ba6b69a9f0d24d",
            "text": "Label",
            "textStyle": {},
            "top": "10dp",
            "width": "200dp",
            "zIndex": 8
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var imgselect = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgselect",
            "isVisible": true,
            "left": "84%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "30dp",
            "zIndex": 10
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0c391ab83a4464a.add(Image0f63afa6213274a, txtfldCardname, imgselect);
        var CopyFlexContainer0f9e216b7321345 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "CopyFlexContainer0f9e216b7321345",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "60dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        CopyFlexContainer0f9e216b7321345.setDefaultUnit(kony.flex.DP);
        var lcardnum = new kony.ui.Label({
            "centerY": "50%",
            "id": "lcardnum",
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
        var lminus2 = new kony.ui.Label({
            "centerY": "50%",
            "id": "lminus2",
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
        var txtFldCardNumber = new kony.ui.Label({
            "centerY": "50%",
            "height": "40dp",
            "id": "txtFldCardNumber",
            "isVisible": true,
            "left": "230dp",
            "skin": "lblskn",
            "text": "Label",
            "textStyle": {},
            "width": "100dp",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
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
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "110dp",
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
        CopyFlexContainer0f9e216b7321345.add(lcardnum, lminus2, CopyLabel0i1c07199181f44, txtFldCardNumber, FlexContainerblur);
        var CopyFlexContainer0dd9ec95bca8147 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "CopyFlexContainer0dd9ec95bca8147",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "110dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        CopyFlexContainer0dd9ec95bca8147.setDefaultUnit(kony.flex.DP);
        var lexpire = new kony.ui.Label({
            "centerY": "50%",
            "id": "lexpire",
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
        var lminus = new kony.ui.Label({
            "centerY": "50%",
            "id": "lminus",
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
        var txtFldDate = new kony.ui.Label({
            "centerY": "50%",
            "height": "40dp",
            "id": "txtFldDate",
            "isVisible": true,
            "left": "110dp",
            "skin": "lblskn",
            "text": "Label",
            "textStyle": {},
            "top": "123dp",
            "width": "110dp",
            "zIndex": 9
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        CopyFlexContainer0dd9ec95bca8147.add(lexpire, lminus, CopyLabel0a9b5705f0c7d44, txtFldDate);
        flxCard.add(FlexContainer0c391ab83a4464a, CopyFlexContainer0f9e216b7321345, CopyFlexContainer0dd9ec95bca8147);
        return flxCard;
    }
})