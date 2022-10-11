const canvas = document.querySelector("#c");
const ctx = canvas.getContext("2d");

const width = 960;
const height = 540;

canvas.width = width;
canvas.height = height;

canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;

export { canvas, ctx, width, height };
