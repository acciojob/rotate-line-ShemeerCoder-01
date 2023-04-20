//your JS code here. If required.
let line = document.getElementById("line");

line.style.width = "200px";
line.style.height = "2px";
line.style.background = "black";
line.style.margin = "auto";

let angle = 0;

function rotateLine(){
	angle += 5;
	line.style.transform = `rotate(${angle}deg)`;
}

setInterval(rotateLine,50);
