// Функция для проверки, виден ли элемент на экране
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления/удаления класса .highlight при приближении к центру экрана
function handleCirclePriorAnimation() {
    const circlePriors = document.querySelectorAll('.circle-prior');
    
    circlePriors.forEach((circlePrior) => {
        if (isElementInViewport(circlePrior)) {
            circlePrior.classList.add('highlight');
        } else {
            circlePrior.classList.remove('highlight');
        }
    });
}

// Отслеживание события прокрутки страницы для вызова анимации
window.addEventListener('scroll', handleCirclePriorAnimation);
window.addEventListener('resize', handleCirclePriorAnimation);

// Вызов анимации при загрузке страницы
handleCirclePriorAnimation();
