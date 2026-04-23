document.querySelectorAll('.card-base').forEach(card => {
    card.addEventListener('click', () => {
        card.parentElement.querySelector('.card-content').classList.toggle('open');
        card.parentElement.querySelector('.card-content').classList.toggle('closed');
    });
});

document.querySelectorAll('.tier').forEach(tier => {
    tier.querySelector('.tier-name').addEventListener('click', () => {
        tier.querySelector('.tier-content').classList.toggle('open');
        tier.querySelector('.tier-content').classList.toggle('closed');
    });
});

document.querySelectorAll('.options-btn').forEach(btn => {
    const id = btn.id;
    btn.addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(card => {
            if (id != "All") {
                if (card.classList.contains(id)) {
                    card.classList.remove('closed');
                    if (!card.classList.contains('open')) {
                        card.classList.add('open');
                    }
                }
                else if (!card.classList.contains('closed')) {
                    card.classList.add('closed');
                    card.classList.remove('open');
                }
            }
            else if (card.classList.contains('closed')) {
                card.classList.remove('closed');
                card.classList.add('open');
            }
        });
    });
});