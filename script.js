window.addEventListener('load', () => {
  // Splash screen disappearance after 5 seconds (3s animation + 2s fade out)
  setTimeout(() => {
      // Sembunyikan splash screen setelah animasi keluar selesai
      document.getElementById('splash-screen').style.display = 'none';

      // Tampilkan konten utama dan navbar
      document.getElementById('main-content').style.display = 'block';  // Tampilkan halaman utama setelah splash screen
      document.getElementById('navbar').style.opacity = 1;  // Navbar muncul setelah splash screen hilang
      document.getElementById('navbar').style.transition = 'opacity 1s'; // Smooth transition saat navbar muncul
  }, 5000);  // Tunda selama 5 detik (3s animasi + 2s fade out)
});



document.querySelector('.map').addEventListener('click', function() {
this.classList.toggle('active');
});
// Fungsi untuk toggle menu dan tombol hamburger
function toggleMenu() {
  const menu = document.querySelector('.navbar-menu');
  const hamburger = document.querySelector('.navbar-toggle');
  
  // Toggle kelas 'active' pada menu dan tombol hamburger
  menu.classList.toggle('active');
  hamburger.classList.toggle('active');
}



function toggleMenu() {
  const menu = document.getElementById('navbarMenu');
  menu.classList.toggle('active');
}
function toggleFlip(card) {
card.classList.toggle('flipped');
}

// Toggle menu untuk perangkat mobile
function toggleMenu() {
const menu = document.getElementById('navbarMenu');
menu.classList.toggle('active');
}
let currentPillarIndex = 0;
let currentCardIndex = 0;
let currentIndexTargets = 0; // Indeks awal aktif untuk targets

// Fungsi untuk navigasi pilar
function showPillar(direction) {
const pillars = document.querySelectorAll('.pillar');

// Periksa apakah layar dalam kondisi mobile
if (window.innerWidth > 1064) {
  pillars.forEach(pillar => pillar.classList.add('active')); // Tampilkan semua pilar di desktop
  return;
}

// Sembunyikan pilar aktif saat ini
pillars[currentPillarIndex].classList.remove('active');

// Hitung indeks baru
currentPillarIndex = (currentPillarIndex + direction + pillars.length) % pillars.length;

// Tampilkan pilar baru
pillars[currentPillarIndex].classList.add('active');
}

// Fungsi untuk navigasi flip card pada section Direction
function showDirectionCard(direction) {
const directionCards = document.querySelectorAll('#direction .flip-card');

// Sembunyikan card aktif saat ini
directionCards[currentCardIndex].classList.remove('active');

// Hitung indeks baru
currentCardIndex = (currentCardIndex + direction + directionCards.length) % directionCards.length;

// Tampilkan card baru
directionCards[currentCardIndex].classList.add('active');
}

// Fungsi untuk navigasi flip card pada section Targets
function updateTargets(indexChange) {
const targetCards = document.querySelectorAll('#targets .flip-card');

// Periksa jika di mobile mode
if (window.innerWidth > 768) {
  targetCards.forEach(card => card.classList.add('active')); // Semua aktif di desktop
  return;
}

// Hapus kelas aktif pada card saat ini
targetCards[currentIndexTargets].classList.remove('active');

// Hitung indeks baru
currentIndexTargets = (currentIndexTargets + indexChange + targetCards.length) % targetCards.length;

// Tambahkan kelas aktif pada card baru
targetCards[currentIndexTargets].classList.add('active');
}

// Event listener untuk resize
window.addEventListener('resize', () => {
const pillars = document.querySelectorAll('.pillar');

if (window.innerWidth > 1065) {
  // Tampilkan semua pilar di desktop
  pillars.forEach(pillar => pillar.classList.add('active'));
} else {
  // Tampilkan hanya pilar aktif di mobile
  pillars.forEach((pillar, index) => {
    pillar.classList.toggle('active', index === currentPillarIndex);
  });
}

// Handle resize untuk bagian Targets
const targetCards = document.querySelectorAll('#targets .flip-card');
if (window.innerWidth > 768) {
  targetCards.forEach(card => card.classList.add('active'));
} else {
  targetCards.forEach((card, index) => {
    card.classList.toggle('active', index === currentIndexTargets);
  });
}
});

// Event listener untuk tombol navigasi flip card pada Direction
document.addEventListener('DOMContentLoaded', () => {
const directionCards = document.querySelectorAll('#direction .flip-card');
const prevBtnDirection = document.querySelector('#direction .prev-btn');
const nextBtnDirection = document.querySelector('#direction .next-btn');

// Atur card pertama sebagai aktif
if (directionCards.length > 0) {
  directionCards[currentCardIndex].classList.add('active');
}

// Event listener untuk tombol navigasi flip card pada Direction
prevBtnDirection.addEventListener('click', () => showDirectionCard(-1));
nextBtnDirection.addEventListener('click', () => showDirectionCard(1));

// Inisialisasi untuk bagian Targets
const targetCards = document.querySelectorAll('#targets .flip-card');
if (targetCards.length > 0) {
  targetCards[currentIndexTargets].classList.add('active');
}

// Tambahkan event listener untuk tombol navigasi Targets
const prevBtnTargets = document.querySelector('#targets .prev-btn');
const nextBtnTargets = document.querySelector('#targets .next-btn');

if (prevBtnTargets && nextBtnTargets) {
  prevBtnTargets.addEventListener('click', () => updateTargets(-1));
  nextBtnTargets.addEventListener('click', () => updateTargets(1));
}
});

