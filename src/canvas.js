const canvas = document.querySelector("#c");
const ctx = canvas.getContext("2d");

const width = 960;
const height = 540;

canvas.width = width;
canvas.height = height;

canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;

let dragging = false;
canvas.addEventListener("mousedown", (e) => {
	dragging = true;
	const bound = canvas.getBoundingClientRect();
	const x = e.clientX - bound.left;
	const y = e.clientY - bound.top;
	draw(x, y);
});
document.addEventListener("mouseup", () => {
	dragging = false;
	lastPos = undefined;
});

let lastPos = undefined;

canvas.addEventListener("mousemove", (e) => {
	if (!dragging) return;
	const bound = canvas.getBoundingClientRect();
	const x = e.clientX - bound.left;
	const y = e.clientY - bound.top;

	const erase = e.which == 3;

	draw(x, y, erase);
});

function draw(x, y, erase = false) {
	if (erase) {
		ctx.strokeStyle = "white";
		ctx.fillStyle = "white";
	} else {
		ctx.strokeStyle = "black";
		ctx.fillStyle = "black";
	}
	if (lastPos) {
		// draw line
		ctx.lineWidth = erase ? 20 : 10;
		ctx.beginPath();
		ctx.moveTo(lastPos.x, lastPos.y);
		ctx.lineTo(x, y);
		ctx.stroke();
	}

	const r = erase ? 10 : 4;

	ctx.fillRect(x - r, y - r, r * 2, r * 2);

	lastPos = { x, y };
}
