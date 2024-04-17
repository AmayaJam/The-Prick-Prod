document.querySelector('.third-button').addEventListener('click', function () {
    document.querySelector('.animated-icon3').classList.toggle('open');
    document.querySelector('.collapse').classList.toggle('show');

    });

const header = document.getElementById('header');
const hoverSound = document.getElementById('hover-sound');
    
header.addEventListener('mouseover', () => {
    hoverSound.currentTime = 0; // Reset the sound to the beginning
    hoverSound.play();
    });

// Wait for the page to load
window.addEventListener('load', function() {
    // Hide the loading screen
    document.querySelector('.loading-screen').style.display = 'none';
    // Show the content
    document.getElementById('content').style.display = 'block';
});

window.addEventListener('scroll', function() {
    // Get the image element
    const img = document.getElementById('scrollingImg');
    // Calculate the vertical scroll position of the page
    const scrollPosition = window.scrollY;
    // Move the image element from left to right based on the scroll position
    img.style.left = `${50 - scrollPosition * 1}%`; // Adjust the factor to control the speed of parallax effect
});