// Fungsi untuk navigasi flip card pada section Targets
function updateTargets(indexChange) {
const targetCards = document.querySelectorAll('#targets .flip-card');

// Periksa jika di mobile mode
if (window.innerWidth > 768) {
  targetCards.forEach(card => card.classList.add('active')); // Semua aktif di desktop
  return;
}

// Hapus kelas aktif pada card saat ini
targetCards[currentIndexTargets].classList.remove('active');

// Hitung indeks baru
currentIndexTargets = (currentIndexTargets + indexChange + targetCards.length) % targetCards.length;

// Tambahkan kelas aktif pada card baru
targetCards[currentIndexTargets].classList.add('active');
}



let currentIndexDirection = 0; // Indeks awal aktif
const directionCards = document.querySelectorAll('#direction .flip-card');
const directionPrevBtn = document.querySelector('#direction .prev-btn');
const directionNextBtn = document.querySelector('#direction .next-btn');

function updateDirection(indexChange) {
  // Periksa jika di mobile mode
  if (window.innerWidth > 768) {
      directionCards.forEach(card => card.classList.add('active')); // Semua aktif di desktop
      return;
  }

  // Hapus kelas aktif pada card saat ini
  directionCards[currentIndexDirection].classList.remove('active');

  // Hitung indeks baru
  currentIndexDirection =
      (currentIndexDirection + indexChange + directionCards.length) %
      directionCards.length;

  // Tambahkan kelas aktif pada card baru
  directionCards[currentIndexDirection].classList.add('active');
}

// Inisialisasi untuk bagian Direction
document.addEventListener('DOMContentLoaded', () => {
  if (directionCards.length > 0) {
      directionCards[currentIndexDirection].classList.add('active');
  }
});

// Event listener untuk tombol navigasi di bagian Direction
directionPrevBtn.addEventListener('click', () => updateDirection(-1));
directionNextBtn.addEventListener('click', () => updateDirection(1));

// Handle resize untuk bagian Direction
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
      directionCards.forEach(card => card.classList.add('active'));
  } else {
      directionCards.forEach((card, index) => {
          card.classList.toggle('active', index === currentIndexDirection);
      });
  }
});

document.querySelectorAll('.map-btn').forEach(button => {
  button.addEventListener('click', function () {
      const mapDesc = document.getElementById('mapDescription');
      const fullDescText = document.getElementById('fullDescText');

      // Mendapatkan data dari atribut tombol
      const mapImage = this.getAttribute('data-map');
      const desc = this.getAttribute('data-desc');
      const fullDesc = this.getAttribute('data-full-desc');
      const bgImageMap = this.getAttribute('data-bg-map');  // Latar belakang untuk map description
      const bgImageFull = this.getAttribute('data-bg-full'); // Latar belakang untuk full description

      // Menetapkan gambar latar belakang untuk elemen #mapDescription
      mapDesc.style.backgroundImage = `url('DESTINASI/${bgImageMap}')`;

      // Menetapkan gambar latar belakang untuk elemen #fullDescText
      fullDescText.style.backgroundImage = `url('DESTINASI/${bgImageFull}')`;

      // Menampilkan konten deskripsi untuk mapDescription
      mapDesc.innerHTML = `<h3>${this.innerText}</h3><p>${desc}</p>`;

      // Menampilkan deskripsi lengkap untuk fullDescText
      fullDescText.innerHTML = `<h3>${this.innerText}</h3><p><strong>Deskripsi Lengkap:</strong> ${fullDesc}</p>`;

      // Menampilkan elemen-elemen tersebut
      mapDesc.style.display = 'block';
      fullDescText.style.display = 'block';
  });
});

// Mendapatkan elemen yang dibutuhkan
const mapDisplay = document.getElementById('mapDisplay');
const mapDescription = document.getElementById('mapDescription');
const mapDescText = document.getElementById('mapDescText');
const fullDescText = document.getElementById('fullDescText');
const toggleDescBtn = document.getElementById('toggleDescBtn');
const hiddenContent = document.getElementById('hiddenContent');
const buttons = document.querySelectorAll('.map-btn');

let activeButton = null; // Untuk melacak tombol aktif
const defaultMapImage = 'assets/MAP TRANSPARENT.png'; // Gambar default

// Set gambar awal saat halaman dimuat
mapDisplay.style.backgroundImage = `url('${defaultMapImage}')`;

