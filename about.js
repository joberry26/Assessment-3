console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form submitted successfully!!")
	// console.log('form submit'); instead should alert user the form was submitted successfully. Use aLert function
}

function pictureTime(evt) {
	evt.preventDefault();
	alert("Prrrr D good!")
}


let form = document.querySelector('form#contact');
let kitty = document.querySelector('#kitty')

form.addEventListener('submit', handleSubmit);
kitty.addEventListener('mouseover', pictureTime);