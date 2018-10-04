define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSave **/
    AS_Button_fe707d42faa34d21b308e753a91dbce8: function AS_Button_fe707d42faa34d21b308e753a91dbce8(eventobject) {
        var self = this;
        this.btnSaveClick();
    },
    /** onClick defined for FlexContainer0fc9a547e1cda40 **/
    AS_FlexContainer_h21f8de12a7f494d83ac1fa7d37acf4c: function AS_FlexContainer_h21f8de12a7f494d83ac1fa7d37acf4c(eventobject) {
        var self = this;
        this.addCard();
    },
    /** onRowClick defined for SegCards **/
    AS_Segment_d9695979d6ce4b14b1e54d2a7481939d: function AS_Segment_d9695979d6ce4b14b1e54d2a7481939d(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.contactSelected();
    },
    /** onClick defined for FlexContainer0b6f90c1384ba42 **/
    AS_FlexContainer_e9b04d36791049f1b9cdefbba0110a39: function AS_FlexContainer_e9b04d36791049f1b9cdefbba0110a39(eventobject) {
        var self = this;
        //#ifdef android
        this.getPayments();
        //#endif
    },
    /** onClick defined for CopyFlexContainer0f5b73af9897b4d **/
    AS_FlexContainer_ef7d90f4e60d4c5bb0236b1843d7d6b6: function AS_FlexContainer_ef7d90f4e60d4c5bb0236b1843d7d6b6(eventobject) {
        var self = this;
        //#ifdef iphone
        this.paymentApplepay();
        //#endif
    },
    /** onClick defined for btncreditcard **/
    AS_Button_iaee813e09ad41c78fe7ab727eb0550c: function AS_Button_iaee813e09ad41c78fe7ab727eb0550c(eventobject) {
        var self = this;
        this.btnCreditcardclick();
    },
    /** onClick defined for btnwire **/
    AS_Button_dbc193feb0f545609b2b19499c2ef7a8: function AS_Button_dbc193feb0f545609b2b19499c2ef7a8(eventobject) {
        var self = this;
        this.btnWireClick();
    },
    /** onTouchEnd defined for CopyImage0jeca641816c24f **/
    AS_Image_gb7427189a374f27b7f51e838aca6e27: function AS_Image_gb7427189a374f27b7f51e838aca6e27(eventobject, x, y) {
        var self = this;
        this.imgDownCLick();
    },
    /** onTouchEnd defined for Image0c6a2ebdcc8bd46 **/
    AS_Image_h14beb642a1a4a93ac58e329e8e71892: function AS_Image_h14beb642a1a4a93ac58e329e8e71892(eventobject, x, y) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmHome");
        ntf.navigate();
    },
    /** onClick defined for FlexContainer0d34a8521156f46 **/
    AS_FlexContainer_a2b17c51de7c4e3ca5c4109bc2a73714: function AS_FlexContainer_a2b17c51de7c4e3ca5c4109bc2a73714(eventobject) {
        var self = this;
        this.flxBottomclick();
    },
    /** onClick defined for Button0ee25da74c4c14a **/
    AS_Button_g6b780b964084a4982373efc75b53871: function AS_Button_g6b780b964084a4982373efc75b53871(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmKnowledgeFramework");
        ntf.navigate();
    },
    /** onTouchEnd defined for lblCardnum **/
    AS_Label_j775c0edb75f4709912785b640642f67: function AS_Label_j775c0edb75f4709912785b640642f67(eventobject, x, y) {
        var self = this;
        this.flxBottomclick();
    },
    /** onClick defined for Button0f01906146e524e **/
    AS_Button_gae54c874ad94f1b91e9ed9b94e3edda: function AS_Button_gae54c874ad94f1b91e9ed9b94e3edda(eventobject) {
        var self = this;
        if (this.view.Button0f01906146e524e.skin == "btnornagrbdr") {
            //#ifdef android
            this.checkWifiConnectivity();
            //#endif
            //#ifdef iphone
            this.view.lblSuccess.isVisible = true;
            kony.timer.schedule("mytimer", this.timerFunc, 0.5, false);
            //#endif
            return;
        } else {}
    },
    /** onClick defined for btnRate **/
    AS_Button_a4a1a0fecf7e4f7db7d4069b5ad0489b: function AS_Button_a4a1a0fecf7e4f7db7d4069b5ad0489b(eventobject) {
        var self = this;
        this.ratingFunc();
    },
    /** onClick defined for btnCancel **/
    AS_Button_e9bcc61b669642f59f94aa763e09c2d2: function AS_Button_e9bcc61b669642f59f94aa763e09c2d2(eventobject) {
        var self = this;
        this.view.FlxRating.isVisible = false;
        this.view.FlexContainer0d34a8521156f46.onClick = this.flxBottomclick;
        this.view.FlxBlur.blur = {
            "enabled": false,
            "value": 60
        };
    },
    /** postShow defined for Form1 **/
    AS_Form_a656c6ee63514e7a867548df6406fde4: function AS_Form_a656c6ee63514e7a867548df6406fde4(eventobject) {
        var self = this;
        this.formClearData();
        //#ifdef android
        this.showNewBottomSheet();
        //#endif
        //#ifdef iphone
        this.readCardNumbers();
        this.keyChnRetrieve();
        this.registerActions();
        //#endif
    }
});