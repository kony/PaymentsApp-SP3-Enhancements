define({
    //Type your controller code here 
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
                "height": "70dp",
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
                        /*"stepConfig": {
                            "timingFunction": kony.anim.EASE_OUT
                        }*/
                },
                100: {
                    "height": "70dp"
                        /* "stepConfig": {
                             "timingFunction": kony.anim.EASE_OUT
                         }*/
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
    /**
     * @function
     *
     */
    changeData: function() {
        if (this.prevrow !== null && this.prevrow != this.view.SegContacts.selectedRowIndex[1] && this.collapsedState === false) {
            this.animateRowsContract();
            this.collapsedState = true;
        }
        this.prevrow = this.view.SegContacts.selectedRowIndex[1];
        this.collapsedState = false;
        //      // this.view.SegContacts.selectedIndex = [0,this.view.SegContacts.selectedIndex[1]];
        //         //alert(JSON.stringify(data1));
        //         if(this.prevrow!==null && this.collapsedState===false){
        //             this.animateRowsContract();
        //         }
        //         this.prevrow = this.view.SegContacts.selectedRowIndex[1];
        // 	//this.view.SegContacts.rowSkin="segorngaeborder";
        //         // this.view.segBeneficiaries.setDataAt({lblName:"Evan",lblAmount: "$5000",lblAccountNumber:"1231341413343413413",lblEmailId:"sjdfknsncskj",lblNumber:"1234542",template:this.view.flxBeneficiariesExpanded},this.view.segBeneficiaries.selectedIndex[1] , 0) ; 
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