// Menangani klik tombol destinasi
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Cegah event bubbling agar klik pada tombol tidak memengaruhi gambar atau elemen lain
        event.stopPropagation();

        // Periksa apakah tombol yang sama diklik lagi (untuk toggle)
        if (activeButton === button) {
            // Jika tombol yang sama diklik lagi, kembalikan ke gambar default tanpa animasi
            resetMapDisplay();
        } else {
            // Jika ada tombol yang aktif sebelumnya, kembalikan ke default
            if (activeButton) {
                resetMapDisplay();
            }

            // Tampilkan konten baru dengan animasi
            const mapImage = button.getAttribute('data-map');
            const description = button.getAttribute('data-desc');
            const fullDescription = button.getAttribute('data-full-desc'); // Ambil deskripsi lengkap
            const bgImageMap = button.getAttribute('data-bg-map');  // Latar belakang untuk map description
            const bgImageFull = button.getAttribute('data-bg-full'); // Latar belakang untuk full description

            // Perbarui gambar dengan animasi
            mapDisplay.style.transition = 'background-image 0.5s ease-in-out'; // Set transisi gambar
            mapDisplay.style.backgroundImage = `url('assets/${mapImage}')`;
            mapDisplay.style.filter = 'brightness(1.3)'; // Tingkatkan kecerahan gambar yang aktif

            // Perbarui deskripsi singkat
            mapDescText.textContent = description;

            // Perbarui deskripsi lengkap
            fullDescText.textContent = fullDescription;

            // Menetapkan gambar latar belakang untuk elemen #mapDescription
            mapDescription.style.backgroundImage = `url('DESTINASI/${bgImageMap}')`;

            // Menetapkan gambar latar belakang untuk elemen #fullDescText
            fullDescText.style.backgroundImage = `url('DESTINASI/${bgImageFull}')`;

            // Tampilkan deskripsi
            mapDescription.classList.remove('hidden');
            mapDescription.style.display = 'block'; // Tampilkan deskripsi
            fullDescText.style.display = 'block'; // Tampilkan deskripsi lengkap

            // Reset konten tersembunyi
            hiddenContent.style.display = 'none';
            toggleDescBtn.textContent = 'Tampilkan Penjelasan';

            // Menambahkan kelas 'active' untuk tombol yang dipilih
            button.classList.add('active');

            // Tandai tombol sebagai aktif
            activeButton = button;
        }
    });
});

// Fungsi untuk reset tampilan ke default
function resetMapDisplay() {
    mapDescription.classList.add('hidden');
    mapDescription.style.display = 'none'; // Sembunyikan deskripsi langsung
    fullDescText.style.display = 'none'; // Sembunyikan deskripsi lengkap
    mapDisplay.style.transition = 'none'; // Hapus animasi
    mapDisplay.style.backgroundImage = `url('${defaultMapImage}')`; // Gambar default
    mapDisplay.style.filter = 'brightness(1)'; // Kembali ke kecerahan normal

    // Hapus kelas 'active' dari tombol yang aktif
    if (activeButton) {
        activeButton.classList.remove('active');
    }

    // Reset tombol aktif
    activeButton = null;
}

// Menangani klik pada gambar (mapDisplay) agar tidak mengubah status tombol aktif
mapDisplay.addEventListener('click', function(event) {
    // Cegah event bubbling agar klik pada gambar tidak mempengaruhi tombol
    event.stopPropagation();
});

// Menangani klik pada tombol "Tampilkan Penjelasan"
toggleDescBtn.addEventListener('click', () => {
    // Periksa apakah hiddenContent sedang ditampilkan
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block'; // Tampilkan konten
        toggleDescBtn.textContent = 'Sembunyikan Penjelasan'; // Ubah teks tombol
    } else {
        hiddenContent.style.display = 'none'; // Sembunyikan konten
        toggleDescBtn.textContent = 'Tampilkan Penjelasan'; // Ubah teks tombol kembali
    }
});




const themeToggleIcon = document.getElementById('theme-toggle-icon');
const themeIcon = document.getElementById('theme-icon');

themeToggleIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.src = 'https://img.icons8.com/ios/50/ffffff/sun--v1.png';
    } else {
        themeIcon.src = 'https://img.icons8.com/ios/50/ffffff/moon-symbol.png';
    }
});



 // Komentar
 const commentIcon = document.getElementById('comment-icon');
 const commentSection = document.getElementById('comment-section');
 const closeComment = document.getElementById('close-comment');
 const commentInput = document.getElementById('comment-input');
 const submitComment = document.getElementById('submit-comment');
 const commentList = document.querySelector('.comment-list');

 // Tampilkan menu komentar saat ikon diklik
 commentIcon.addEventListener('click', () => {
     commentSection.classList.toggle('active');
     translateSection.classList.remove('active'); // Menyembunyikan menu translate
 });

 // Tutup menu komentar
 closeComment.addEventListener('click', () => {
     commentSection.classList.remove('active');
 });

 // Tambahkan komentar baru
 submitComment.addEventListener('click', () => {
     const commentText = commentInput.value.trim();
     if (commentText) {
         const newComment = document.createElement('div');
         newComment.classList.add('comment');
         newComment.innerHTML = `<strong>Kamu:</strong> ${commentText}`;
         commentList.appendChild(newComment);
         commentInput.value = ''; // Hapus teks di input
         commentList.scrollTop = commentList.scrollHeight; // Gulir ke komentar terbaru
     }
 });

 // Translate
 const translateIcon = document.getElementById('translate-icon');
 const translateSection = document.getElementById('translate-section');
 const closeTranslate = document.getElementById('close-translate');

 // Tampilkan menu translate saat ikon diklik
 translateIcon.addEventListener('click', () => {
     translateSection.classList.toggle('active');
     commentSection.classList.remove('active'); // Menyembunyikan menu komentar
 });

 // Tutup menu translate
 closeTranslate.addEventListener('click', () => {
     translateSection.classList.remove('active');
 });


 

