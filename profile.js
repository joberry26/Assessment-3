function myColor(evt) {
	evt.preventDefault();
	alert("Blue - nuff said")
}


let favColor = document.querySelector("#color");
favColor.addEventListener('click', myColor);

function myPlace(evt) {
	evt.preventDefault();
	alert("Where my loved ones are")
}


let favPlace = document.querySelector("#place");
favPlace.addEventListener('click', myPlace);

function myRitual(evt) {
	evt.preventDefault();
	alert("The making of a PB & J")
}


let favRitual = document.querySelector("#ritual");
favRitual.addEventListener('click', myRitual);
