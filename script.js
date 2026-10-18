// script.js — fake agency and transition into the game

document.getElementById('buy-btn').addEventListener('click', function () {
    const btn = this;
    btn.disabled = true;
    btn.textContent = 'Processing your request...';
    btn.style.background = '#666';

    // First 1.5s — normal
    setTimeout(() => {
        btn.textContent = 'Connecting to database...';
    }, 1500);

    // At 2.5s — glitches begin
    setTimeout(() => {
        btn.textContent = 'ERROR: client already registered';
        btn.style.background = '#000';
        btn.style.color = '#c9302c';
        document.body.style.filter = 'contrast(1.2) hue-rotate(-10deg)';
    }, 2500);

    // At 3.5s — "all good", but it's a lie
    setTimeout(() => {
        btn.textContent = 'Welcome home.';
        btn.style.background = '#000';
        btn.style.color = '#fff';
    }, 3500);

    // At 5s — transition into the game
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = '0';
        setTimeout(() => {
            window.location.href = 'house.html';
        }, 1000);
    }, 5000);
});

// Remember the "purchase" — for future visits
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
        const note = document.createElement('p');
        note.textContent = 'You have already purchased this house. The keys are yours.';
        note.style.cssText = 'text-align:center;color:#c9302c;font-weight:bold;margin-top:12px;';
        document.querySelector('.listing').appendChild(note);
    });
}
