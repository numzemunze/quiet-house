document.getElementById('buy-btn').addEventListener('click', function () {
    const btn = this;
    btn.disabled = true;
    btn.textContent = 'Processing...';
    btn.style.background = '#666';

    setTimeout(() => { btn.textContent = 'Connecting to database...'; }, 800);

    setTimeout(() => {
        btn.textContent = 'ERROR: client already registered';
        btn.style.background = '#000';
        btn.style.color = '#c9302c';
        document.body.style.filter = 'contrast(1.2) hue-rotate(-10deg)';
    }, 1600);

    setTimeout(() => {
        btn.textContent = 'Welcome home.';
        btn.style.background = '#000';
        btn.style.color = '#fff';
        
        // Начинаем затемнение
        document.body.style.transition = 'opacity 1.5s';
        document.body.style.opacity = '0';
    }, 2400);

    // Переход через 3.5 секунды (вместо 5)
    setTimeout(() => {
        window.location.href = 'house.html';
    }, 3500);
});

// Проверка на повторный заход
if (localStorage.getItem('bought_house') === 'true') {
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.getElementById('buy-btn');
        if (btn) {
            btn.textContent = 'Return Home';
            btn.style.background = '#000';
            btn.addEventListener('click', (e) => {
                e.stopImmediatePropagation();
                window.location.href = 'house.html';
            });
        }
    });
}
