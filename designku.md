# Detail Desain Website Portofolio Salman Yuris

Dokumen ini berisi rangkuman detail desain dan struktur dari website portofolio Salman Yuris berdasarkan source code utama (`index.html`).

## 1. Identitas & Informasi Utama
- **Nama:** Salman Yuris Adila Azzami
- **Peran/Fokus:** Mahasiswa Sistem Informasi dengan fokus pada Web Development, Cloud Computing, dan Data Analysis.
- **Title Web:** Portfolio | Salman Yuris

## 2. Teknologi & Library yang Digunakan
- **Struktur:** HTML5
- **Styling:** Tailwind CSS (via CDN)
- **Ikon:** Font Awesome (v5.15.3 & v6.5.0)
- **Animasi Scroll:** AOS Library (Animate On Scroll)

## 3. Sistem Warna (Color Palette)
Website ini mendukung fitur **Light Mode** dan **Dark Mode** dengan palet warna khusus (kustomisasi pada konfigurasi Tailwind):

- **Light Mode:**
  - Background Utama (`lightBg`): `#f8fafc`
  - Card/Permukaan (`lightCard`): `#ffffff`
- **Dark Mode:**
  - Background Utama (`darkBg`): `#0f172a` (Slate 900)
  - Card/Permukaan (`darkCard`): `#1e293b` (Slate 800)
- **Aksen Utama (Berlaku untuk kedua mode):**
  - Primary: `#38bdf8` (Light Blue)
  - Secondary: `#818cf8` (Indigo/Purple)

## 4. Tipografi (Typography)
- **Font Utama:** `Inter`
- **Fallback:** `ui-sans-serif`, `system-ui`, `sans-serif`
- **Karakteristik Teks Utama:**
  - Teks biasa di light mode menggunakan warna `slate-700`
  - Teks biasa di dark mode menggunakan warna `slate-300`

## 5. Struktur Navigasi (Menu)
Menu navigasi diletakkan melayang (fixed top) di tengah dengan efek *glassmorphism* (blur) dan bayangan (shadow-2xl). Terdapat menu berikut:
- Home
- Portfolio
- Education
- Skill
- Experience
- Contact

*Terdapat juga tombol toggle untuk berganti dari Light Mode ke Dark Mode.*

## 6. Efek & Animasi Spesial
- **Background Orbs (Blob):** Terdapat elemen membulat bercahaya (glow) di latar belakang yang menggunakan animasi kustom `@keyframes blob` yang terus bergerak dan berubah ukuran secara berulang (infinite).
- **Animasi Float:** Beberapa elemen menggunakan efek mengambang ke atas dan ke bawah (`@keyframes float`).
- **Tekstur Background:**
  - `bg-texture-dots`: Latar belakang bermotif titik-titik (radial-gradient).
  - `bg-texture-grid`: Latar belakang bermotif kotak-kotak (linear-gradient).
- **Custom Scrollbar:** Modifikasi scrollbar browser agar terlihat lebih profesional (lebar 8px, track warna kalem, dan efek hover pada thumb).
- **Teks Gradien:** Utilitas kelas `.text-gradient` yang menerapkan efek warna gradasi pada teks.

## 7. Desain Responsif (Responsive Design)
- Tampilan menu navigasi berubah dari baris lurus di desktop menjadi *Hamburger Menu* di ukuran layar tablet dan mobile (`md:hidden`).
- Padding, ukuran font, dan struktur grid (flex-col ke md:flex-row) menyesuaikan dengan ukuran layar pengguna.
