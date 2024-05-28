// script.js
let currentIndex = 0;
const items = document.querySelectorAll('.news_cont');
const totalItems = items.length;
const visibleItems = 3;
const itemWidth = 240;
const newsContainer = document.querySelector('.container_news');

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - visibleItems + totalItems) % totalItems;
    updateSlider();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + visibleItems) % totalItems;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * (itemWidth + 20); // 20px это отступы (10px с каждой стороны)
    newsContainer.style.transform = `translateX(${offset}px)`;
}
