// KODE GANTI MODE
function toggleBackgroundColor() {
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    
    // Pastikan elemen-elemen ada sebelum mengubah properti
    if (body && header && nav && footer) {
        if (body.style.backgroundColor === 'white') {
            body.style.backgroundColor = 'black';
            body.style.color = 'white'; 
            header.style.backgroundColor = '#d8bfd8';
            header.style.color = 'white';
            nav.style.backgroundColor = 'purple';
            nav.style.color = 'white';
            footer.style.backgroundColor = '#d8bfd8';
            footer.style.color = 'white';
        } else {
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
            header.style.backgroundColor = '#0066eb';
            header.style.color = 'white';
            nav.style.backgroundColor = '#000dc6';
            nav.style.color = 'white';
            footer.style.backgroundColor = '#0066eb';
            footer.style.color = 'white';
        }
    } else {
        console.warn("Beberapa elemen tidak ditemukan.");
    }
}

// KODE ALERT
document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome To My Portfolio! Beberapa file seperti foto mungkin masih loading.");
});

// KODE SCROLL MODEL VIEWER
const modelViewer = document.getElementById('model');

if (modelViewer) {
    let lastScrollY = 0; // Variabel untuk debounce

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        if (Math.abs(scrollY - lastScrollY) > 5) { // Hanya jalankan jika ada perubahan signifikan
            const newOrbitX = scrollY * 0.1; // Tambah 0.1 derajat untuk setiap piksel scroll
            const clampedOrbitX = newOrbitX % 360; // Kembalikan ke 0 setiap kelipatan 360
            modelViewer.setAttribute('camera-orbit', `${clampedOrbitX}deg 70deg`);
            lastScrollY = scrollY;
        }
    });
} else {
    console.warn("Elemen model-viewer tidak ditemukan.");
}

// KODE POSITION FIXED TO FOOTER
const fixedElement = document.getElementById('fixedElement');
const footer = document.getElementById('footer');

if (fixedElement && footer) {
    // Fallback untuk IntersectionObserver
    const isIntersectionObserverSupported = 'IntersectionObserver' in window;

    if (isIntersectionObserverSupported) {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Jika footer masuk ke viewport, ubah elemen fixed menjadi absolute
                    fixedElement.style.position = 'absolute';
                    fixedElement.style.bottom = `${footer.offsetHeight}px`;
                } else {
                    // Jika footer keluar dari viewport, kembalikan elemen ke posisi fixed
                    fixedElement.style.position = 'fixed';
                    fixedElement.style.bottom = '20px';
                }
            },
            {
                root: null, // Menggunakan viewport sebagai area pantauan
                threshold: 0, // Memantau ketika bagian terkecil footer masuk viewport
            }
        );

        observer.observe(footer);
    } else {
        console.warn("IntersectionObserver tidak didukung oleh browser ini.");
        // Fallback sederhana jika IntersectionObserver tidak didukung
        window.addEventListener('scroll', () => {
            const footerRect = footer.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            if (footerRect.top <= viewportHeight) {
                fixedElement.style.position = 'absolute';
                fixedElement.style.bottom = `${footer.offsetHeight}px`;
            } else {
                fixedElement.style.position = 'fixed';
                fixedElement.style.bottom = '20px';
            }
        });
    }
} else {
    console.warn("Elemen fixedElement atau footer tidak ditemukan.");
}
