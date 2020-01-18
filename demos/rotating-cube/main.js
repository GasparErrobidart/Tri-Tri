const c = document.getElementById("screen");
const ctx = c.getContext("2d");

ctx.beginPath();
ctx.rect(0, 0, c.width, c.height);
ctx.fillStyle = "black";
ctx.fill();
