// 1. Inisialisasi AOS
AOS.init({ once: false, mirror: true, duration: 1000, offset: 100 });

// 2. Typewriter Effect
const textElement = document.querySelector('.description');
const textToType = "The best way to explain about what I'm doing. Building digital experiences with code and creativity.";
let index = 0;
function typeWriter() {
    if (index < textToType.length) {
        if (index === 0) textElement.innerHTML = ""; 
        textElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// 3. 3D Tilt Effect
const cards = document.querySelectorAll('.glass-card');
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const xRotation = -((e.clientY - rect.top - rect.height / 2) / 10); 
        const yRotation = (e.clientX - rect.left - rect.width / 2) / 10;
        card.style.transform = `perspective(500px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        card.style.borderColor = '#7f42a7';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    });
});

// 4. Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

/* =========================================
   MUSIC PLAYER: PAKSA PUTAR (BRUTE FORCE)
   ========================================= */
const music = document.getElementById("bg-music");
const musicIcon = document.getElementById("music-icon-spin");
const musicText = document.getElementById("music-text");
let isPlaying = false;

function setPlayStatus(play) {
    if (play) {
        music.play().then(() => {
            isPlaying = true;
            musicIcon.classList.add("spin-animation");
            musicText.innerText = "Pause Music";
        }).catch(e => console.log("Gagal autoplay"));
    } else {
        music.pause();
        isPlaying = false;
        musicIcon.classList.remove("spin-animation");
        musicText.innerText = "Play Music";
    }
}

function toggleMusic() {
    setPlayStatus(!isPlaying);
}

// JALANKAN SAAT WEBSITE DIBUKA
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1500);

    // 1. Coba Putar Langsung
    setPlayStatus(true);

    // 2. Kalau Gagal, Paksa Putar Saat Klik Pertama di Mana Saja
    document.body.addEventListener('click', () => {
        if (!isPlaying) setPlayStatus(true);
    }, { once: true });
});