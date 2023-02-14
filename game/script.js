let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let nx = 4;
let ny = 3;
let sqside = 50;
let herox = 2;
let heroy = 1;
canvas.width = nx * sqside;
canvas.height = ny * sqside;
for (let i = 0; i < nx; i++) {
    for (let j = 0; j < ny; j++) {
        context.strokeRect(i * sqside, j * sqside, sqside, sqside);
    }
}
// context.fillRect(herox * sqside, heroy * sqside, sqside, sqside);
let heroimg = new Image();
heroimg.src = "mountain.png";
context.drawImage(heroimg, herox * sqside, heroy * sqside, sqside, sqside);