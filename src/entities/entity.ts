import { Vector } from "../types/lib";

export default class Entity {
  protected position: Vector;
  protected color: string;
  protected size: Vector;

  constructor(position: Vector, size: Vector, color: string) {
    this.position = position;
    this.color = color;
    this.size = size;
  }

  public draw(context: CanvasRenderingContext2D, cam: Vector): void {
    context.fillStyle = this.color;
    context.fillRect(
      this.position.x - this.size.x / 2 - cam.x,
      this.position.y - this.size.y / 2 - cam.y,
      this.size.x,
      this.size.y
    );
  }

  public get getPosition(): Vector {
    return this.position;
  }

  public get getBoundries() {
    return {
      left: this.position.x - this.size.x / 2,
      right: this.position.x + this.size.x / 2,
      top: this.position.y - this.size.y / 2,
      down: this.position.y + this.size.y / 2,
    };
  }

  public checkColision(other: Entity) {
    return (
      this.getBoundries.left < other.getBoundries.right &&
      this.getBoundries.right > other.getBoundries.left &&
      this.getBoundries.top < other.getBoundries.down &&
      this.getBoundries.down > other.getBoundries.top
    );
  }
}
