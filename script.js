// Переменные
const truck = document.querySelector('.truck');
const timeline = document.querySelector('.timeline-container');
const timelineRect = timeline.getBoundingClientRect();
const timelineStart = timelineRect.top + window.scrollY;
const timelineEnd = timelineStart + timeline.offsetHeight - truck.offsetHeight;

let lastScrollY = window.scrollY;
let animationFrameId;

// Функция анимации грузовика
function animateTruck() {
    const scrollY = lastScrollY + window.innerHeight / 5;
    let truckPosition = scrollY - timelineStart;

    if (scrollY < timelineStart) {
        truckPosition = 0;
    } else if (scrollY > timelineEnd) {
        truckPosition = timeline.offsetHeight - truck.offsetHeight;
    }

    truck.style.transform = `translateX(-50%) translateY(${truckPosition}px)`;

    animationFrameId = requestAnimationFrame(animateTruck);
}

// Обработчик события прокрутки
function onScroll() {
    lastScrollY = window.scrollY;
    if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(animateTruck);
    }
}

// Добавляем слушатель события прокрутки
window.addEventListener('scroll', onScroll);

// Вызываем первую анимацию грузовика
animateTruck();
