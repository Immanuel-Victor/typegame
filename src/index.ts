let canvas = document.querySelector("canvas") as HTMLCanvasElement;

let context = canvas.getContext("2d")!;

const loop = () => {
  requestAnimationFrame(loop);

  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
};

requestAnimationFrame(loop);
