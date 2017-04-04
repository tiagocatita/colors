var Nespresso = function () {
    this.canvas = document.getElementById('canvas');
    this.colors = document.getElementById('colors');
    this.size = 5;
    this.text = 'Dummy text';
}

Nespresso.prototype.setCanvas = function () {
    let dummy = document.createElement('span');
    this.canvas.innerHTML = '';
    this.canvas.appendChild(dummy);
    this.canvas.style.width = dummy.offsetWidth * this.size + 'px';
    this.canvas.removeChild(dummy);

    document.getElementById('cols').value = this.size;
    document.getElementById('text').value = this.text;
}

Nespresso.prototype.initColors = function () {
    let self = this;
    this.colors.innerHTML = '';

    for (let i = 65; i < 92; i++) {
        let hex1 = Math.floor((Math.random() * 9));
        let hex2 = Math.floor((Math.random() * 9));
        let hex3 = Math.floor((Math.random() * 9));
        let hex4 = Math.floor((Math.random() * 9));
        let hex5 = Math.floor((Math.random() * 9));
        let hex6 = Math.floor((Math.random() * 9));
        let color = '#' + hex1 + hex2 + hex3 + hex4 + hex5 + hex5;

        let letter = String.fromCharCode(i);

        let box = document.createElement('div');
        box.classList.add('box');

        let label = document.createElement('label');
        label.innerHTML = letter;

        let input = document.createElement('input');
        input.type = 'color';
        input.id = letter.toLowerCase();
        input.value = color;

        input.onchange = function() {
            self.refresh();
        }

        if (i == 91) {
            label.innerHTML = 'Space';
            input.id = 'space';
        }

        this.colors.appendChild(box);
        box.appendChild(label);
        box.appendChild(input);
    }
}

Nespresso.prototype.populate = function () {
    let lowercase = this.text.toLowerCase();
    let units = lowercase.split('');

    for (i in units) {
        let unit = units[i];
        let circle = document.createElement('span');

        if (unit != ' ') {
            let color = document.getElementById(unit);
            circle.style.background = color.value;
        } 
        
        if(unit == ' ') {
            let color = document.getElementById('space');
            circle.style.background = color.value;
        }

        this.canvas.appendChild(circle);
    }
}

Nespresso.prototype.setCols = function(cols) {
    this.size = cols;
    this.refresh();
}

Nespresso.prototype.setText = function(text) {
    this.text = text;
    this.refresh();
}

Nespresso.prototype.init = function () {
    this.setCanvas();
    this.initColors();
    this.populate();
}

Nespresso.prototype.refresh = function () {
    this.setCanvas();
    this.populate();
}

module.exports = new Nespresso();