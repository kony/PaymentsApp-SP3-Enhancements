//Type your code here
mBottomSheetObject = null;
selectedCardData = null;

function deviceSettingCallback(params) {
    if (params.wifi_current_state.toString() === "1") {
        var toast1 = new kony.ui.Toast({
            "text": "Wifi Disabled",
            "duration": constants.SHORT
        });
        toast1.show();
    } else if (params.wifi_current_state.toString() === "3") {
        var toast2 = new kony.ui.Toast({
            "text": "Wifi Enabled",
            "duration": constants.SHORT
        });
        toast2.show();
    }
}