import Entity from "../entities/entity";
import Player from "../entities/player";
import { Vector, __follow__ } from "../types/lib";

export default class Game {
  private canvas = document.querySelector("canvas") as HTMLCanvasElement;
  private context = this.canvas.getContext("2d")!;
  private player = new Player();
  private cam: Vector = {
    x: -window.innerWidth / 2,
    y: -window.innerHeight / 2,
  };

  private tiles: Entity[] = [
    new Entity({ x: 0, y: 100 }, { x: 500, y: 20 }, "#FFFFFF"),
    new Entity({ x: 200, y: 0 }, { x: 20, y: 200 }, "#FFFFFF"),
    new Entity({ x: -200, y: 0 }, { x: 20, y: 200 }, "#FFFFFF"),
  ];

  private keys = {
    left: false,
    right: false,
    jump: false,
  };

  public constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });

    document.addEventListener("keydown", (event) => {
      this.handleKey(event, true);
    });
    document.addEventListener("keyup", (event) => {
      this.handleKey(event, false);
    });
  }

  public tick() {
    this.player.move(this.keys.left, this.keys.right);
    if (this.keys.jump) this.player.jump();
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.player.tick(this.tiles);
    this.player.draw(this.context, this.cam);

    for (const tile of this.tiles) {
      tile.draw(this.context, this.cam);
    }

    this.cam.x = Math.round(
      this.cam.x -
        (this.cam.x + this.canvas.width / 2 - this.player.getPosition.x) *
          __follow__.x
    );
    this.cam.y = Math.round(
      this.cam.y -
        (this.cam.y + this.canvas.height / 2 - this.player.getPosition.y) *
          __follow__.y
    );
  }

  public handleKey(event: KeyboardEvent, down: boolean) {
    switch (event.key) {
      case "ArrowLeft":
      case "a":
        this.keys.left = down;
        break;
      case "ArrowRight":
      case "d":
        this.keys.right = down;
        break;
      case "ArrowUp":
      case "w":
      case " ":
        this.keys.jump = down;
        break;
      default:
        return;
    }
  }
}
