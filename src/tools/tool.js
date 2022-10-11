import { canvas, ctx } from "../canvas.js";

class Tool {
	constructor(name) {
		this.name = name;

		this.dragging = false;
	}
	init() {}
	// ---- Events ---------------------------------------------------------------------------
	onMouseDown() {
		this.dragging = true;
	}
	onMouseUp() {
		this.dragging = false;
	}
	onMouseMove() {}

	static getPos(e) {
		const bound = canvas.getBoundingClientRect();
		const x = e.clientX - bound.left;
		const y = e.clientY - bound.top;
		return { x, y };
	}
}

export default Tool;