// Data terjemahan untuk setiap bahasa (ID, EN, JA)
const translations = {
  id: {
    "menu-home": "Beranda",
    "menu-about": "Tentang",
    "menu-destination": "Destinasi",
    "menu-timeline": "Timeline",
    "menu-direction": "Arah Pembangunan",
    "menu-targets": "Sasaran Utama",
    "menu-vision": "Visi",
    // Hero Section
    "hero-title": "MASA DEPAN INDONESIA",
    heading: "MENUJU INDONESIA EMAS 2045",
    desc: "Indonesia Emas 2045 adalah visi untuk menjadikan Indonesia sebagai negara maju pada 100 tahun kemerdekaannya. Untuk mencapai sasaran tersebut, pemerintah telah menyusun Rencana Pembangunan Jangka Panjang Nasional (RPJPN) 2025-2045. Visi ini menekankan pada transformasi ekonomi, peningkatan infrastruktur, kualitas pendidikan, dan pengelolaan sumber daya alam yang berkelanjutan.",
    "pillar1-title": "Transformasi Ekonomi",
    "pillar1-desc": "Meningkatkan produktivitas dengan memperluas lapangan kerja dan memprioritaskan sektor strategis.",
    "pillar1-detail-title": "Transformasi Ekonomi - Detail",
    "pillar1-detail-desc": "Fokus pada sektor manufaktur, agrikultur, dan energi untuk memperkuat perekonomian Indonesia.",
    "pillar2-title": "Infrastruktur dan Wilayah",
    "pillar2-desc": "Membangun infrastruktur fisik dan mengembangkan wilayah berbasis keunggulan lokal.",
    "pillar2-detail-title": "Infrastruktur dan Wilayah - Detail",
    "pillar2-detail-desc": "Pembangunan jalan, transportasi publik, dan energi hijau untuk mendukung ekonomi yang berkelanjutan.",
    "pillar3-title": "Pendidikan",
    "pillar3-desc": "Menyiapkan pendidikan berbasis teknologi untuk meningkatkan keterampilan digital dan sains.",
    "pillar3-detail-title": "Pendidikan - Detail",
    "pillar3-detail-desc": "Meningkatkan akses pendidikan di seluruh pelosok negeri dengan menekankan penguasaan matematika dan teknologi.",
    "pillar4-title": "Pengelolaan Sumber Daya Alam",
    "pillar4-desc": "Melakukan pengelolaan sumber daya alam secara berkelanjutan dan mengoptimalkan kekayaan mineral.",
    "pillar4-detail-title": "Pengelolaan Sumber Daya Alam - Detail",
    "pillar4-detail-desc": "Transisi energi dan konservasi lingkungan sebagai respons terhadap perubahan iklim global.",
    "timeline-heading": "Timeline Perjalanan",
    "event-1945-title": "1945 Proklamasi Kemerdekaan Indonesia.",
    "event-1965-title": "1965 Gerakan 30 September dan perubahan politik besar.",
    "event-1998-title": "1998 Reformasi dan jatuhnya rezim Orde Baru.",
    "event-2020-title": "2020 Pandemi COVID-19 dan upaya pemulihan ekonomi.",
    "event-2045-title": "2045 Indonesia Emas: Menjadi negara maju dan sejahtera.",
    "direction-heading": "PEMBANGUNAN UNTUK MENCAPAI INDONESIA EMAS",
        "direction-paragraph": "Untuk mencapai sasaran ini, pemerintah telah merancang Rencana Pembangunan Jangka Panjang Nasional (RPJPN) 2025-2045. Beberapa inisiatif utama yang akan dijalankan antara lain:",
        "governance-reform-title": "Reformasi Tata Kelola Pemerintahan",
        "governance-reform-description": "Meningkatkan efisiensi birokrasi dan membangun kolaborasi lintas sektor antara pemerintah, swasta, dan masyarakat.",
        "governance-reform-detail-title": "Reformasi Tata Kelola Pemerintahan - Detail",
        "governance-reform-detail-description": "Digitalisasi pelayanan publik, pengurangan tumpang tindih regulasi, dan peningkatan transparansi serta akuntabilitas pemerintah.",
        "education-quality-title": "Peningkatan Kualitas Pendidikan",
        "education-quality-description": "Integrasi teknologi dalam pendidikan, fokus pada STEM, dan peningkatan akses pendidikan berkualitas.",
        "education-quality-detail-title": "Peningkatan Kualitas Pendidikan - Detail",
        "education-quality-detail-description": "Memperkenalkan teknologi dalam kurikulum, menyediakan pendidikan berkualitas di seluruh wilayah, serta meningkatkan keahlian vokasional untuk tenaga kerja masa depan.",
        "regional-development-title": "Pembangunan Wilayah Strategis",
        "regional-development-description": "Optimalisasi potensi geografis Indonesia dan pemberdayaan wilayah timur untuk pembangunan ekonomi.",
        "regional-development-detail-title": "Pembangunan Wilayah Strategis - Detail",
        "regional-development-detail-description": "Pembangunan kawasan ekonomi khusus, pusat logistik, serta investasi sektor unggulan seperti pariwisata dan perikanan di wilayah timur Indonesia.",
        "digital-ecosystem-title": "Mendorong Ekosistem Digital dan Start-Up",
        "digital-ecosystem-description": "Memperkuat wirausaha digital dan menyiapkan infrastruktur digital yang mendukung perkembangan ekonomi digital.",
        "digital-ecosystem-detail-title": "Mendorong Ekosistem Digital dan Start-Up - Detail",
        "digital-ecosystem-detail-description": "Memberikan dukungan pembiayaan, pengembangan pasar untuk start-up, dan membangun infrastruktur digital, seperti jaringan 5G di seluruh Indonesia.",
        "green-energy-title": "Pembangunan Energi Hijau",
        "green-energy-description": "Transisi menuju energi terbarukan untuk mencapai ketahanan energi dan pengurangan emisi karbon.",
        "green-energy-detail-title": "Pembangunan Energi Hijau - Detail",
        "green-energy-detail-description": "Peningkatan penggunaan pembangkit listrik tenaga surya, angin, dan bioenergi, serta pengurangan ketergantungan pada bahan bakar fosil untuk mencapai emisi karbon nol bersih pada 2060.",
        "targets-heading": "SASARAN UTAMA UNTUK MEWUJUDKAN INDONESIA EMAS 2045",
        "competitive-economy-title": "Ekonomi yang Berdaya Saing Tinggi",
        "competitive-economy-description": "Pertumbuhan ekonomi yang stabil, diversifikasi ekonomi, dan pengurangan ketergantungan pada sumber daya alam.",
        "competitive-economy-detail-title": "Ekonomi yang Berdaya Saing Tinggi - Detail",
        "competitive-economy-detail-description": "Target pertumbuhan ekonomi 6-7% per tahun dan pendapatan per kapita USD 30.300 pada 2045. Mendorong industrialisasi berbasis teknologi dan inovasi.",
        "high-quality-human-resources-title": "SDM Berkualitas Tinggi",
        "high-quality-human-resources-description": "Peningkatan kualitas pendidikan dan pelatihan vokasi untuk menciptakan tenaga kerja yang produktif dan kompetitif.",
        "high-quality-human-resources-detail-title": "SDM Berkualitas Tinggi - Detail",
        "high-quality-human-resources-detail-description": "Memanfaatkan bonus demografi dengan pendidikan yang merata dan meningkatkan kesejahteraan melalui akses kesehatan, pendidikan, dan perlindungan sosial.",
        "infrastructure-and-regional-development-title": "Infrastruktur dan Pembangunan Wilayah",
        "infrastructure-and-regional-development-description": "Pembangunan infrastruktur yang mendukung konektivitas dan transisi energi terbarukan.",
        "infrastructure-and-regional-development-detail-title": "Infrastruktur dan Pembangunan Wilayah - Detail",
        "infrastructure-and-regional-development-detail-description": "Pembangunan infrastruktur seperti jalan tol, pelabuhan, dan transportasi massal. Mendorong penggunaan energi ramah lingkungan seperti tenaga surya, angin, dan geotermal.",
        "technology-and-innovation-title": "Transformasi Teknologi dan Inovasi",
        "technology-and-innovation-description": "Adopsi teknologi digital dan riset untuk mendukung daya saing ekonomi dan efisiensi sektor publik.",
        "technology-and-innovation-detail-title": "Transformasi Teknologi dan Inovasi - Detail",
        "technology-and-innovation-detail-description": "Investasi dalam riset dan pengembangan teknologi strategis seperti kecerdasan buatan dan energi bersih untuk mendukung digitalisasi dan inovasi.",
        "sustainable-development-title": "Pembangunan Berkelanjutan",
        "sustainable-development-description": "Pengelolaan sumber daya alam yang berkelanjutan dan pengurangan emisi karbon untuk menghadapi perubahan iklim.",
        "sustainable-development-detail-title": "Pembangunan Berkelanjutan - Detail",
        "sustainable-development-detail-description": "Optimalisasi sumber daya alam untuk nilai tambah industri dan implementasi kebijakan mitigasi perubahan iklim untuk ketahanan lingkungan."
  },
  en: {
    "menu-home": "Home",
    "menu-about": "About",
    "menu-destination": "Destinations",
    "menu-timeline": "Timeline",
    "menu-direction": "Development Direction",
    "menu-targets": "Main Targets",
    "menu-vision": "Vision",
    // Hero Section
    "hero-title": "INDONESIA'S FUTURE",
    heading: "TOWARDS INDONESIA GOLDEN 2045",
    desc: "Golden Indonesia 2045 is a vision to make Indonesia a developed country in the 100th year of its independence. To achieve this goal, the government has prepared a National Long-Term Development Plan (RPJPN) 2025-2045. This vision emphasizes economic transformation, infrastructure improvement, quality education, and sustainable management of natural resources.",
    "pillar1-title": "Economic Transformation",
    "pillar1-desc": "Increase productivity by expanding employment opportunities and prioritizing strategic sectors.",
    "pillar1-detail-title": "Economic Transformation - Detail",
    "pillar1-detail-desc": "Focus on manufacturing, agriculture, and energy sectors to strengthen Indonesia's economy.",
    "pillar2-title": "Infrastructure and Regions",
    "pillar2-desc": "Develop physical infrastructure and promote regions based on local advantages.",
    "pillar2-detail-title": "Infrastructure and Regions - Detail",
    "pillar2-detail-desc": "Building roads, public transportation, and green energy to support a sustainable economy.",
    "pillar3-title": "Education",
    "pillar3-desc": "Prepare technology-based education to enhance digital and scientific skills.",
    "pillar3-detail-title": "Education - Detail",
    "pillar3-detail-desc": "Increase access to education in all corners of the country, focusing on mastering mathematics and technology.",
    "pillar4-title": "Natural Resource Management",
    "pillar4-desc": "Manage natural resources sustainably and optimize mineral wealth.",
    "pillar4-detail-title": "Natural Resource Management - Detail",
    "pillar4-detail-desc": "Energy transition and environmental conservation as a response to global climate change.",
    "timeline-heading": "Timeline Journey",
        "event-1945-title": "1945 Proclamation of Indonesia's Independence.",
        "event-1965-title": "1965 September 30 Movement and major political changes.",
        "event-1998-title": "1998 Reformation and the fall of the New Order regime.",
        "event-2020-title": "2020 COVID-19 Pandemic and economic recovery efforts.",
        "event-2045-title": "2045 Golden Indonesia: Becoming a developed and prosperous country.",
        "direction-heading": "Development to Achieve Golden Indonesia",
        "direction-paragraph": "To achieve this goal, the government has designed the National Long-Term Development Plan (RPJPN) 2025-2045. Some of the key initiatives to be implemented include:",
        "governance-reform-title": "Governance Reform",
        "governance-reform-description": "Improving bureaucratic efficiency and building cross-sector collaboration between government, private sector, and society.",
        "governance-reform-detail-title": "Governance Reform - Detail",
        "governance-reform-detail-description": "Digitization of public services, reduction of regulatory overlap, and increasing transparency and government accountability.",
        "education-quality-title": "Improving Education Quality",
        "education-quality-description": "Integrating technology into education, focusing on STEM, and improving access to quality education.",
        "education-quality-detail-title": "Improving Education Quality - Detail",
        "education-quality-detail-description": "Introducing technology into the curriculum, providing quality education across regions, and improving vocational skills for the future workforce.",
        "regional-development-title": "Strategic Regional Development",
        "regional-development-description": "Optimizing Indonesia's geographic potential and empowering the eastern region for economic development.",
        "regional-development-detail-title": "Strategic Regional Development - Detail",
        "regional-development-detail-description": "Development of special economic zones, logistics centers, and investments in key sectors like tourism and fisheries in Eastern Indonesia.",
        "digital-ecosystem-title": "Encouraging Digital Ecosystem and Start-Ups",
        "digital-ecosystem-description": "Strengthening digital entrepreneurship and preparing digital infrastructure to support the digital economy.",
        "digital-ecosystem-detail-title": "Encouraging Digital Ecosystem and Start-Ups - Detail",
        "digital-ecosystem-detail-description": "Providing financing support, market development for start-ups, and building digital infrastructure, such as 5G networks throughout Indonesia.",
        "green-energy-title": "Green Energy Development",
        "green-energy-description": "Transitioning to renewable energy to achieve energy security and reduce carbon emissions.",
        "green-energy-detail-title": "Green Energy Development - Detail",
        "green-energy-detail-description": "Increasing the use of solar, wind, and bioenergy power plants, and reducing dependence on fossil fuels to achieve net-zero carbon emissions by 2060.",
        "targets-heading": "MAIN TARGETS TO ACHIEVE GOLDEN INDONESIA 2045",
        "competitive-economy-title": "Competitive Economy",
        "competitive-economy-description": "Stable economic growth, economic diversification, and reduced dependency on natural resources.",
        "competitive-economy-detail-title": "Competitive Economy - Details",
        "competitive-economy-detail-description": "Economic growth target of 6-7% annually and per capita income of USD 30,300 by 2045. Promoting technology-based industrialization and innovation.",
        "high-quality-human-resources-title": "High-Quality Human Resources",
        "high-quality-human-resources-description": "Improving the quality of education and vocational training to create productive and competitive labor.",
        "high-quality-human-resources-detail-title": "High-Quality Human Resources - Details",
        "high-quality-human-resources-detail-description": "Leveraging demographic bonuses with equal education and improving welfare through access to health, education, and social protection.",
        "infrastructure-and-regional-development-title": "Infrastructure and Regional Development",
        "infrastructure-and-regional-development-description": "Infrastructure development supporting connectivity and renewable energy transition.",
        "infrastructure-and-regional-development-detail-title": "Infrastructure and Regional Development - Details",
        "infrastructure-and-regional-development-detail-description": "Infrastructure development such as toll roads, ports, and mass transportation. Promoting the use of environmentally friendly energy such as solar, wind, and geothermal energy.",
        "technology-and-innovation-title": "Technology and Innovation Transformation",
        "technology-and-innovation-description": "Adopting digital technology and research to support economic competitiveness and public sector efficiency.",
        "technology-and-innovation-detail-title": "Technology and Innovation Transformation - Details",
        "technology-and-innovation-detail-description": "Investing in strategic technology research and development such as artificial intelligence and clean energy to support digitalization and innovation.",
        "sustainable-development-title": "Sustainable Development",
        "sustainable-development-description": "Sustainable natural resource management and carbon emission reductions to address climate change.",
        "sustainable-development-detail-title": "Sustainable Development - Details",
        "sustainable-development-detail-description": "Optimizing natural resources for industrial added value and implementing climate change mitigation policies for environmental resilience."
  },
  ja: {
    "menu-home": "ホーム",
    "menu-about": "概要",
    "menu-destination": "目的地",
    "menu-timeline": "タイムライン",
    "menu-direction": "開発の方向性",
    "menu-targets": "主要目標",
    "menu-vision": "ビジョン",
    // Hero Section
    "hero-title": "インドネシアの未来",
    heading: "インドネシアゴールデン2045へ向けて",
    desc: "「ゴールデンインドネシア2045」は、独立100周年を迎えるインドネシアを先進国にするというビジョンです。この目標を達成するために、政府は国家長期開発計画(RPJPN)2025-2045を作成しました。このビジョンは、経済変革、インフラ改善、質の高い教育、天然資源の持続可能な管理を強調しています。",
    "pillar1-title": "経済変革",
    "pillar1-desc": "生産性を向上させ、雇用機会を拡大し、戦略的セクターを優先します。",
    "pillar1-detail-title": "経済変革 - 詳細",
    "pillar1-detail-desc": "製造業、農業、エネルギー分野に焦点を当て、インドネシア経済を強化します。",
    "pillar2-title": "インフラと地域",
    "pillar2-desc": "地域の強みを活かした物理的なインフラと地域の開発を進めます。",
    "pillar2-detail-title": "インフラと 地域 - 詳細",
    "pillar2-detail-desc": "持続可能な経済を支えるために道路、公共交通機関、グリーンエネルギーを構築します。",
    "pillar3-title": "教育",
    "pillar3-desc": "デジタルと科学的なスキルを高めるための技術ベースの教育を準備します。",
    "pillar3-detail-title": "教育 - 詳細",
    "pillar3-detail-desc": "全国各地で教育のアクセスを向上させ、数学と技術の習得に重点を置きます。",
    "pillar4-title": "資源管理",
    "pillar4-desc": "自然資源を持続可能に管理し、鉱物資源を最適化します。",
    "pillar4-detail-title": "資源管理 - 詳細",
    "pillar4-detail-desc": "気候変動に対応するためにエネルギー転換と環境保護を進めます。",
    "timeline-heading": "タイムラインの旅",
        "event-1945-title": "1945 インドネシア独立の宣言。",
        "event-1965-title": "1965 9月30日運動と大きな政治的変化。",
        "event-1998-title": "1998 改革と新秩序体制の崩壊。",
        "event-2020-title": "2020 COVID-19パンデミックと経済回復の取り組み。",
        "event-2045-title": "2045 黄金のインドネシア：先進的で豊かな国へ。",
    "direction-heading": "インドネシアゴールを達成するための開発",
        "direction-paragraph": "この目標を達成するために、政府は2025-2045年の国家長期開発計画(RPJPN)を設計しました。実施される主な取り組みには次のものが含まれます。",
        "governance-reform-title": "ガバナンス改革",
        "governance-reform-description": "行政効率を改善し、政府、民間セクター、社会の間でのクロスセクターのコラボレーションを構築します。",
        "governance-reform-detail-title": "ガバナンス改革 - 詳細",
        "governance-reform-detail-description": "公共サービスのデジタル化、規制の重複削減、政府の透明性と説明責任の向上。",
        "education-quality-title": "教育の質の向上",
        "education-quality-description": "教育における技術統合、STEMへの焦点、および質の高い教育へのアクセスの向上。",
        "education-quality-detail-title": "教育の質の向上 - 詳細",
        "education-quality-detail-description": "カリキュラムへの技術導入、すべての地域での質の高い教育の提供、未来の労働力のための職業技能の向上。",
        "regional-development-title": "戦略的地域開発",
        "regional-development-description": "インドネシアの地理的潜在能力を最適化し、経済開発のために東部地域を活性化。",
        "regional-development-detail-title": "戦略的地域開発 - 詳細",
        "regional-development-detail-description": "特別経済区域の開発、物流センター、観光や漁業などの主要産業の東部インドネシアへの投資。",
        "digital-ecosystem-title": "デジタルエコシステムとスタートアップの推進",
        "digital-ecosystem-description": "デジタル起業家精神を強化し、デジタル経済の発展を支援するインフラを整備します。",
        "digital-ecosystem-detail-title": "デジタルエコシステムとスタートアップの推進 - 詳細",
        "digital-ecosystem-detail-description": "スタートアップのための資金調達支援、市場開発、インフラ整備（インドネシア全土での5Gネットワークなど）。",
        "green-energy-title": "グリーンエネルギー開発",
        "green-energy-description": "再生可能エネルギーへの移行を進め、エネルギーの安全保障を確保し、炭素排出を削減。",
        "green-energy-detail-title": "グリーンエネルギー開発 - 詳細",
        "green-energy-detail-description": "太陽光、風力、バイオエネルギー発電の使用を増加させ、化石燃料への依存を減らし、2060年までにネットゼロ炭素排出を達成します。",
          "targets-heading": "インドネシアの黄金時代2045を達成するための主な目標",
        "competitive-economy-title": "競争力の高い経済",
        "competitive-economy-description": "安定した経済成長、多様な経済、天然資源への依存削減。",
        "competitive-economy-detail-title": "競争力の高い経済 - 詳細",
        "competitive-economy-detail-description": "年間6〜7％の経済成長を目標とし、2045年までに一人当たりの所得を30,300米ドルに達成します。技術と革新に基づいた工業化を促進。",
        "high-quality-human-resources-title": "高品質な人的資源",
        "high-quality-human-resources-description": "生産的で競争力のある労働力を創出するために、教育の質を向上させ、職業訓練を強化。",
        "high-quality-human-resources-detail-title": "高品質な人的資源 - 詳細",
        "high-quality-human-resources-detail-description": "教育機会を平等にし、人口ボーナスを活用します。さらに、健康、教育、社会保障へのアクセスを通じて福祉を向上させます。",
        "infrastructure-and-regional-development-title": "インフラと地域開発",
        "infrastructure-and-regional-development-description": "接続性を支援し、再生可能エネルギーの移行を可能にするインフラ開発。",
        "infrastructure-and-regional-development-detail-title": "インフラと地域開発 - 詳細",
        "infrastructure-and-regional-development-detail-description": "高速道路、港湾、大量輸送のようなインフラ開発を進めます。太陽光、風力、地熱など環境に優しいエネルギーの利用を促進します。",
        "technology-and-innovation-title": "技術革新の変革",
        "technology-and-innovation-description": "経済競争力と公共部門の効率性を支えるためのデジタル技術と研究の採用。",
        "technology-and-innovation-detail-title": "技術革新の変革 - 詳細",
        "technology-and-innovation-detail-description": "人工知能やクリーンエネルギーのような戦略的技術研究と開発への投資を通じて、デジタル化と革新をサポートします。",
        "sustainable-development-title": "持続可能な開発",
        "sustainable-development-description": "気候変動に対応するための持続可能な資源管理と炭素排出量削減。",
        "sustainable-development-detail-title": "持続可能な開発 - 詳細",
        "sustainable-development-detail-description": "産業の付加価値を高めるために天然資源を最適化し、環境耐性を向上させるための気候変動緩和政策を実施します。"
  }
};

