export default class Game {
  private canvas = document.querySelector("canvas") as HTMLCanvasElement;

  private context = this.canvas.getContext("2d")!;

  public constructor() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    window.addEventListener("resize", () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    });
  }

  public tick() {
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
