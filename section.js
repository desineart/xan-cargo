document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-item');
    const imageContainers = document.querySelectorAll('.service-image-container');
    const descriptions = document.querySelectorAll('.service-description-text p');
    const shadows = document.querySelectorAll('.service-shadow');
  
    serviceItems.forEach(item => {
      item.addEventListener('click', () => {
        // Удаляем класс "active" у всех элементов и скрываем их содержимое
        serviceItems.forEach(i => i.classList.remove('active'));
        imageContainers.forEach(container => container.style.display = 'none');
        descriptions.forEach(description => description.style.display = 'none');
        shadows.forEach(shadow => shadow.style.opacity = '0');
  
        // Активируем выбранный элемент
        item.classList.add('active');
        const target = item.getAttribute('data-target');
        document.querySelector(`#${target}-container`).style.display = 'block';
        document.querySelector(`.${target}-description`).style.display = 'block';
        document.querySelector(`#${target}shadow`).style.opacity = '1';
  
        // Добавляем анимацию, если необходимо
        if (target === 'air') {
          document.querySelector(`#${target}`).classList.add('animate');
        } else {
          document.querySelector(`#${target}`).classList.remove('animate');
        }
      });
    });
  
    // Автоматически активируем первую услугу при загрузке страницы
    if (serviceItems.length > 0) {
      serviceItems[0].click();
    }
  });
  