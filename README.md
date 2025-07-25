# DASHBOARD GEMPA: Sistem Peringatan dan Pemantauan Gempa Real-Time
### 🚨 Gambaran program
DASHBOARD GEMPA adalah dasbor pemantauan gempa bumi real-time yang komprehensif, dirancang untuk menyediakan data seismik terkini, notifikasi server, dan informasi vital untuk keselamatan pengguna. Sistem ini mengintegrasikan data dari berbagai sumber untuk menyajikan gambaran aktivitas seismik yang jelas dan instan, menjadikannya alat penting untuk pemantauan dan respons. Dasbor ini dilengkapi dengan peta seismik interaktif, daftar gempa terkini dan signifikan, serta bagian pemantauan untuk pengguna dengan perangkat "Rescue Watch", yang menampilkan lokasi dan tanda-tanda vital mereka.
## ✨ Fitur Utama
 * Peta Seismik Real-Time: Peta interaktif yang secara visual merepresentasikan pusat gempa, dengan penanda yang diberi kode warna dan ukuran sesuai magnitudo untuk penilaian langsung.
 * Feed Gempa Langsung: Menampilkan daftar peristiwa seismik terbaru yang terus diperbarui.
 * Penyaringan Data: Gempa bumi dapat disaring berdasarkan magnitudo (semua, ≥ 5.0, < 5.0) untuk fokus pada data yang paling relevan.
 * Notifikasi Server: Panel khusus untuk pembaruan dan peringatan real-time dari server, memastikan pengguna selalu terinformasi.
 * Data Pengguna Rescue Watch: Tabel khusus untuk memantau status individu yang dilengkapi dengan perangkat Rescue Watch, termasuk status SOS, detak jantung, kadar SpO2, tekanan darah, dan lokasi terakhir yang diketahui.
 * Desain Responsif: Antarmuka modern dan intuitif yang dibangun dengan Tailwind CSS untuk pengalaman yang mulus di berbagai perangkat.
## 🛠 Tumpukan Teknologi
 * Frontend: HTML, CSS, JavaScript, Tailwind CSS, Leaflet.js untuk peta interaktif.
 * Backend: Node.js dengan Express.js untuk logika sisi server.
 * Komunikasi Real-time: Socket.IO untuk komunikasi dua arah berbasis WebSocket antara klien dan server.
 * Database: MySQL untuk menyimpan data seismik, peringatan, dan informasi pengguna.
 * Penerimaan Data: MQTT (menggunakan broker EMQ X) untuk berlangganan topik peringatan gempa, pembaruan magnitudo, dan detak jantung.
 * Lingkungan Pengembangan Lokal: Laragon untuk lingkungan pengembangan yang portabel, terisolasi, dan cepat.
## 🚀 Memulai
Untuk menjalankan salinan lokal, ikuti langkah-langkah sederhana berikut.
Prasyarat
 * Laragon: Disarankan menggunakan Laragon untuk pengaturan yang mudah. Anda dapat mengunduhnya secara gratis.
 * Node.js: Pastikan Anda telah menginstal Node.js untuk menjalankan server backend.
 * Git: Untuk melakukan clone repositori.
Instalasi & Pengaturan
 * Mulai Laragon: Jalankan Laragon dan mulai semua layanan (Apache, MySQL).
 * Pengaturan Database:
   * Buka phpMyAdmin melalui dasbor Laragon.
   * Buat basis data baru bernama datajam.
   * Pastikan tabel-tabel yang diperlukan seperti alerts, magnitude, dan heartbeat rate telah dibuat agar sesuai dengan nama di MQTT.
 * Clone Repositori:
   * Arahkan ke direktori www Laragon (biasanya C:\laragon\www).
   * Clone repositori proyek:
     git clone https://github.com/rickthor7/iot-dashboard.git

 * Konfigurasi MQTT:
   * Aplikasi ini menggunakan mqtt://broker.emqx.io sebagai broker MQTT.
   * Server akan berlangganan (subscribe) ke topik-topik berikut:
     * earthquake/alerts
     * [cite_start]earthquake/magnitude
     * [cite_start]heartbeat/rate
   * Konfigurasi ini sudah diatur sebelumnya dalam file fix.js.
 * Jalankan Server Backend:
   * [cite_start]Buka Terminal Laragon.
   * Arahkan ke direktori proyek:
     cd dashboard-iot

     [cite_start]
   * Instal paket npm yang diperlukan:
     npm install

   * Mulai server Node.js:
     node fix.js

     [cite_start]
   * [cite_start]Anda akan melihat log di konsol yang mengonfirmasi koneksi basis data dan subscription topik MQTT berhasil.
## Penggunaan
 * Setelah server berjalan, Anda dapat mengakses dasbor di peramban web Anda dengan membuka:
   [cite_start]http://localhost:3002
