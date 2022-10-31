import Game from "./logic/game";
import map from "./loader/map.json";

const game = new Game();

game.loadMap(map);

const loop = () => {
  requestAnimationFrame(loop);

  game.tick();
};

requestAnimationFrame(loop);
