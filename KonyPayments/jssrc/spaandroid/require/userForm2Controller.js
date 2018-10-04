define({
    //Type your controller code here 
    btnCreditcardclick: function() {
        this.view.btncreditcard.skin = "btnskn3";
        this.view.btnwire.skin = "btnTrans1";
        this.view.flxwire.isVisible = false;
        this.view.SegCards.isVisible = true;
        this.view.FlexContainer0jae3ac79161e4a.isVisible = true;
    },
    btnWireClick: function() {
        this.view.btnwire.skin = "btnskn3";
        this.view.btncreditcard.skin = "btnTrans1";
        this.view.flxwire.isVisible = true;
        this.view.SegCards.isVisible = false;
        this.view.FlexContainer0jae3ac79161e4a.isVisible = false;
    },
    imgDownCLick: function(event) {},
    btnSaveClick: function(event) {
        this.keyChnSave();
        this.keyChnRetrieve();
        this.addClearData();
        this.view.flxCreditCard.isVisible = false;
        this.view.SegCards.isVisible = true;
        this.view.btnSave.isVisible = false;
        this.view.imgPlus.isVisible = true;
    },
    andridpay: function() {},
    applepay1: function() {}
});