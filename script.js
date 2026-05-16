// Mengambil elemen-elemen yang dibutuhkan
const openBtn = document.getElementById('open-btn');
const heartBtn = document.getElementById('heart-trigger');
const backsound = document.getElementById('backsound');
const photoArea = document.getElementById('photo-area');
const startScreen = document.getElementById('start-screen');
const mainContent = document.getElementById('main-content');
const rainContainer = document.getElementById('heart-rain-container');

/**
 * 1. Fungsi untuk membuat efek hujan (Hati Pink & Bintang Putih)
 */
function createRainEffect() {
    const item = document.createElement('div');
    
    // Tentukan secara acak apakah muncul Hati atau Bintang
    const isHeart = Math.random() > 0.5; 
    
    if (isHeart) {
        item.innerText = '♡';
        item.classList.add('falling-heart');
    } else {
        item.innerText = '☆';
        item.classList.add('falling-star');
    }
    
    // Posisi horizontal acak (0 - 100vw)
    item.style.left = Math.random() * 100 + "vw";
    
    // Kecepatan jatuh acak antara 3 sampai 7 detik
    const duration = Math.random() * 4 + 3;
    item.style.animationDuration = duration + "s";
    
    // Ukuran teks acak (10px - 30px)
    item.style.fontSize = Math.random() * 20 + 10 + "px";
    
    // Transparansi acak agar terlihat lebih natural
    item.style.opacity = Math.random() * 0.8 + 0.2;

    rainContainer.appendChild(item);

    // Hapus elemen setelah animasi selesai agar browser tidak berat
    setTimeout(() => {
        item.remove();
    }, duration * 1000);
}

/**
 * 2. Event Listener saat tombol "Ada Pesan" diklik
 */
openBtn.addEventListener('click', function() {
    // Sembunyikan layar awal dan munculkan konten utama
    startScreen.classList.add('hidden');
    mainContent.classList.remove('hidden');
    
    // Memutar musik (Backsound)
    backsound.play().catch(error => {
        console.log("Musik tidak bisa autoplay, tapi sudah dicoba putar.");
    });

    // Mulai jalankan hujan hati & bintang setiap 200ms
    setInterval(createRainEffect, 200); 
});

/**
 * 3. Event Listener saat Lope Denyut diklik
 */
heartBtn.addEventListener('click', function() {
    // Cek apakah foto sedang sembunyi atau tidak
    if (photoArea.style.display === 'block') {
        photoArea.style.display = 'none';
    } else {
        // Munculkan foto dengan animasi yang sudah ada di CSS
        photoArea.style.display = 'block';
            }
});
