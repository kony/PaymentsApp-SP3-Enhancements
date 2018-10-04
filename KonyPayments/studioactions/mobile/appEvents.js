define({
    AS_AppEvents_h33e2953ae484458a14b2fb23ecc383e: function AS_AppEvents_h33e2953ae484458a14b2fb23ecc383e(eventobject) {
        var self = this;
        //#ifdef android
        kony.application.registerOnSettingsChangeCallback(["wifi"], deviceSettingCallback);
        //#endif
    }
});