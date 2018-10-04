define('com/konycmpt/KnowledgeFramework/userKnowledgeFrameworkController',[],function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {},
        previosAcc: null,
        isClosed: false,
        resetData: null,
        setData: function(data) {
            this.resetData = data;
            this.view.lblHeading.text = "Behind The Scene";
            this.view.sgmtAPI.removeAll();
            this.view.sgmtAPI.isVisible = true;
            this.view.sgmtAPI.widgetDataMap = {
                lblNameOfAPI: "APIName"
            };
            this.view.sgmtAPI.setData(data);
            //this.view.forceLayout();
        },
        onRowClick: function() {
            this.showAccord("flexAcc1");
            var data = this.view.sgmtAPI.selectedRowItems[0];
            this.animateDescriptionScreen(0, data.APIName, this.setUIAfterAnimation);
            this.populateData(data);
            this.view.forceLayout();
        },
        setUIAfterAnimation: function(left, headerText) {
            if (left === 100) {
                this.view.flexClickBack.setVisibility(false);
                this.view.lblHeading.text = "Behind The Scene";
            } else {
                this.view.flexClickBack.setVisibility(true);
                this.view.lblHeading.text = headerText;
            }
            if (this.isClosed) {
                this.navigateToPreviousScreen();
                this.isClosed = false;
            }
        },
        animateDescriptionScreen: function(left, headerText, callbackFunction) {
            var controllerScope = this;
            controllerScope.view.flxFullScreen.animate(kony.ui.createAnimation({
                100: {
                    left: left + "%",
                    "stepConfig": {}
                }
            }), {
                delay: 0,
                fillMode: kony.anim.FILL_MODE_FORWARDS,
                duration: 0.1
            }, {
                animationEnd: function() {
                    if (left === 0) {
                        controllerScope.view.flexClickBack.setVisibility(true);
                        controllerScope.view.lblHeading.text = headerText;
                    } else {
                        controllerScope.view.flexClickBack.setVisibility(false);
                        controllerScope.view.lblHeading.text = "Behind The Scenes";
                    }
                }
            });
        },
        populateData: function(data) {
            this.view.rchDesc1.text = data.Description;
            this.view.rchDesc2.text = data.CodeSnippet;
            this.view.rchDesc3.text = data.DocLink;
        },
        showAccord: function(id) {
            id = id.split("flexAcc")[1];
            if (this.previosAcc !== null && this.previosAcc !== id) {
                this.view["btnAccordian" + this.previosAcc].src = "chevron.png";
                this.view["lblAccordian" + this.previosAcc].skin = "sknLabelKnowledgeUnselected";
                this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["lblAccordian" + id].skin = "sknLabelKnowledgeSelected";
                this.view["flexScrollDesc" + this.previosAcc].isVisible = false;
                this.view["flexScrollDesc" + id].isVisible = true;
                this.previosAcc = id;
            } else if (this.previosAcc == id) {
                if (this.view["btnAccordian" + id].src == "chevrondown.png") {
                    this.view["btnAccordian" + this.previosAcc].src = "chevrondown.png";
                    this.view["lblAccordian" + this.previosAcc].skin = "sknLabelKnowledgeSelected";
                    this.view["btnAccordian" + id].src = "chevron.png";
                    this.view["lblAccordian" + id].skin = "sknLabelKnowledgeUnselected";
                    this.view["flexScrollDesc" + this.previosAcc].isVisible = true;
                    this.view["flexScrollDesc" + id].isVisible = false;
                    this.previosAcc = id;
                } else {
                    this.view["btnAccordian" + this.previosAcc].src = "chevron.png";
                    this.view["lblAccordian" + this.previosAcc].skin = "sknLabelKnowledgeUnselected";
                    this.view["btnAccordian" + id].src = "chevrondown.png";
                    this.view["lblAccordian" + id].skin = "sknLabelKnowledgeSelected";
                    this.view["flexScrollDesc" + this.previosAcc].isVisible = false;
                    this.view["flexScrollDesc" + id].isVisible = true;
                    this.previosAcc = id;
                }
            } else {
                this.view["btnAccordian" + id].src = "chevrondown.png";
                this.view["lblAccordian" + id].skin = "sknLabelKnowledgeSelected";
                this.view["flexScrollDesc" + id].isVisible = true;
                this.previosAcc = id;
            }
        },
        closeWhenDone: function() {
            this.isClosed = true;
            this.animateDescriptionScreen(100, "Behind The Scene", this.setUIAfterAnimation);
            this.setUIAfterAnimation(100, "Behind The Scene");
        },
        navigateToPreviousScreen: function() {
            var prevForm = kony.application.getPreviousForm();
            var navObj = new kony.mvc.Navigation(prevForm.id);
            navObj.navigate();
        },
        onClickBack: function() {
            this.resetDescScreen();
            //this.setData(this.resetData);
            this.animateDescriptionScreen(100, "Behind The Scene", this.setUIAfterAnimation);
        },
        resetDescScreen: function() {
            for (i = 1; i <= 3; i++) {
                this.view["btnAccordian" + i].src = "chevron.png";
                this.view["lblAccordian" + i].skin = "sknLabelKnowledgeUnselected";
                this.view["flexScrollDesc" + i].isVisible = false;
            }
        },
        //         onLinkClick: function() {
        //             kony.application.openURL(this.view.sgmtAPI.selectedItems[0].link);
        //         },
        openEmail: function() {
            try {
                var to = [""];
                var sub = "Code Snippet - " + this.view.lblHeading.text;
                var msg = this.view.rchDesc2.text;
                var msg1 = msg.replace(/#f2f1f1/g, "#000000");
                var msgbody = msg1.replace(/#ffffff/g, "#000000");
                // alert(msgbody);
                kony.phone.openEmail(to, [""], [""], sub, msgbody, true, []);
            } catch (err) {
                alert("error in opening Email:: " + err);
            }
        }
    };
});
define('com/konycmpt/KnowledgeFramework/KnowledgeFrameworkControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flexCloseClick **/
    AS_FlexContainer_jf582ae16db246a8aa7078364c207959: function AS_FlexContainer_jf582ae16db246a8aa7078364c207959(eventobject) {
        var self = this;
        this.closeWhenDone();
    },
    /** onClick defined for flexClickBack **/
    AS_FlexContainer_eb36dc9d1d454a4db5a8ee39a0e85b9b: function AS_FlexContainer_eb36dc9d1d454a4db5a8ee39a0e85b9b(eventobject) {
        var self = this;
        this.onClickBack();
    },
    /** onRowClick defined for sgmtAPI **/
    AS_Segment_d3e09723a5254b45ac9431b7e4bdbb06: function AS_Segment_d3e09723a5254b45ac9431b7e4bdbb06(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onRowClick();
    },
    /** onClick defined for flexAcc1 **/
    AS_FlexContainer_e007ca5e942e474fa13735d61e8be717: function AS_FlexContainer_e007ca5e942e474fa13735d61e8be717(eventobject) {
        var self = this;
        // if(this.view.rchTextDesc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    /** onTouchEnd defined for imgMail **/
    AS_Image_a32f3e4fe6334b9eb98a36d0783f1737: function AS_Image_a32f3e4fe6334b9eb98a36d0783f1737(eventobject, x, y) {
        var self = this;
        this.openEmail();
    },
    /** onClick defined for btnMail **/
    AS_Button_gf7b5906cd7b4969b87f4c81564efed9: function AS_Button_gf7b5906cd7b4969b87f4c81564efed9(eventobject) {
        var self = this;
        this.openEmail();
    },
    /** onClick defined for flexAcc2 **/
    AS_FlexContainer_c048300a3ec34ffd93bc4493926ec85e: function AS_FlexContainer_c048300a3ec34ffd93bc4493926ec85e(eventobject) {
        var self = this;
        // if(this.view.lblCodeSnippet.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    },
    /** onClick defined for flexAcc3 **/
    AS_FlexContainer_abbbd3c02ea345acae74375d13194554: function AS_FlexContainer_abbbd3c02ea345acae74375d13194554(eventobject) {
        var self = this;
        // if(this.view.rchtextDoc.isVisible === true)
        //   this.onClickDisappear(eventobject);
        // else
        //   this.onClickDisplay(eventobject);
        this.showAccord(eventobject.id);
    }
});
define('com/konycmpt/KnowledgeFramework/KnowledgeFrameworkController',["com/konycmpt/KnowledgeFramework/userKnowledgeFrameworkController", "com/konycmpt/KnowledgeFramework/KnowledgeFrameworkControllerActions"], function() {
    var controller = require("com/konycmpt/KnowledgeFramework/userKnowledgeFrameworkController");
    var actions = require("com/konycmpt/KnowledgeFramework/KnowledgeFrameworkControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