// Function to translate content based on language
function translatePage(lang) {
  const elements = document.querySelectorAll('[data-id]');
  elements.forEach(element => {
    const textId = element.getAttribute('data-id');
    if (translations[lang] && translations[lang][textId]) {
      element.textContent = translations[lang][textId];
    }
  });
}

// Set default language on page load
document.addEventListener('DOMContentLoaded', () => {
  translatePage('id'); // Default language is Bahasa Indonesia
});

// Add event listeners to translation buttons
document.querySelectorAll('.translate-btn').forEach(button => {
  button.addEventListener('click', () => {
    const lang = button.getAttribute('data-lang');
    translatePage(lang);
  });
});













// Menambahkan efek transparansi pada scroll
window.addEventListener('scroll', function() {
const navbar = document.getElementById('navbar');

if (window.scrollY > 50) {
    // Saat scroll lebih dari 50px, navbar menjadi lebih transparan
    navbar.style.background = "rgba(79, 0, 0, 0.8)";
    navbar.style.opacity = "0.8";  // Mengurangi opacity untuk efek transparansi lebih jelas
} else {
    // Saat di atas 50px, navbar transparan
    navbar.style.background = "rgba(79, 0, 0, 0.5)";
    navbar.style.opacity = "1";  // Mengembalikan opacity ke normal
}
});

