# RUSAKIN Website

Website landing page jual-beli HP rusak menggunakan HTML, CSS, dan JavaScript murni.

## Cara menjalankan
1. Ekstrak `rusakin-website.zip`.
2. Buka `index.html` di browser, atau gunakan ekstensi Live Server di VS Code.
3. Website tidak memerlukan proses build atau instalasi package.

## Yang perlu diganti sebelum dipublikasikan
1. Buka `script.js`, ganti `WHATSAPP_NUMBER` dengan nomor admin yang benar (format internasional tanpa tanda `+`, contoh Indonesia `62812...`).
2. Ganti data contoh dalam array `phones` dengan daftar tipe dan estimasi harga yang benar.
3. Perbarui teks kontak, alamat, dan informasi operasional sesuai bisnis asli.
4. Estimasi di katalog adalah data DEMO. Pastikan harga dan kebijakan sudah diverifikasi sebelum website ditayangkan.

## Struktur
- `index.html` — struktur dan konten halaman
- `style.css` — tema visual dan responsive layout
- `script.js` — pencarian, filter merek, katalog demo, dan tautan WhatsApp


Katalog demo mencakup berbagai merek populer dan filter merek dibuat otomatis dari data katalog. Tambahkan model lain pada array `phones` di `script.js`. Harga adalah contoh dan harus diperbarui sebelum dipublikasikan.
