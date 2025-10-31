/**
 * Minimal JavaScript for enhanced animations
 * This script adds subtle interactive elements while keeping CSS as the star
 * Respects user motion preferences for accessibility
 */

document.addEventListener('DOMContentLoaded', () => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Add random twinkling to stars
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        if (!prefersReducedMotion) {
            const randomDelay = Math.random() * 2;
            star.style.animationDelay = `${randomDelay}s`;
            
            // Random position variation
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 200;
            star.style.left = `${randomX}%`;
            star.style.top = `${randomY}px`;
        }
    });

    // Enhanced pumpkin light flicker
    const pumpkinLight = document.querySelector('.pumpkin-light');
    if (pumpkinLight && !prefersReducedMotion) {
        setInterval(() => {
            const intensity = 0.7 + Math.random() * 0.3;
            pumpkinLight.style.opacity = intensity;
        }, 200);
    }

    // Random bat flight patterns
    const bats = document.querySelectorAll('.bat');
    bats.forEach((bat, index) => {
        if (!prefersReducedMotion) {
            const randomDuration = 15 + Math.random() * 10;
            const randomDelay = Math.random() * 5;
            bat.style.animationDuration = `${randomDuration}s`;
            bat.style.animationDelay = `${randomDelay + index * 2}s`;
        }
    });
});