// Function to toggle visibility of event content
function toggleEventContent(contentId) {
  const content = document.getElementById(contentId);
  const icon = document.querySelector(`#icon-${contentId.split('-')[1]}`);

  if (content.classList.contains('hidden')) {
      // Show content
      content.classList.remove('hidden');
      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');
  } else {
      // Hide content
      content.classList.add('hidden');
      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');
  }
}

// Add event listeners for better accessibility
document.querySelectorAll('.event').forEach(eventElement => {
  eventElement.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          const contentId = eventElement.getAttribute('onclick').match(/'([^']+)'/)[1];
          toggleEventContent(contentId);
      }
  });
});

// Fungsi untuk toggle efek flip pada kartu saat diklik
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
const sections = document.querySelectorAll('.about, .timeline, .direction, .cta');
const options = {
  threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
      } else {
          entry.target.style.opacity = 0;
          entry.target.style.transform = 'translateY(50px)';
      }
  });
}, options);
sections.forEach(section => {
  observer.observe(section);
});

function showVideo(url, button) {
  document.getElementById('video-frame').src = url;
  var buttons = document.querySelectorAll('.button');
  buttons.forEach(function(btn) {
      btn.classList.remove('active');
  });
  button.classList.add('active');
}
// Menunggu animasi selesai sebelum menyembunyikan splash screen
document.getElementById('splash-screen').addEventListener('animationend', function(event) {
  if (event.animationName === 'splashFadeOut') {
      // Menyembunyikan splash screen setelah animasi keluar selesai
      document.getElementById('splash-screen').style.display = 'none';
      // Menampilkan konten utama
      document.getElementById('main-content').style.display = 'block';
  }
});


