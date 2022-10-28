import Game from "./logic/game";

const game = new Game();

const loop = () => {
  requestAnimationFrame(loop);

  game.tick();
};

requestAnimationFrame(loop);
