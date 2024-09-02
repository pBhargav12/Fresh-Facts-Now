document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('welcome-popup');
    const readButton = document.getElementById('read-btn');

    // Show the popup
    popup.style.display = 'flex';

    // Hide the popup when the "Read" button is clicked
    readButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