function handleScroll() {
  var buttonContainer = document.querySelector('.button-container');
  var videoContainer = document.querySelector('.video-container');
  var buttonRect = buttonContainer.getBoundingClientRect();
  var videoRect = videoContainer.getBoundingClientRect();

  if (buttonRect.top < window.innerHeight && buttonRect.bottom >= 0) {
      buttonContainer.classList.add('visible');
  } else {
      buttonContainer.classList.remove('visible');
  }

  if (videoRect.top < window.innerHeight && videoRect.bottom >= 0) {
      videoContainer.classList.add('visible');
  } else {
      videoContainer.classList.remove('visible');
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

window.addEventListener('load', () => {
  document.querySelector('.contact-section').classList.add('animate-fade-in');
});

// Menunggu hingga halaman selesai dimuat
window.addEventListener('load', () => {
  // Pilih elemen yang ingin dianimasikan
  const contactSection = document.querySelector('.contact-section');
  
  // Buat observer untuk memantau elemen
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          // Jika elemen terlihat di dalam viewport
          if (entry.isIntersecting) {
              // Tambahkan kelas untuk animasi fade-in
              entry.target.classList.add('animate-fade-in');
              // Hentikan pengamatan setelah animasi selesai
              observer.unobserve(entry.target);
          }
      });
  }, {
      threshold: 0.5 // Elemen dianggap terlihat jika 50% dari elemen berada di viewport
  });

  // Mulai mengamati elemen
  observer.observe(contactSection);
});
