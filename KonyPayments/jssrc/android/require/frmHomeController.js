define('userfrmHomeController',{
    data: [{
        "imgContact": "payee_icon.png",
        "lbNumber": "- +91 9959014567",
        "lblAddress": "- Chicago",
        "lblEmail": "- smith@kony.com",
        "lblName": "Smith",
        "lmobile": "Mobile",
        "lEmail": "Email",
        "lPlace": "Place",
        "btnPayee": "Pay",
        "flxContacts": {}
    }, {
        "imgContact": "payee_icon.png",
        "lbNumber": "- +91 9177568456",
        "lblAddress": "- Austin",
        "lblEmail": "- rosella@kony.com",
        "lblName": "Rosella",
        "lmobile": "Mobile",
        "lEmail": "Email",
        "lPlace": "Place",
        "btnPayee": "Pay",
        "flxContacts": {}
    }, {
        "imgContact": "payee_icon.png",
        "lbNumber": "- +91 9867456734",
        "lblAddress": "- Orlando",
        "lblEmail": "- hung@kony.com",
        "lblName": "Mc Hung",
        "lmobile": "Mobile",
        "lEmail": "Email",
        "lPlace": "Place",
        "btnPayee": "Pay",
        "flxContacts": {}
    }, {
        "imgContact": "payee_icon.png",
        "lbNumber": "- +91 9977654321",
        "lblAddress": "- New York",
        "lblEmail": "- elena@kony.com",
        "lblName": "Elena Riddles",
        "lmobile": "Mobile",
        "lEmail": "Email",
        "lPlace": "Place",
        "btnPayee": "Pay",
        "flxContacts": {}
    }],
    prevrow: null,
    collapsedState: true,
    finalAnimation1: "",
    finalAnimation2: "",
    onNavigate: function() {},
    animateRows: function animateRows() {
        var section = 0;
        var row = 0;
        var contextDef = [{
            sectionIndex: this.view.SegContacts.selectedIndex[0],
            rowIndex: this.view.SegContacts.selectedIndex[1]
        }];
        var animDefinitionOne = {
            0: {
                "height": "68dp",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE_OUT
                }
            },
            100: {
                "height": "170dp",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE_OUT
                }
            }
        };
        var animDefinition = kony.ui.createAnimation(animDefinitionOne);
        var animConfig = {
            "duration": 0.5,
            "iterationCount": 1,
            "delay": 0,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "direction": kony.anim.DIRECTION_NONE
        };
        var finalAnimation = {
            definition: animDefinition,
            config: animConfig,
            callbacks: this.changeData()
        };
        this.view.SegContacts.animateRows({
            context: contextDef,
            // widgets: [],
            animation: finalAnimation
        });
    },
    animateRowsContract: function animateRows() {
        try {
            var sectionIndex = 0;
            if (!this.prevrow) this.prevrow = 0;
            var rowIndex = 0;
            var contextDef = [{
                sectionIndex: sectionIndex,
                rowIndex: this.prevrow
            }];
            var animDefinitionOne = {
                0: {
                    "height": "170dp"
                },
                100: {
                    "height": "68dp"
                }
            };
            var animDefinition = kony.ui.createAnimation(animDefinitionOne);
            var animConfig = {
                "duration": 0.5,
                "iterationCount": 1,
                "delay": 0,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "direction": kony.anim.DIRECTION_NONE
            };
            var finalAnimation = {
                definition: animDefinition,
                config: animConfig
            };
            this.view.SegContacts.animateRows({
                context: contextDef,
                // widgets: ["flxContacts"],
                // widgets: [],
                animation: finalAnimation
            });
        } catch (err) {
            alert(err);
        }
    },
    changeData: function() {
        if (this.prevrow !== null && this.prevrow != this.view.SegContacts.selectedRowIndex[1] && this.collapsedState === false) {
            this.animateRowsContract();
            this.collapsedState = true;
        }
        this.prevrow = this.view.SegContacts.selectedRowIndex[1];
        this.collapsedState = false;
    },
    contactSelected: function() {
        if (this.prevrow != this.view.SegContacts.selectedRowIndex[1]) {
            this.animateRows();
            this.collapsedState = false;
        } else {
            if (this.collapsedState) {
                this.animateRows();
            } else {
                this.animateRowsContract();
                this.collapsedState = true;
            }
        }
    },
    navToPayForm: function(context, cnt2) {
        var data = this.view.SegContacts.data[cnt2.rowIndex];
        var navObj = new kony.mvc.Navigation("Form1");
        navObj.navigate(data.lblName);
    }
});
define('frmHomeControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for SegContacts **/
    AS_Segment_dd6c1e7494554a52ac15f2243efb7d1a: function AS_Segment_dd6c1e7494554a52ac15f2243efb7d1a(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.contactSelected();
        // if(this.prevrow!=this.view.SegContacts.selectedRowIndex[1]){
        //   this.animateRows();
        //   this.prevrow=this.view.SegContacts.selectedRowIndex[1];
        //   /*
        //    var rowIndex = this.view.SegContacts.selectedRowIndex[1];
        //    var data1 = this.view.SegContacts.selectedRowItems[0];
        //    data1.flxContacts = {"skin" : "CopyslFbox0g357313e457149"};
        //    data1.btnPayee = {"skin":"btnskn","text":"Pay"};
        //    this.view.SegContacts.setDataAt(data1, rowIndex,0,this.finalAnimation1);
        //    this.view.SegContacts.selectedRowIndex = [0,rowIndex];*/
        //    this.collapsedState = false;
        // }else{
        //   if(this.collapsedState){
        //   this.animateRows();
        //     this.prevrow=this.view.SegContacts.selectedRowIndex[1];
        //     /*
        //    var rowIndex = this.view.SegContacts.selectedRowIndex[1];
        //    var data1 = this.view.SegContacts.selectedRowItems[0];
        //    data1.flxContacts = {"skin" : "flxorangeborder"};
        //    data1.btnPayee = {"skin":"btnskn","text":"Pay"};
        //    this.view.SegContacts.setDataAt(data1, rowIndex,0,this.finalAnimation1);*/
        //   }else{
        //     if(this.prevrow!==null && this.collapsedState===false){
        //   this.animateRows();
        //   // var rowIndex = this.view.SegContacts.selectedRowIndex[1];
        //   /* var data1 = this.view.SegContacts.data[this.prevrow];
        //    data1.flxContacts = {"skin" : "flxorangeborder"};
        //    data1.btnPayee = {"skin":"btnskn","text":"Pay"};
        //    this.view.SegContacts.setDataAt(data1, this.prevrow,0,this.finalAnimation2);*/
        //     }	
        //   }
        //   this.collapsedState = !this.collapsedState;
        // }
    },
    /** onClick defined for Button0ee25da74c4c14a **/
    AS_Button_b581e9fd1d8e4886a178cc7b4c515446: function AS_Button_b581e9fd1d8e4886a178cc7b4c515446(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    },
    /** postShow defined for frmHome **/
    AS_Form_gc83d28d2ff740d29606b08d84b0a9ab: function AS_Form_gc83d28d2ff740d29606b08d84b0a9ab(eventobject) {
        var self = this;
        this.view.SegContacts.setData(this.data);
        this.collapsedState = true;
    }
});



define('frmHomeController',["userfrmHomeController","frmHomeControllerActions"],
		function(){
			var controller = require("userfrmHomeController");
			var controllerActions = ["frmHomeControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});
