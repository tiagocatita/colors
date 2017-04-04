var nespresso = require('./nespresso.js');

nespresso.init();

window.random = function() {
    nespresso.init();
}

window.setCols = function() {
    nespresso.setCols(parseInt(document.getElementById('cols').value));
}

window.setText = function() {
    nespresso.setText(document.getElementById('text').value);
}