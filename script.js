let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

// Animasi saat scroll
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1.5 + 'px';
});

// Animasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    // Animasi fade-in untuk elemen header
    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transform = 'translateY(-20px)';

    setTimeout(() => {
        header.style.transition = 'opacity 1s ease, transform 1s ease';
        header.style.opacity = '1';
        header.style.transform = 'translateY(0)';
    }, 500);

    // Animasi untuk gambar-gambar parallax
    const parallaxImages = document.querySelectorAll('.parallax img');
    parallaxImages.forEach((img, index) => {
        img.style.opacity = '0';
        setTimeout(() => {
            img.style.transition = `opacity 1.5s ease ${index * 0.2}s`;
            img.style.opacity = '1';
        }, 800 + (index * 100));
    });



    // Animasi typing effect untuk teks
    const welcomeText = document.getElementById('text');
    const originalText = welcomeText.textContent;
    welcomeText.textContent = '';
    welcomeText.style.opacity = '1';

    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            welcomeText.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Mulai animasi typing setelah delay
    setTimeout(typeWriter, 1500);

    // Teks berubah-ubah untuk span
    const phrases = ['KARLLO', 'FRONTEND DEV', 'WEB DEVELOPER', 'DESIGNER', 'PROGRAMMER'];
    const multipleText = document.querySelector('.multiple-text');
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = '';
    let isDeleting = false;
    let isEnd = false;

    function type() {
        isEnd = false;

        // Set the current phrase to be typed
        const fullPhrase = phrases[phraseIndex];

        if (!isDeleting) {
            // Typing effect
            currentPhrase = fullPhrase.substring(0, letterIndex + 1);
            multipleText.textContent = currentPhrase;
            letterIndex++;

            // If we've reached the end of the word
            if (letterIndex === fullPhrase.length) {
                isEnd = true;
                isDeleting = true;
                // Wait a bit before starting to delete
                setTimeout(type, 1500);
                return;
            }
        } else {
            // Deleting effect
            currentPhrase = fullPhrase.substring(0, letterIndex - 1);
            multipleText.textContent = currentPhrase;
            letterIndex--;

            // If we've deleted the entire word
            if (letterIndex === 0) {
                isDeleting = false;
                phraseIndex++;

                // If we've gone through all phrases, restart
                if (phraseIndex === phrases.length) {
                    phraseIndex = 0;
                }
            }
        }

        // Set typing speed
        const typeSpeed = isDeleting ? 80 : 150;
        // Speed up when deleting
        const speedUp = isEnd ? typeSpeed * 4 : typeSpeed;

        setTimeout(type, speedUp);
    }

    // Start the typing effect after a delay
    setTimeout(type, 2000);
});