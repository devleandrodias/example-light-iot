var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function () {
  var rele = new five.Relay(8);

  this.repl.inject({
    rele: rele,
  });
});
