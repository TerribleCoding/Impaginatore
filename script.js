var dropzone = document.getElementById('dropzone');
dropzone.setAttribute('ondrop', 'loadFiles()');

var grid = document.getElementById('cont');

var number = document.getElementById('cols');
number.onchange(updateCols());
number.value = 5;

var title = document.getElementById('titolo');

updateCols();

function loadFiles(event) {
	var files = event.target.files;
	for (let i = 0; i < files.length; i++) {
		var cont = document.createElement("div");
		grid.appendChild(cont);
		var image = document.createElement("img");
		image.src = URL.createObjectURL(files[i]);
		var p = document.createElement("p");
		p.innerText = files[i].name;
		cont.append(image, p);
	}
}

function updateCols() {
	grid.setAttribute('style', '--cols: ' + number.value + ';');
}

function empty() {
	grid.innerHTML = '';
	title.value = '';
}
