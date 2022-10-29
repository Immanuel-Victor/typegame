import Entity from "../entities/entity";
import Player from "../entities/player";
import { Vector } from "../types/lib";

export default class Game {
  private canvas = document.querySelector("canvas") as HTMLCanvasElement;
  private context = this.canvas.getContext("2d")!;
  private player = new Player();
  private cam: Vector = {
    x: -window.innerWidth / 2,
    y: -window.innerHeight / 2,
  };

  private ground = new Entity({ x: 0, y: 100 }, { x: 100, y: 20 }, "#FFFFFF");

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

    this.player.tick(this.ground);
    this.player.draw(this.context, this.cam);

    this.ground.draw(this.context, this.cam);
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
