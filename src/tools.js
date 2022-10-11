import { canvas } from "./canvas.js";
import Brush from "./tools/brush.js";
import Eraser from "./tools/eraser.js";

const tools = [new Brush(), new Eraser()];
let currentTool = 0;

canvas.addEventListener("mousedown", (e) => {
	tools[currentTool].onMouseDown(e);
});
canvas.addEventListener("mouseup", (e) => {
	tools[currentTool].onMouseUp(e);
});
canvas.addEventListener("mousemove", (e) => {
	tools[currentTool].onMouseMove(e);
});

const getCurrentTool = () => tools[currentTool];
const getCurrentToolIndex = () => currentTool;
const setCurrentTool = (index) => (currentTool = index);

export { tools, currentTool, getCurrentTool, getCurrentToolIndex };
