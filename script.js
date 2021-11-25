var dropzone = document.getElementById('dropzone');
dropzone.setAttribute('ondrop', 'loadFiles()');

var grid = document.getElementById('cont');

var number = document.getElementById('cols');
number.onchange(updateCols());
number.value = 5;

var title = document.getElementById('titolo');
title.addEventListener('keyup', () => {
	if (title.value == '') {
		title.classList.add('invisible');
	} else {
		title.classList.remove('invisible');
	}
});

var squareCheck = document.getElementById('square');

updateCols();

function loadFiles(event) {
	var files = event.target.files;
	for (let i = 0; i < files.length; i++) {
		var cont = document.createElement("div");
		grid.appendChild(cont);
		var imgCont = document.createElement('div');
		imgCont.classList.add('img-container');
		if (squareCheck.checked == false) { imgCont.classList.add('squares'); }
		var image = document.createElement("img");
		image.src = URL.createObjectURL(files[i]);
		image.setAttribute('style', '--rot: 0deg;');
		var rotate = document.createElement('button');
		rotate.classList.add('rotate');
		rotate.onclick = function(event) {
			var img = event.target.parentNode.parentNode.querySelector('img');
			var rotation = img.getAttribute('style').match(/(--rot: )(\d+)(deg;)/).splice(1);
			rotation[1] = parseInt(rotation[1]) + 90;
			img.setAttribute('style', rotation.join(''));
		};
		var icon = document.createElement('img');
		icon.src = 'rotate-right.png';
		rotate.append(icon);
		imgCont.append(image, rotate);
		var p = document.createElement("p");
		p.innerText = files[i].name;
		cont.append(imgCont, p);
	}
}

function updateCols() {
	grid.setAttribute('style', '--cols: ' + number.value + ';');
}

function empty() {
	grid.innerHTML = '';
	title.value = '';
}

function squarify() {
	var target = document.querySelectorAll('#cont .img-container');
	for (let i = 0; i < target.length; i++) {
		target[i].classList.toggle('squares');
	}
}