let canvas = document.querySelector("canvas") as HTMLCanvasElement;

let context = canvas.getContext("2d")!;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const loop = () => {
  requestAnimationFrame(loop);

  context.fillStyle = "#000000";
  context.fillRect(0, 0, canvas.width, canvas.height);
};

requestAnimationFrame(loop);
