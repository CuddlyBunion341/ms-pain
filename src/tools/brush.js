import { ctx } from "../canvas.js";
import Tool from "./tool.js";

class Brush extends Tool {
	lastPos;
	constructor() {
		super("brush");
	}
	onMouseDown(e) {
		super.onMouseDown();
		const { x, y } = Tool.getPos(e);
		this.draw(x, y);
	}
	onMouseUp(e) {
		super.onMouseUp();
		this.lastPos = null;
	}
	onMouseMove(e) {
		if (this.dragging) {
			const { x, y } = Tool.getPos(e);
			this.draw(x, y);
		}
	}
	draw(x, y, { fill = "black", radius = 2 } = {}) {
		ctx.fillStyle = fill;
		if (this.lastPos && 1) {
			ctx.lineWidth = radius * 2 + 1;
			ctx.beginPath();
			ctx.moveTo(this.lastPos.x, this.lastPos.y);
			ctx.lineTo(x, y);
			ctx.stroke();
		}
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI);
		ctx.fill();
		this.lastPos = { x, y };
	}
}

export default Brush;
