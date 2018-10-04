define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konycmpt.KnowledgeFramework", "KnowledgeFramework", "KnowledgeFrameworkController");
        kony.application.registerMaster({
            "namespace": "com.konycmpt",
            "classname": "KnowledgeFramework",
            "name": "com.konycmpt.KnowledgeFramework"
        });
        kony.mvc.registry.add("com.konycmpt.SplashScreen", "SplashScreen", "SplashScreenController");
        kony.application.registerMaster({
            "namespace": "com.konycmpt",
            "classname": "SplashScreen",
            "name": "com.konycmpt.SplashScreen"
        });
        kony.mvc.registry.add("com.konymp.animatedtextfield", "animatedtextfield", "animatedtextfieldController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "animatedtextfield",
            "name": "com.konymp.animatedtextfield"
        });
        kony.mvc.registry.add("com.konymp.tabstextbutton", "tabstextbutton", "tabstextbuttonController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "tabstextbutton",
            "name": "com.konymp.tabstextbutton"
        });
        kony.mvc.registry.add("flxFullSplashScreen", "flxFullSplashScreen", "flxFullSplashScreenController");
        kony.mvc.registry.add("flnxbottomsheet", "flnxbottomsheet", "flnxbottomsheetController");
        kony.mvc.registry.add("flxCard", "flxCard", "flxCardController");
        kony.mvc.registry.add("flxContacts", "flxContacts", "flxContactsController");
        kony.mvc.registry.add("flexAPIs", "flexAPIs", "flexAPIsController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        kony.mvc.registry.add("Form2", "Form2", "Form2Controller");
        kony.mvc.registry.add("frmHome", "frmHome", "frmHomeController");
        kony.mvc.registry.add("frmKnowledgeFramework", "frmKnowledgeFramework", "frmKnowledgeFrameworkController");
        kony.mvc.registry.add("frmSplash", "frmSplash", "frmSplashController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmSplash").navigate();
    }
});