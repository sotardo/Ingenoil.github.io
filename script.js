function toggleOverlay(clickedCard) {
    var overlay = clickedCard.querySelector('.overlay');

    // Si la tarjeta ya fue tocada, oculta la overlay volviendo al estado original
    if (clickedCard.classList.contains('touched')) {
        overlay.style.bottom = '-100%';
        overlay.style.transform = 'translateY(0)';
        clickedCard.classList.remove('touched');
    } else {
        // Si no ha sido tocada, muestra la overlay
        overlay.style.bottom = '0';
        overlay.style.transform = 'translateY(0)';
        
        // Agrega la clase 'touched'
        clickedCard.classList.add('touched');
    }
}