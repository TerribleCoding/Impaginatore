var dropzone;
var grid;
var number;
var title;

function setup() {
	noCanvas();
	dropzone = select('#dropzone');
	dropzone.drop(loadFiles);
	title = select('#titolo')
	grid = select('#cont');
	number = select('#cols');
	number.changed(updateCols);
	number.elt.value = 5;
	updateCols();
}

function loadFiles(event) {
	for (let file of event.target.files) {
		var cont = createDiv();
		cont.parent(document.getElementById('cont'));
		var image = createImg(URL.createObjectURL(file), '');
		image.parent(cont);
		var p = createP(file.name);
		p.parent(cont);
	}
}

function updateCols() {
	grid.attribute('style', '--cols: ' + number.elt.value + ';');
}

function empty() {
	grid.elt.innerHTML = '';
	title.elt.value = '';
}