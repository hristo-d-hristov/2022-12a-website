const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const sumButton = document.getElementById("sumButton");
const subButton = document.getElementById("subButton");
const mulButton = document.getElementById("mulButton");
const divButton = document.getElementById("divButton");
const result = document.getElementById("result");

sumButton.onclick = function() {
	const a = Number(inputA.value);
	const b = Number(inputB.value);
	const c = a + b;
	result.innerText = c;
}
subButton.onclick = function() {
	const a = Number(inputA.value);
	const b = Number(inputB.value);
	const c = a - b;
	result.innerText = c;
}
mulButton.onclick = function() {
	const a = Number(inputA.value);
	const b = Number(inputB.value);
	const c = a * b;
	result.innerText = c;
}
divButton.onclick = function() {
	const a = Number(inputA.value);
	const b = Number(inputB.value);
	const c = a / b;
	result.innerText = c;
}
