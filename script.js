var dropzone = document.getElementById('dropzone');
dropzone.setAttribute('ondrop', 'loadFiles()');

var grid = document.getElementById('cont');

var number = document.getElementById('cols');
number.onchange(updateCols());
number.value(5);

var title = document.getElementById('titolo');

updateCols();


loadFiles function(event) {
	event.target.files.forEach (file => {
		var cont = document.createElement("div");;
		grid.appendChild(cont);
		var image = document.createElement("img");
		image.src = URL.createObjectURL(file);
		cont.appendChild(image);
		var p = document.createElement("p");
		p.innerText = file.name;
		cont.appendChild(p);
	}
}

updateCols function() {
	grid.setAttribute('style', '--cols: ' + number.elt.value + ';');
}

empty function() {
	grid.innerHTML = '';
	title.value = '';
}
