// KODE GANTI MODE
function toggleBackgroundColor() {
    const body = document.body;
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
            
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
        body.style.color = 'white'; 
        header.style.backgroundColor = '#d8bfd8';
        header.style.color = 'black';
        nav.style.backgroundColor = 'purple';
        nav.style.color = 'white';
        footer.style.backgroundColor = '#d8bfd8';
        footer.style.color = 'black';
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
          }

// KODE ALERT
      document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome To My Portfolio! Beberapa file seperti foto mungkin masih loading.");
});

// KODE SCROLL MODEL VIEWER
// Ambil elemen model-viewer
const modelViewer = document.getElementById('model');

// Event listener untuk scroll
window.addEventListener('scroll', () => {
    // Hitung nilai baru berdasarkan posisi scroll
    const scrollY = window.scrollY;
    const newOrbitX = scrollY * 0.1; // Tambah 0.1 derajat untuk setiap piksel scroll
    const clampedOrbitX = newOrbitX % 360; // Kembalikan ke 0 setiap kelipatan 360

    // Update nilai camera-orbit
    modelViewer.setAttribute('camera-orbit', `${clampedOrbitX}deg 70deg`);
});

// KODE POSITION FIXED TO FOOTER
    // Mendapatkan elemen yang akan dipantau
    const fixedElement = document.getElementById('fixedElement');
    const footer = document.getElementById('footer');

    // Membuat observer
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

    // Mengamati elemen footer
    observer.observe(footer);
