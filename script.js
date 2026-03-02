document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        cards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();
            
            if (title.includes(searchString)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
