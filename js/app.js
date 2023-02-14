const counter = document.querySelector('#counter');
const prevButton =  document.querySelector('.prevBtn');
const nextButton =  document.querySelector('.nextBtn');
let current = 0;


const minCounter = () => {
    current--;
    counter.textContent = current;
    console.log('min' + current);
}

const maxCounter = () => {
    current++;
    counter.textContent = current;
    console.log('max' + current);
}

prevButton.addEventListener('click', minCounter);
nextButton.addEventListener('click', maxCounter);
