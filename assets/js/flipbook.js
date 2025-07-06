document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.hearts-container');

    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerText = '❤️';

      // Random horizontal position
      heart.style.left = Math.random() * 100 + 'vw';
      // Random fall speed
      heart.style.animationDuration = 3 + Math.random() * 3 + 's';
      // Random start delay
      heart.style.animationDelay = Math.random() * 2 + 's';

      container.appendChild(heart);

      // Remove the heart after falling
      setTimeout(() => heart.remove(), 7000);
    }

    // Create a heart every 300ms
    setInterval(createHeart, 300);
  });

