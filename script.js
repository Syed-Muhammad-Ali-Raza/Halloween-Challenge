document.addEventListener('DOMContentLoaded', () => {

    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        const randomDelay = Math.random() * 2;
        star.style.animationDelay = `${randomDelay}s`;
        
        // Random position variation
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 200;
        star.style.left = `${randomX}%`;
        star.style.top = `${randomY}px`;
    });

    const pumpkinLight = document.querySelector('.pumpkin-light');
    if (pumpkinLight) {
        setInterval(() => {
            const intensity = 0.7 + Math.random() * 0.3;
            pumpkinLight.style.opacity = intensity;
        }, 200);
    }

    const bats = document.querySelectorAll('.bat');
    bats.forEach((bat, index) => {
        const randomDuration = 15 + Math.random() * 10;
        const randomDelay = Math.random() * 5;
        bat.style.animationDuration = `${randomDuration}s`;
        bat.style.animationDelay = `${randomDelay + index * 2}s`;
    });
});
