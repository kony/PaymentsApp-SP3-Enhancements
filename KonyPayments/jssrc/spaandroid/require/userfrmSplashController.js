define({
    setGetStartedData: function() {
        var data = [{
            "image": "splash_screen_graphic_01.png",
            "appTitle": "Kony Payments",
            "desc": "Make easy P2P payments <br> using this application"
        }, {
            "image": "splash_screen_graphic_02.png",
            "appTitle": "Kony Payments",
            "desc": "Use your cards or wallets <br> to make your payments"
        }];
        this.view.SplashScreen.setSplashScreenData(data);
    }
});