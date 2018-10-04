define({
    //Type your controller code here 
    //mBottomSheetObject:null,
    cardslength: 0,
    prevrow: null,
    cardNameCheck: null,
    collapsedState: true,
    getPaymentDataSuccessCallback: function(result) {
        alert("googleTransactionID : " + result.googleTransactionID);
        alert("paymentToken : " + result.paymentToken);
        //    alert("selectedCardInfo : "+result.selectedCardInfo)
        //   alert("selectedCardNetWork : "+result.selectedCardInfo.cardNetwork)
        //    alert("selectedcardPaymentMethod : "+result.selectedCardInfo.cardPaymentMethod)
        //    alert("selectedCardcardNumber : "+result.selectedCardInfo.cardNumber)
        //
        //
        //    alert("shippingAddressName : "+result.shippingAddressInfo.name)
        //    alert("shippingAddressEmail : "+result.shippingAddressInfo.email)
        //    alert("shippingAddressPhoneNumber : "+result.shippingAddressInfo.phoneNumber)
        //   alert("shippingAddress : "+result.shippingAddressInfo)
        //
        //    alert("billingAddressName : "+result.billingAddressInfo.name)
        //    alert("billingAddressEmail : "+result.billingAddressInfo.email)
        //    alert("billingAddressPhoneNumber : "+result.billingAddressInfo.phoneNumber)
        //    alert("billingAddress : "+result.billingAddressInfo.postalAddress)
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
            //if(tmpData.imgselect=="tick_mark_hover.png"){
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
            selectedCardData = null;
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
                //if(tmpData.imgselect=="tick_mark_hover.png"){
                var cardnum = selectedCardData.txtFldCardNumber;
                this.view.Button0f01906146e524e.skin = "btnornagrbdr";
                this.view.lblCardnum.text = cardnum;
                this.view.imgcard.isVisible = true;
                this.view.imgcard.src = selectedCardData.Image0f63afa6213274a;
                this.view.lblCardnum.skin = "lblskn";
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
    imgDownCLick: function() {},
    btnSaveClick: function() {
        this.keyChnSave();
        this.keyChnRetrieve();
        this.addClearData();
        this.view.flxCreditCard.isVisible = false;
        this.view.SegCards.isVisible = true;
        this.view.btnSave.isVisible = false;
        this.view.imgPlus.isVisible = true;
    },
    andridpay: function() {},
    applepay1: function() {},
    showNewBottomSheet: function() {
        //alert("create bottom sheet");
        //var basicconfig={peekHeight:constants.BOTTOM_SHEET_PEEK_HEIGHT_AUTO,skipCollapsed:true,contentWidget:this.view.FlexContainer0h6eacd971f0047};
        var FlexContainer0b7b0d407f9544c1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "300dp",
            "id": "FlexContainer0b7b0d407f9544c1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "CopyslFbox0fa7c2d84793b41",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0b7b0d407f9544c1.setDefaultUnit(kony.flex.DP);
        var FlexContainer0h6eacd971f0047 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "FlexContainer0h6eacd971f0047",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "skin": "CopyslFbox0h6b6a3a997874d",
            "top": "50dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0h6eacd971f0047.setDefaultUnit(kony.flex.DP);
        var FlexContainer0jae3ac79161e4a = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50%",
            "clipBounds": true,
            "id": "FlexContainer0jae3ac79161e4a",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "10dp",
            "right": "10dp",
            "skin": "CopyslFbox0g357313e457149",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0jae3ac79161e4a.setDefaultUnit(kony.flex.DP);
        var FlexContainer0fc9a547e1cda40 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "FlexContainer0fc9a547e1cda40",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": this.addCard,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0fc9a547e1cda40.setDefaultUnit(kony.flex.DP);
        var Label0eba89b5bfbf94c = new kony.ui.Label({
            "centerY": "50%",
            "id": "Label0eba89b5bfbf94c",
            "isVisible": true,
            "left": "25dp",
            "skin": "lblskn",
            "text": "ADD NEW CARD",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgPlus = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgPlus",
            "isVisible": true,
            "onTouchEnd": this.addCard,
            "right": "20dp",
            "skin": "slImage",
            "src": "add_creditcard_plus_icon.png",
            "top": "2dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnSave = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "btnSave1",
            "height": "30dp",
            "id": "btnSave",
            "isVisible": false,
            "onClick": this.btnSaveClick,
            "right": "10dp",
            "skin": "btnSave1",
            "text": "Save",
            "top": "7dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0fc9a547e1cda40.add(Label0eba89b5bfbf94c, imgPlus, btnSave);
        var Label0c133dae1c50c4f = new kony.ui.Label({
            "centerX": "50%",
            "height": "4px",
            "id": "Label0c133dae1c50c4f",
            "isVisible": false,
            "left": "15dp",
            "right": "15dp",
            "skin": "lblLine",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxCreditCard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "blur": {
                "enabled": false,
                "value": 92
            },
            "centerX": "50%",
            "clipBounds": true,
            "height": "200dp",
            "id": "flxCreditCard",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "right": "20dp",
            "skin": "slFbox",
            "top": "2dp",
            "width": "95%",
            "zIndex": 1
        }, {}, {});
        flxCreditCard.setDefaultUnit(kony.flex.DP);
        var CopyFlexContainer0ce72fee0a7e04d = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "CopyFlexContainer0ce72fee0a7e04d",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        CopyFlexContainer0ce72fee0a7e04d.setDefaultUnit(kony.flex.DP);
        var CopyLabel0c8395652cd4e48 = new kony.ui.Label({
            "centerY": "50%",
            "id": "CopyLabel0c8395652cd4e48",
            "isVisible": true,
            "left": "10dp",
            "skin": "lblgreyFont",
            "text": "Name",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "7dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var CopyLabel0acb1cd9af1d541 = new kony.ui.Label({
            "centerY": "50%",
            "id": "CopyLabel0acb1cd9af1d541",
            "isVisible": true,
            "left": "98dp",
            "skin": "lblskn",
            "text": "-",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var CopyLabel0fe0a843b33274b = new kony.ui.Label({
            "bottom": "0dp",
            "height": "2px",
            "id": "CopyLabel0fe0a843b33274b",
            "isVisible": true,
            "left": "10dp",
            "right": "10dp",
            "skin": "lblLine",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var txtfldCardName = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "txtfldfocus",
            "height": "40dp",
            "id": "txtfldCardName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "110dp",
            "placeholder": "Card Holder Name",
            "secureTextEntry": false,
            "skin": "txtfieldskin",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "width": "60%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "txtfldskn1",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        CopyFlexContainer0ce72fee0a7e04d.add(CopyLabel0c8395652cd4e48, CopyLabel0acb1cd9af1d541, CopyLabel0fe0a843b33274b, txtfldCardName);
        var CopyFlexContainer0f9e216b7321345 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "CopyFlexContainer0f9e216b7321345",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "50dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        CopyFlexContainer0f9e216b7321345.setDefaultUnit(kony.flex.DP);
        var CopyLabel0f152970400fa4d = new kony.ui.Label({
            "centerY": "50%",
            "id": "CopyLabel0f152970400fa4d",
            "isVisible": true,
            "left": "10dp",
            "skin": "lblgreyFont",
            "text": "Card Number",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "7dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var CopyLabel0gd77ccc7859b45 = new kony.ui.Label({
            "centerY": "50%",
            "id": "CopyLabel0gd77ccc7859b45",
            "isVisible": true,
            "left": "98dp",
            "skin": "lblskn",
            "text": "-",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var CopyLabel0i1c07199181f44 = new kony.ui.Label({
            "bottom": "0dp",
            "height": "2px",
            "id": "CopyLabel0i1c07199181f44",
            "isVisible": true,
            "left": "10dp",
            "right": "10dp",
            "skin": "lblLine",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var txtFldCardNumber = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "txtfldfocus",
            "height": "40dp",
            "id": "txtFldCardNumber",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "110dp",
            "maxTextLength": 16,
            "placeholder": "Card Number",
            "secureTextEntry": false,
            "skin": "txtfieldskin",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "top": 0,
            "width": "60%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "txtfldskn1",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        CopyFlexContainer0f9e216b7321345.add(CopyLabel0f152970400fa4d, CopyLabel0gd77ccc7859b45, CopyLabel0i1c07199181f44, txtFldCardNumber);
        var CopyFlexContainer0dd9ec95bca8147 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "CopyFlexContainer0dd9ec95bca8147",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "100dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        CopyFlexContainer0dd9ec95bca8147.setDefaultUnit(kony.flex.DP);
        var CopyLabel0f5c0e99c5b8c49 = new kony.ui.Label({
            "centerY": "50%",
            "id": "CopyLabel0f5c0e99c5b8c49",
            "isVisible": true,
            "left": "10dp",
            "skin": "lblgreyFont",
            "text": "Expiry Date",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "7dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var CopyLabel0fae5613d3aed42 = new kony.ui.Label({
            "centerY": "50%",
            "id": "CopyLabel0fae5613d3aed42",
            "isVisible": true,
            "left": "98dp",
            "skin": "lblskn",
            "text": "-",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var CopyLabel0a9b5705f0c7d44 = new kony.ui.Label({
            "bottom": "0dp",
            "height": "2px",
            "id": "CopyLabel0a9b5705f0c7d44",
            "isVisible": true,
            "left": "10dp",
            "right": "10dp",
            "skin": "lblLine",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var txtFldDate = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "txtfldfocus",
            "height": "40dp",
            "id": "txtFldDate",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "110dp",
            "maxTextLength": null,
            "placeholder": "MM/YY",
            "secureTextEntry": false,
            "skin": "txtfieldskin",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "123dp",
            "width": "60%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "txtfldskn1",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        CopyFlexContainer0dd9ec95bca8147.add(CopyLabel0f5c0e99c5b8c49, CopyLabel0fae5613d3aed42, CopyLabel0a9b5705f0c7d44, txtFldDate);
        var CopyFlexContainer0gf6701ac8ae44a = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "CopyFlexContainer0gf6701ac8ae44a",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "150dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        CopyFlexContainer0gf6701ac8ae44a.setDefaultUnit(kony.flex.DP);
        var CopyLabel0efb5117514d44c = new kony.ui.Label({
            "centerY": "50%",
            "id": "CopyLabel0efb5117514d44c",
            "isVisible": true,
            "left": "10dp",
            "skin": "lblgreyFont",
            "text": "CVV",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "7dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var CopyLabel0c4c50100bd1d47 = new kony.ui.Label({
            "centerY": "50%",
            "id": "CopyLabel0c4c50100bd1d47",
            "isVisible": true,
            "left": "98dp",
            "skin": "lblskn",
            "text": "-",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var txtFldcvv = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "txtfldfocus",
            "height": "40dp",
            "id": "txtFldcvv",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "110dp",
            "maxTextLength": 3,
            "placeholder": "CVV",
            "secureTextEntry": false,
            "skin": "txtfieldskin",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
            "width": "60%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "txtfldskn1",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        CopyFlexContainer0gf6701ac8ae44a.add(CopyLabel0efb5117514d44c, CopyLabel0c4c50100bd1d47, txtFldcvv);
        flxCreditCard.add(CopyFlexContainer0ce72fee0a7e04d, CopyFlexContainer0f9e216b7321345, CopyFlexContainer0dd9ec95bca8147, CopyFlexContainer0gf6701ac8ae44a);
        FlexContainer0jae3ac79161e4a.add(FlexContainer0fc9a547e1cda40, Label0c133dae1c50c4f, flxCreditCard);
        var SegCards = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "data": [{
                "CopyLabel0a9b5705f0c7d44": "",
                "CopyLabel0i1c07199181f44": "",
                "Image0f63afa6213274a": "credite_card_icon_02.png",
                "imgselect": "imagedrag.png",
                "lcardnum": "Card Number",
                "lexpire": "Expiry Date",
                "lminus": "-",
                "lminus2": "-",
                "txtFldCardNumber": "Label",
                "txtFldDate": "Label",
                "txtfldCardname": "Label"
            }],
            "groupCells": false,
            "height": "250dp",
            "id": "SegCards",
            "isVisible": true,
            "needPageIndicator": true,
            "onRowClick": this.contactSelected,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "right": "10dp",
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "Copyseg0g8a4f546528b4f",
            "rowTemplate": "flxCard",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_SINGLE_SELECT_BEHAVIOR,
            "selectionBehaviorConfig": {
                "imageIdentifier": "imgselect",
                "selectedStateImage": "tick_mark_hover.png",
                "unselectedStateImage": "tick_normal.png"
            },
            "separatorColor": "f5f5f500",
            "separatorRequired": true,
            "separatorThickness": 10,
            "showScrollbars": false,
            "top": "10dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "CopyFlexContainer0dd9ec95bca8147": "CopyFlexContainer0dd9ec95bca8147",
                "CopyFlexContainer0f9e216b7321345": "CopyFlexContainer0f9e216b7321345",
                "CopyLabel0a9b5705f0c7d44": "CopyLabel0a9b5705f0c7d44",
                "CopyLabel0i1c07199181f44": "CopyLabel0i1c07199181f44",
                "FlexContainer0c391ab83a4464a": "FlexContainer0c391ab83a4464a",
                "Image0f63afa6213274a": "Image0f63afa6213274a",
                "flxCard": "flxCard",
                "imgselect": "imgselect",
                "lcardnum": "lcardnum",
                "lexpire": "lexpire",
                "lminus": "lminus",
                "lminus2": "lminus2",
                "txtFldCardNumber": "txtFldCardNumber",
                "txtFldDate": "txtFldDate",
                "txtfldCardname": "txtfldCardname"
            },
            "width": "90%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxwire = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "130dp",
            "id": "flxwire",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "8dp",
            "skin": "CopyslFbox0ba326fd551a543",
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flxwire.setDefaultUnit(kony.flex.DP);
        var FlexContainer0b6f90c1384ba42 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "70%",
            "id": "FlexContainer0b6f90c1384ba42",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "20dp",
            "onClick": this.andridpay,
            "skin": "CopyslFbox0j80716d26be649",
            "width": "40%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0b6f90c1384ba42.setDefaultUnit(kony.flex.DP);
        var Image0ee65f9d789ce44 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "150dp",
            "id": "Image0ee65f9d789ce44",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "google_pay.png",
            "width": "60%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0b6f90c1384ba42.add(Image0ee65f9d789ce44);
        var CopyFlexContainer0f5b73af9897b4d = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "70%",
            "id": "CopyFlexContainer0f5b73af9897b4d",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "50%",
            "onClick": this.applepay1,
            "skin": "CopyslFbox0j80716d26be649",
            "width": "40%",
            "zIndex": 1
        }, {}, {});
        CopyFlexContainer0f5b73af9897b4d.setDefaultUnit(kony.flex.DP);
        var CopyImage0i940a0e6abc74a = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "150dp",
            "id": "CopyImage0i940a0e6abc74a",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "apple_pay.png",
            "width": "60%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFlexContainer0f5b73af9897b4d.add(CopyImage0i940a0e6abc74a);
        flxwire.add(FlexContainer0b6f90c1384ba42, CopyFlexContainer0f5b73af9897b4d);
        FlexContainer0h6eacd971f0047.add(FlexContainer0jae3ac79161e4a, SegCards, flxwire);
        var CopyFlexContainer0b7c155798cd34c = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "CopyFlexContainer0b7c155798cd34c",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "flexgrey",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        CopyFlexContainer0b7c155798cd34c.setDefaultUnit(kony.flex.DP);
        var btncreditcard = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "btnTrans1",
            "height": "80%",
            "id": "btncreditcard",
            "isVisible": true,
            "left": "50dp",
            "onClick": this.btnCreditcardclick,
            "skin": "btnskn3",
            "text": "CREDITCARD",
            "width": "110dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnwire = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "btnTrans1",
            "height": "80%",
            "id": "btnwire",
            "isVisible": true,
            "left": "170dp",
            "onClick": this.btnWireClick,
            "skin": "btnTrans1",
            "text": "WIRE",
            "width": "110dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var CopyImage0jeca641816c24f = new kony.ui.Image2({
            "centerY": "50%",
            "height": "20dp",
            "id": "CopyImage0jeca641816c24f",
            "isVisible": true,
            "onTouchEnd": this.btnWireClick,
            "right": "30dp",
            "skin": "slImage",
            "src": "down_arrow_icon.png",
            "top": "9dp",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFlexContainer0b7c155798cd34c.add(btncreditcard, btnwire, CopyImage0jeca641816c24f);
        //FlexContainer0b7b0d407f9544c1.add(FlexContainer0h6eacd971f0047, CopyFlexContainer0b7c155798cd34c);
        //this.add(FlexContainer0b7b0d407f9544c1);
        var Flex0a0d3748450a24a = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "Flex0a0d3748450a24a",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0ff74f04552854f",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        Flex0a0d3748450a24a.setDefaultUnit(kony.flex.DP);
        Flex0a0d3748450a24a.add();
        mBottomSheetObject = new kony.ui.BottomSheet({
            //contentWidget:"FlexContainer0b7b0d407f9544c1",
            "contentWidget": "flnxbottomsheet",
            onDismiss: this.bottomDismiss
        });
        //mBottomSheetObject.onDismiss = this.bottomDismiss;
        /* this.mBottomSheetObject = new kony.ui.BottomSheet({
             "contentWidget": this.view.FlexContainer0h6eacd971f0047
         });
         this.mBottomSheetObject.show();
         //alert("Bottom Sheet Created"+ this.mBottomSheetObject);*/
    },
    tabchange: function(eventObject) {
        //alert(eventObject);
        if (eventObject.tabIndex == 0) {} else {}
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
        if (savestatus.toString.length === 0) {
            this.cardslength++;
            var lengthDet = {
                "securedata": "" + this.cardslength,
                "secureaccount": "" + this.cardslength,
                "identifier": "cardlength"
            };
            kony.keychain.save(lengthDet);
        }
    },
    keyChnRetrieve: function() {
        this.view.SegCards.removeAll();
        //var data=[];
        for (var k = (this.cardslength - 1);
            (k >= 0 && k >= (this.cardslength - 4)); k--) {
            var cred = {
                "identifier": "credentials" + k
            };
            var credDict = kony.keychain.retrieve(cred);
            // alert("Retrieve:" +JSON.stringify(cred));
            //alert(credDict);
            //alert(Object.keys(credDict).length+"credDict.securedata "+credDict.securedata);
            if (Object.keys(credDict).length === 0 || credDict.securedata === null || credDict.securedata === undefined || credDict.securedata === "") {
                alert("No cards to show");
                continue;
            } else {
                var loginDIct = JSON.parse(credDict.securedata);
                // alert("credDict"+ JSON.stringify(credDict));
                var tmpdata = {
                    "txtfldCardname": loginDIct[0].txtfldCardname,
                    "txtFldCardNumber": "XXXX XXXX XXXX " + loginDIct[1].txtfldCardNumber.slice(11, 15),
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
                        /*"stepConfig": {
                            "timingFunction": kony.anim.EASE_OUT
                        }*/
                },
                100: {
                    "height": "60dp"
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
        //         if(this.prevrow!==null&& this.collapsedState===false){
        //             this.animateRowsContract();
        //         }
        //         this.prevrow = this.view.SegCards.selectedIndex[1];
        // this.view.segBeneficiaries.setDataAt({lblName:"Evan",lblAmount: "$5000",lblAccountNumber:"1231341413343413413",lblEmailId:"sjdfknsncskj",lblNumber:"1234542",template:this.view.flxBeneficiariesExpanded},this.view.segBeneficiaries.selectedIndex[1] , 0) ; 
        /// vignesh changes
        if (this.prevrow !== null && this.prevrow != this.view.SegCards.selectedRowIndex[1] && this.collapsedState === false) {
            this.animateRowsContract();
            this.collapsedState = true;
        }
        this.prevrow = this.view.SegCards.selectedRowIndex[1];
        this.collapsedState = false;
    },
    onNavigate: function(username) {
        //this.view.TextField0d6f4530462a247.text=username;
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
            //  this.view.Flxtop1.zIndex=1;
            //		 this.view.Flxtop.zIndex=2;
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
    ///Vicky changes 
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
        //this.view.FlxBlur.zIndex=6;
        //this.view.FlxRating.zIndex=7;
        this.view.FlxRating.isVisible = true;
        this.view.FlexContainer0d34a8521156f46.onClick = null;
        this.view.FlxBlur.blur = {
            "enabled": true,
            "value": 60
        };
    },
    flxBottomclick: function() {
        this.formClearData();
    },
    ratingFunc: function() {
        kony.application.requestReview();
        this.view.FlxRating.isVisible = false;
        this.view.FlexContainer0d34a8521156f46.onClick = this.flxBottomclick;
        this.view.FlxBlur.blur = {
            "enabled": false,
            "value": 60
        };
    }
});