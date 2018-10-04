define(function() {
    return function(controller) {
        var animatedtextfield = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "isMaster": true,
            "height": "10%",
            "id": "animatedtextfield",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyCopyCopysknFlxFFFFFFBG",
            "top": "40%",
            "width": "90%"
        }, {}, {});
        animatedtextfield.setDefaultUnit(kony.flex.DP);
        var flxTextBox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTextBox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyCopyCopysknFlxTextBoxComponentFFFFFFBG",
            "top": "0%",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxTextBox.setDefaultUnit(kony.flex.DP);
        var txtBoxComponent = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "height": "100%",
            "id": "txtBoxComponent",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "maxTextLength": null,
            "onDone": controller.AS_TextField_bd12b2785425422daec71bc2722ef1c1,
            "onTextChange": controller.AS_textBoxTextChange_e73a79dd40794954974a1bf0e1dacc04,
            "secureTextEntry": false,
            "skin": "CopyCopyCopysknTextBoxComponent2",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 10, 0, 0],
            "paddingInPixel": false
        }, {
            "autoComplete": false,
            "autoCorrect": false
        });
        var lblUnderline = new kony.ui.Label({
            "bottom": "0%",
            "height": "3%",
            "id": "lblUnderline",
            "isVisible": true,
            "left": "0%",
            "skin": "CopyCopyCopysknTextBoxComponent1",
            "textStyle": {},
            "width": "100%",
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblPlaceholder = new kony.ui.Label({
            "height": "100%",
            "id": "lblPlaceholder",
            "isVisible": true,
            "left": "0%",
            "onTouchStart": controller.AS_Label_acc0d2ac01dc4f8191d968f89d24d7f6,
            "skin": "CopyCopyCopysknTextBoxComponent",
            "text": "Username",
            "textStyle": {},
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 10, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblPlaceholderFocusSkin = new kony.ui.Label({
            "id": "lblPlaceholderFocusSkin",
            "isVisible": false,
            "left": "37dp",
            "skin": "CopyCopyCopysknPlaceholderAnimated",
            "text": "Label",
            "textStyle": {},
            "top": "319dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        var lblUnderlineFocusSkin = new kony.ui.Label({
            "id": "lblUnderlineFocusSkin",
            "isVisible": false,
            "left": "30dp",
            "skin": "CopyCopyCopysknUnderlineAnimated",
            "text": "Label",
            "textStyle": {},
            "top": "353dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 10
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        flxTextBox.add(txtBoxComponent, lblUnderline, lblPlaceholder, lblPlaceholderFocusSkin, lblUnderlineFocusSkin);
        animatedtextfield.add(flxTextBox);
        return animatedtextfield;
    }
})