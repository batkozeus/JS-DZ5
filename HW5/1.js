// Task 1

var dlinaStroki = document.getElementById('dlinaStroki');
document.getElementById('b1').onclick = lineLength;
function lineLength () {
	var teg = document.getElementById('i1').value;
	dlinaStroki.innerHTML = teg.length + ' символов';
}


// Task 2

var massivIzobr = document.getElementById('massivIzobr');
var nashiKartinki = ['s1', 's2', 's3', 's4', 's5'];
document.getElementById('b2').onclick = vivestiIzobr;
function vivestiIzobr () {
	for (var i = 0; i<nashiKartinki.length; i++) {
		massivIzobr.innerHTML += '<img src="images/' + nashiKartinki[i] + '.png">';
	}
}


// Task 3

var webAdress = document.getElementById('webAdress');
document.getElementById('b3').onclick = vivestiSite;
function vivestiSite () {
	var site = document.getElementById('site').value;
	if (site.indexOf('https://') == 0) {
		webAdress.innerHTML = site.substring(8);
	}
	else if (site.indexOf('http://') == 0) {
		webAdress.innerHTML = site.substring(7);
	}
}


// Task 4

var webAdress2 = document.getElementById('webAdress2');
document.getElementById('b4').onclick = vivestiSite2;
function vivestiSite2 () {
	var site2 = document.getElementById('site2').value;
	if (site2.indexOf('https://www.') == 0) {
		webAdress2.innerHTML = site2.substring(12);
	}
	else if (site2.indexOf('http://www.') == 0) {
		webAdress2.innerHTML = site2.substring(11);
	}
	else if (site2.indexOf('https://') == 0) {
		webAdress2.innerHTML = site2.substring(8);
	}
	else if (site2.indexOf('http://') == 0) {
		webAdress2.innerHTML = site2.substring(7);
	}
	else {
		webAdress2.innerHTML = site2;
	}
}


// Task 5

var checkForm = document.getElementById('checkForm');

document.getElementById('b5').onclick = tryForm;
function tryForm () {
	var name = document.getElementById('name').value;
	var surname = document.getElementById('surname').value;
	var pass = document.getElementById('pass').value;
	var mailAdress = document.getElementById('mailAdress').value;
	name = name.replace(/\s/g, '');
	surname = surname.replace(/\s/g, '');
	pass = pass.replace(/\s/g, '');
	mailAdress = mailAdress.replace(/\s/g, '');
	if ( (pass.length > 4) && (mailAdress.indexOf('@') != -1) ) {
		checkForm.innerHTML = 'Форма заполнена корректно.'
	}
	else {
		checkForm.innerHTML = 'Заполните форму правильно.'
	}
}


// Task 6

var symbolCode = document.getElementById('symbolCode');

document.getElementById('b6').onclick = initialiseSymbolCode;
function initialiseSymbolCode () {
	var teg = document.getElementById('i6').value;
	if (teg.length < 2) {
		symbolCode.innerHTML = 'Код символа - ' + teg.charCodeAt(0);
	}
	else {
		symbolCode.innerHTML = 'Вы ввели больше одного символа';
	}
}