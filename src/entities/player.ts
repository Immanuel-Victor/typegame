import {
  Vector,
  __friction__,
  __gravity__,
  __jumpHeight__,
  __size__,
  __speed__,
} from "../types/lib";
import Entity from "./entity";

export default class Player extends Entity {
  private velocity: Vector = { x: 0, y: 0 };
  private grounded: boolean = false;

  public constructor() {
    super({ x: 0, y: 0 }, { x: __size__, y: __size__ }, "#0000FF");
  }

  public tick(ground: Entity) {
    this.position.x += this.velocity.x;
    this.position.y -= this.velocity.y;

    this.grounded = false;

    if (this.checkColision(ground)) {
      this.position.y -=
        this.velocity.y > 0
          ? this.getBoundries.top - ground.getBoundries.down
          : this.getBoundries.down - ground.getBoundries.top;

      this.velocity.y = 0;
      this.grounded = this.position.y < ground.getPosition.y;
    }

    this.velocity.x *= __friction__;
    this.velocity.y -= __gravity__;
  }

  public move(left: boolean, right: boolean) {
    if (left) {
      this.velocity.x -= __speed__;
    }
    if (right) {
      this.velocity.x += __speed__;
    }
  }

  public jump() {
    if (this.grounded) {
      this.velocity.y += __jumpHeight__;
    }
  }
}
