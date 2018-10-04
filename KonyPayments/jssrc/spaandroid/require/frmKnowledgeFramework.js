define("frmKnowledgeFramework", function() {
    return function(controller) {
        function addWidgetsfrmKnowledgeFramework() {
            this.setDefaultUnit(kony.flex.DP);
            var KnowledgeFramework = new com.konycmpt.KnowledgeFramework({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "KnowledgeFramework",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox3",
                "top": "0%",
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            this.add(KnowledgeFramework);
        };
        return [{
            "addWidgets": addWidgetsfrmKnowledgeFramework,
            "enabledForIdleTimeout": false,
            "id": "frmKnowledgeFramework",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_ffeb2b471a254051851f3d30816428fd,
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