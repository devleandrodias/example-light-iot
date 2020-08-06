const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const led = new Led(13);

  board.repl.inject({
    led,
  });

  led.toggle();
});
