const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const countSlide = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlideIndex = 0;

sidebar.style.top = `-${(countSlide-1)*100}vh`;

upButton.addEventListener('click', () => {
    changeSlide('up')
})

downButton.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === countSlide) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = countSlide - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${(activeSlideIndex * height)}px)`;
    sidebar.style.transform = `translateY(${(activeSlideIndex * height)}px)`;
}