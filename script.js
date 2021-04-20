function setup() {
		noCanvas();
		
		dropzone = select('#dropzone');
		dropzone.drop(loadFiles);
}

function loadFiles(event) {
		for(let file of event.target.files){
				var cont = createDiv();
				cont.parent(document.getElementById('cont'));
				var image = createImg(URL.createObjectURL(file), '');
				image.parent(cont);
				var p = createP(file.name);
				p.parent(cont);
		}
}