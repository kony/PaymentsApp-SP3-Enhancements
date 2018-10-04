define('userForm1Controller',{
    cardslength: 0,
    prevrow: null,
    cardNameCheck: null,
    collapsedState: true,
    getPaymentDataSuccessCallback: function(result) {
        alert("googleTransactionID : " + result.googleTransactionID);
        alert("paymentToken : " + result.paymentToken);
    },
    getPaymentDataErrorCallback: function(statusCode) {
        alert(statusCode);
    },
    getPayments: function() {
        var paymentCardsInfo = {
            "paymentCardNetworks": [kony.payment.NETWORK_VISA],
            "paymentMethodType": [kony.payment.METHODTYPE_PREPAID, kony.payment.METHODTYPE_ANDROIDPAY, kony.payment.METHODTYPE_GOOGLE]
        };
        var shippingAddressInfo = {
            "name": true,
            "postalAddress": true,
            "email": true,
            "phoneNumber": true,
            "allowedShippingCountryCodes": ["US", "CA"]
        };
        var billingAddressInfo = {
            "name": true,
            "postalAddress": "true",
            "email": true,
            "phoneNumber": true,
            "billingAddressFormat ": kony.payment.BILLING_ADDRESS_FORMAT_FULL
        };
        var merchantInfo = {
            "merchantName": "stripe",
            "merchantID": "pk_test_DCYXN0nOheeRbbf4KlNdUB9I",
            "additionalParameters": {
                "stripe:publishableKey": "pk_test_DCYXN0nOheeRbbf4KlNdUB9I",
                "stripe:version": "5.1.0"
            }
        };
        var paymentSummary = {
            "currencyCode": "USD",
            "priceDetails": {
                "price": 10.45,
                "priceStatus": kony.payment.PRICE_STATUS_FINAL
            }
        };
        var paymentRequestData = {
            "paymentCardsInfo": paymentCardsInfo,
            "shippingAddressInfo": shippingAddressInfo,
            "billingAddressInfo": billingAddressInfo,
            "merchantInfo": merchantInfo,
            "paymentSummary": paymentSummary
        };
        kony.payment.getPaymentData(paymentRequestData, this.getPaymentDataSuccessCallback, this.getPaymentDataErrorCallback);
    },
    paymentApplepay: function() {
        function getPaymentDataSuccessCallback(result) {
            alert("transactionIdentifier : " + result.transactionID);
            alert("paymentToken : " + JSON.stringify(result.paymentToken));
            alert("ship address info: " + JSON.stringify(result.shippingAddressInfo));
            alert("card Info:" + JSON.stringify(result.selectedCardInfo));
            kony.payment.setTransactionStatus("success");
        }

        function getPaymentDataErrorCallback(statusCode) {
            alert(statusCode);
        }
        var paymentCardsInfo = {
            "paymentCardNetworks": [kony.payment.NETWORK_MASTERCARD],
            "paymentMethodType": [kony.payment.METHODTYPE_3DS]
        }
        var shippingAddressInfo = {
            "name": true,
            "postalAddress": true,
            "email": true,
            "phoneNumber": true,
            "shippingType": kony.payment.SHIPPINGTYPE_SHIPPING,
            "shippingMethod": [{
                "label": "Free shipping",
                "price": "0.00",
                "id": "free",
                "detail": "free delivery"
            }, {
                "label": "Express shipping",
                "price": "10.00",
                "id": "express",
                "detail": "delivery in 3-4 days"
            }]
        }
        var billingAddressInfo = {
            "name": true,
            "postalAddress": true,
            "email": true,
            "phoneNumber": true
        }
        var merchantInfo = {
            "merchantName": "stripe",
            "merchantID": "merchant.com.iOSKony.kony",
            "countryCode": "US",
            "additionalParameters": {
                "stripe:publishableKey": "merchant.com.iOSKony.kony",
                "stripe:version": "5.1.0"
            }
        }
        var paymentSummary = {
            "currencyCode": "USD",
            "priceDetails": [{
                "label": "TAX",
                "price": "10.45",
                "priceStatus": kony.payment.PRICE_STATUS_FINAL
            }]
        }
        var paymentRequestData = {
            "paymentCardsInfo": paymentCardsInfo,
            "shippingAddressInfo": shippingAddressInfo,
            "billingAddressInfo": billingAddressInfo,
            "merchantInfo": merchantInfo,
            "paymentSummary": paymentSummary
        }
        kony.payment.getPaymentData(paymentRequestData, getPaymentDataSuccessCallback, getPaymentDataErrorCallback);
    },
    bottomDismiss: function() {
        if (selectedCardData !== null) {
            var cardnum = selectedCardData.txtFldCardNumber;
            this.view.Button0f01906146e524e.skin = "btnornagrbdr";
            this.view.lblCardnum.text = cardnum;
            this.view.FlexContainerblur.isVisible = true;
            this.view.lblBlur.text = selectedCardData.lblBlur;
            this.view.imgcard.isVisible = true;
            this.view.imgcard.src = selectedCardData.Image0f63afa6213274a;
            this.view.lblCardnum.skin = "lblskn";
            this.view.lblCardnum.left = "200dp";
            this.view.forceLayout();
            this.selectedCardData = null;
            return;
        } else {
            alert("Please Select the card");
        }
    },
    bottomDismissIphone: function() {
        //alert("dismis fired");
        this.view.Flxtop1.zIndex = 2;
        this.view.Flxtop.zIndex = 1;
        this.view.FlexContainer0i16a6cc2706b4a.zIndex = 2;
        if (this.view.SegCards.selectedRowItems !== null) {
            var selectedCardData = this.view.SegCards.selectedRowItems[0];
            if (selectedCardData !== null) {
                var cardnum = selectedCardData.txtFldCardNumber;
                this.view.Button0f01906146e524e.skin = "btnornagrbdr";
                this.view.lblCardnum.text = cardnum;
                this.view.imgcard.isVisible = true;
                this.view.FlexContainerblur.isVisible = true;
                this.view.lblBlur.text = selectedCardData.lblBlur;
                this.view.imgcard.src = selectedCardData.Image0f63afa6213274a;
                this.view.lblCardnum.skin = "lblskn";
                this.view.lblCardnum.left = "208dp";
                return;
            } else {
                alert("Please Select the card");
            }
        }
    },
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
    imgDownCLick: function() {
        this.animateBottomsheetdown();
    },
    btnSaveClick: function() {
        this.keyChnSave();
        this.keyChnRetrieve();
        this.addClearData();
        this.view.flxCreditCard.isVisible = false;
        this.view.SegCards.isVisible = true;
        this.view.btnSave.isVisible = false;
        this.view.imgPlus.isVisible = true;
    },
    showNewBottomSheet: function() {
        mBottomSheetObject = new kony.ui.BottomSheet({
            "contentWidget": "flnxbottomsheet",
            onDismiss: this.bottomDismiss
        });
    },
    tabchange: function(eventObject) {
        if (eventObject.tabIndex == 0) {} else {
            this.paymentApplepay();
        }
    },
    readCardNumbers: function() {
        var cardlengthid = {
            "identifier": "cardlength"
        };
        var cardsdict = kony.keychain.retrieve(cardlengthid);
        if (Object.keys(cardsdict).length === 0) {
            this.cardslength = 0;
        } else {
            this.cardslength = Number(cardsdict.securedata);
        }
    },
    keyChnSave: function() {
        if (this.view.txtfldCardName.text === null || this.view.txtfldCardName.text === undefined || this.view.txtfldCardName.text === "" || this.view.txtFldCardNumber.text === null || this.view.txtFldCardNumber.text === undefined || this.view.txtFldCardNumber.text === "" || this.view.txtFldDate.text === null || this.view.txtFldDate.text === undefined || this.view.txtFldDate.text === "") {
            alert("Enter all details and then Save");
            return;
        }
        var CredDetails = [{
            "txtfldCardname": this.view.txtfldCardName.text
        }, {
            "txtfldCardNumber": this.view.txtFldCardNumber.text
        }, {
            "txtFldDate": this.view.txtFldDate.text
        }];
        //alert(this.cardDetails);
        var tmpData = this.view.SegCards.data;
        if (tmpData !== null) {
            for (var i = 0; i < tmpData.length; i++) {
                if (CredDetails[1].txtfldCardNumber == tmpData[i].txtFldCardNumber) {
                    alert("Card already exist!!");
                    return;
                }
            }
        }
        var cred = {
            "securedata": JSON.stringify(CredDetails),
            "secureaccount": "" + this.cardslength,
            "identifier": "credentials" + this.cardslength
        };
        //alert("save:" +JSON.stringify(cred));
        var savestatus = kony.keychain.save(cred);
        if (savestatus.secureAccountStatus === 0) {
            this.cardslength++;
            var lengthDet = {
                "securedata": "" + this.cardslength,
                "secureaccount": "1" + this.cardslength,
                "identifier": "cardlength"
            };
            kony.keychain.save(lengthDet);
        }
    },
    keyChnRetrieve: function() {
        this.view.SegCards.removeAll();
        var data1 = [];
        for (var k = (this.cardslength - 1);
            (k >= 0 && k >= (this.cardslength - 4)); k--) {
            var cred = {
                "identifier": "credentials" + k
            };
            var credDict = kony.keychain.retrieve(cred);
            if (Object.keys(credDict).length === 0 || credDict.securedata === null || credDict.securedata === undefined || credDict.securedata === "") {
                continue;
            } else {
                var loginDIct = JSON.parse(credDict.securedata);
                var cardNumber = loginDIct[1].txtfldCardNumber;
                var tmpdata = {
                    "txtfldCardname": loginDIct[0].txtfldCardname,
                    "txtFldCardNumber": cardNumber.slice(12, 16),
                    "lblBlur": cardNumber.slice(0, 4) + "  " + cardNumber.slice(4, 8) + "  " + cardNumber.slice(8, 12),
                    "lcardnum": "Card Number",
                    "txtFldDate": loginDIct[2].txtFldDate,
                    "lexpire": "Expiry Date",
                    "imgselect": "tick-normal.png",
                    "CopyLabel0a9b5705f0c7d44": " ",
                    "CopyLabel0i1c07199181f44": " ",
                    "lminus2": "-",
                    "lminus": "-",
                    "Image0f63afa6213274a": "credite_card_icon_04.png",
                    "flxCard": {}
                };
                data1.push(tmpdata);
            }
            this.view.SegCards.setData(data1);
        }
    },
    animateRows: function animateRows() {
        var section = 0;
        var row = 0;
        var contextDef = [{
            sectionIndex: this.view.SegCards.selectedIndex[0],
            rowIndex: this.view.SegCards.selectedIndex[1]
        }];
        var animDefinitionOne = {
            0: {
                "height": "60dp",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE_OUT
                }
            },
            100: {
                "height": "150dp",
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
        finalAnimation = {
            definition: animDefinition,
            config: animConfig,
            callbacks: this.changeData()
        };
        this.view.SegCards.animateRows({
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
                    "height": "150dp"
                },
                100: {
                    "height": "60dp"
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
            finalAnimation = {
                definition: animDefinition,
                config: animConfig
            };
            this.view.SegCards.animateRows({
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
        if (this.prevrow !== null && this.prevrow != this.view.SegCards.selectedRowIndex[1] && this.collapsedState === false) {
            this.animateRowsContract();
            this.collapsedState = true;
        }
        this.prevrow = this.view.SegCards.selectedRowIndex[1];
        this.collapsedState = false;
    },
    onNavigate: function(username) {
        this.view.Label0f043201d8f044b.text = username;
    },
    animationcallback: function() {
        try {
            this.view.Flxtop.skin = "flxTrans";
            this.view.Flxtop.zIndex = 2;
            this.view.Flxtop1.zIndex = 1;
            this.view.FlexContainer0i16a6cc2706b4a.zIndex = 1;
            this.view.FlexContainer0b7b0d407f9544c.zIndex = 5;
        } catch (e) {
            alert(e);
        }
    },
    animationcallback2: function() {
        try {
            this.view.Flxtop.skin = "slFbox";
        } catch (e) {
            alert(e);
        }
    },
    animateBottomsheet: function() {
        var animDefinitionOne = {
            0: {
                "top": "100%"
            },
            100: {
                "top": "40%"
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
        this.view.FlexContainer0b7b0d407f9544c.animate(animDefinition, animConfig, {
            animationEnd: this.animationcallback
        });
    },
    animateBottomsheetdown: function() {
        var animDefinitionOne = {
            0: {
                "top": "40%"
            },
            100: {
                "top": "100%"
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
        this.view.FlexContainer0b7b0d407f9544c.animate(animDefinition, animConfig, {
            animationStart: this.animationcallback2,
            animationEnd: this.bottomDismissIphone
        });
    },
    addCard: function() {
        this.view.imgPlus.isVisible = false;
        this.view.btnSave.isVisible = true;
        this.view.Label0c133dae1c50c4f.isVisible = true;
        this.view.flxCreditCard.isVisible = true;
    },
    contactSelected: function() {
        if (this.prevrow != this.view.SegCards.selectedRowIndex[1]) {
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
    formClearData: function() {
        this.view.lblCardnum.left = "80dp";
        this.view.FlexContainerblur.isVisible = false;
        this.view.lblCardnum.text = "Display selected credit card details";
        this.view.lblCardnum.skin = "lbltextTrans";
        this.view.imgcard.isVisible = false;
        this.view.Button0f01906146e524e.skin = "btntransgrey";
        this.view.lblSuccess.isVisible = false;
    },
    addClearData: function() {
        this.view.txtfldCardName.text = "";
        this.view.txtFldCardNumber.text = "";
        this.view.txtFldcvv.text = "";
        this.view.txtFldDate.text = "";
    },
    timerFunc: function() {
        this.view.FlxRating.isVisible = true;
        var config = [{
            "delay": 0,
            "duration": 100,
            "amplitude": 250
        }];
        kony.phone.startVibration(config, false);
        //commenting below line as flexcontainer modal property handles
        //this.view.FlexContainer0d34a8521156f46.onClick=null;
        this.createLocalnotification();
        this.view.FlxBlur.blur = {
            "enabled": true,
            "value": 100
        };
    },
    checkWifiConnectivity() {
        if (kony.application.getSettingValue("wifi").wifi_current_state.toString() === "1") {
            alert("Please enable Wifi to make Payment");
        } else if (kony.application.getSettingValue("wifi").wifi_current_state.toString() === "3") {
            this.view.lblSuccess.isVisible = true;
            kony.timer.schedule("mytimer", this.timerFunc, 0.5, false);
        }
    },
    flxBottomclick: function() {
        this.formClearData();
        this.animateBottomsheet();
    },
    ratingFunc: function() {
        kony.application.requestReview();
        this.view.FlxRating.isVisible = false;
        //commenting below line as flexcontainer modal property handles
        //this.view.FlexContainer0d34a8521156f46.onClick=this.flxBottomclick;
        this.view.FlxBlur.blur = {
            "enabled": false,
            "value": 60
        };
    },
    registerActions: function() {
        var accept = kony.notificationsettings.createAction({
            "id": "Accept",
            "label": "Accept",
            "pspConfig": {
                "authenticationRequired": true,
                "destructive": true,
                "activationMode": kony.notificationsettings.ACTIVATION_MODE_FORWARDS,
                "visibleOn": kony.notificationsettings.BOTH
            }
        });
        var reject = kony.notificationsettings.createAction({
            "id": "Reject",
            "label": "Reject",
            "pspConfig": {
                "authenticationRequired": false,
                "destructive": false,
                "activationMode": kony.notificationsettings.ACTIVATION_MODE_FORWARDS,
                "visibleOn": kony.notificationsettings.BOTH
            }
        });
        var decline = kony.notificationsettings.createAction({
            "id": "Decline",
            "label": "Decline",
            "pspConfig": {
                "activationMode": kony.notificationsettings.ACTIVATION_MODE_BACKWARDS,
                "authenticationRequired": true,
                "destructive": false,
                "visibleOn": kony.notificationsettings.BOTH
            }
        });
        var defaultActionContextArr = [accept, reject, decline];
        var minimalActionContextArr = [accept, reject];
        var categoryObj = kony.notificationsettings.createCategory({
            "categoryId": "paymentSuc",
            "actions": defaultActionContextArr,
            "pspConfig": {
                "minimalActions": minimalActionContextArr,
                "presentationOptions": [0, 1, 2]
            }
        });
        //Using kony.notificationsettings.registerCategory 
        var categoryArr = [categoryObj];
        var registerCategory = kony.notificationsettings.registerCategory({
            "categories": categoryArr,
            "pspConfig": {
                "types": [2]
            }
        });
    },
    createLocalnotification: function() {
        var d = new Date();
        //var tempSec = 2 * 1000;
        d.setTime(d.getTime() + (3 * 1000));
        d = d.toString();
        var date = d.substring(8, 11) + d.substring(4, 8) + d.substring(11, 16) + d.substring(16, 25) + d.substring(28, 33);
        var notificationId = "01";
        //var date = "05 jan 2017 16:42:00 +0530";
        var format = "dd MMM yyyy HH:mm:ss Z";
        var message = "Payment Success";
        var title = "Kony Payments";
        var categoryId = "paymentSuc";
        kony.localnotifications.create({
            "id": notificationId,
            "dateTime": {
                "date": date,
                "format": format
            },
            "message": message,
            "title": title,
            "categoryId": categoryId,
            "pspConfig": {
                "badge": 23,
                "sound": kony.localnotifications.DEFAULT_SOUND
            }
        });
    },
    localNotCallBacks: function() {
        try {
            kony.localnotifications.setCallbacks({
                "offlinenotification": this.offlinenotification,
                "onlinenotification": this.onlinenotification
            });
        } catch (err) {
            kony.print("Error Code " + err.errorCode + " Message " + err.message);
        }
    },
    /* Notification callback handlers. These are invoked automatically when their respective notifications are fired. */
    offlinenotification: function(notificationobject, actionid) {
        alert("offline notification callback inkvoked");
        alert("notification object is :" + JSON.stringify(notificationobject) + " action id is " + actionid);
    },
    onlinenotification: function(notificationobject, actionid) {
        alert("onlinenotification notification callback inkvoked");
        alert("notification object is :" + JSON.stringify(notificationobject) + " action id is " + actionid);
    }
});
define('Form1ControllerActions',{
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
    },
    /** onClick defined for CopyFlexContainer0f5b73af9897b4d **/
    AS_FlexContainer_ef7d90f4e60d4c5bb0236b1843d7d6b6: function AS_FlexContainer_ef7d90f4e60d4c5bb0236b1843d7d6b6(eventobject) {
        var self = this;
        this.paymentApplepay();
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
            this.view.lblSuccess.isVisible = true;
            kony.timer.schedule("mytimer", this.timerFunc, 0.5, false);
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
        this.readCardNumbers();
        this.keyChnRetrieve();
        this.registerActions();
    }
});



define('Form1Controller',["userForm1Controller","Form1ControllerActions"],
		function(){
			var controller = require("userForm1Controller");
			var controllerActions = ["Form1ControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});
