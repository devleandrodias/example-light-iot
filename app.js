var five = require("johnny-five");
var firebase = require("firebase");
var board = new five.Board();

board.on("ready", function () {
  var rele = new five.Relay(7);

  this.repl.inject({
    rele: rele,
  });

  var config = {
    apiKey: "AIzaSyAzdIaCIbTscAY3oc-nwDPtpdpfExMqD3A",
    authDomain: "light-iot-19ab4.firebaseapp.com",
    databaseURL: "https://light-iot-19ab4.firebaseio.com",
    storageBucket: "light-iot-19ab4.appspot.com",
  };

  firebase.initializeApp(config);

  firebase
    .database()
    .ref("lampada")
    .on("value", function (snapshot) {
      let lampada = snapshot.val();

      if (lampada == "on") {
        rele.close();
      } else {
        rele.open();
      }
    });
});
