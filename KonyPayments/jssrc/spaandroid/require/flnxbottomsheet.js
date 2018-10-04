define("flnxbottomsheet", function() {
    return function(controller) {
        var flnxbottomsheet = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60%",
            "id": "flnxbottomsheet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0g9a108d0285347",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flnxbottomsheet.setDefaultUnit(kony.flex.DP);
        flnxbottomsheet.add();
        return flnxbottomsheet;
    }
})