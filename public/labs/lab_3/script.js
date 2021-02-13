/* Put your javascript in here */

let count = 3;
const FIRST_INDEX = 0;
let position = 0;
let array1 = [];

function rotateCarousel(){
    const images = document.querySelectorAll('.imageClass');
    const imageArray = Array.from(images);

    array1.forEach((element) => {
        console.log(element);
     })

    carousel.querySelectorAll('arrow left')
    if (position > FIRST_INDEX){
        position -= count;
    }
     
    carousel.querySelectorAll('arrow right')
    if (position <= 7 ){
        position += count;
    }
}

function onLoadOfPage() {
	document.addEventListener('click', (event) => {
	  rotateCarousel()
  })
}

window.onload = onLoadOfPage;