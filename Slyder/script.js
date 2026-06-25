const prevBtn = document.getElementById('knop');
const nextBtn = document.getElementById('knops');
const firstSlide = document.querySelector('#fr');
const secondSlide = document.querySelector('#sr');

function toggleSlides() {
    firstSlide.classList.toggle('est');
    secondSlide.classList.toggle('est');
}

prevBtn.addEventListener('click', toggleSlides);
nextBtn.addEventListener('click', toggleSlides);