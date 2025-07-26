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
## 🛠 Teknologi yang Digunakan
 * Frontend: HTML, CSS, JavaScript, Tailwind CSS, Leaflet.js untuk peta interaktif.
 * Backend: Node.js dengan Express.js untuk logika sisi server.
 * Komunikasi Real-time: Socket.IO untuk komunikasi dua arah berbasis WebSocket antara klien dan server.
 * Database: MySQL untuk menyimpan data seismik, peringatan, dan informasi pengguna.
 * Penerimaan Data: MQTT (menggunakan broker EMQ X) untuk berlangganan topik peringatan gempa, pembaruan magnitudo, dan detak jantung.
 * Lingkungan Pengembangan Lokal: Laragon untuk lingkungan pengembangan yang portabel, terisolasi, dan cepat.
## 🚀 Start
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
   * Arahkan ke direktori www Laragon (umumy C:\laragon\www).
   * Clone repositori proyek:
     'git clone https://github.com/rickthor7/iot-dashboard.git'
<img width="602" height="145" alt="image" src="https://github.com/user-attachments/assets/ed727cc9-8475-4610-bd22-55493deff0bd" />
<blockquote> config mqtt pake broker dan topics yang dibuat </blockquote>
 * Konfigurasi MQTT:
   * Aplikasi ini menggunakan mqtt://broker.emqx.io sebagai broker MQTT.
   * Server akan berlangganan (subscribe) ke topik-topik berikut:
     * earthquake/alerts
     * earthquake/magnitude
     * heartbeat/rate
   * Konfigurasi ini sudah diatur sebelumnya dalam file fix.js.
<img width="602" height="277" alt="image" src="https://github.com/user-attachments/assets/716c6ea4-c6f6-413e-ba31-9c6475429c1a" /> <br>
<blockquote> Untuk menyambung mqtt, output untuk menandakan mqtt </blockquote>
<img width="602" height="290" alt="image" src="https://github.com/user-attachments/assets/2e5ad6f8-b96a-47d8-9169-e83faff7ffd9" /> <br>
<blockquote> MQTT </blockquote>
 * Jalankan Server Backend:
   * Buka Terminal Laragon.
<img width="602" height="396" alt="image" src="https://github.com/user-attachments/assets/7659a4fe-2200-44e0-a32f-14acf3069620" /> <br>
  <blockquote> Laragon </blockquote>
   * Arahkan ke direktori proyek:
     'cd dashboard-iot'
   * Instal paket npm yang diperlukan:
     'npm install'
   * Mulai server Node.js:
     'node fix.js'
<img width="602" height="339" alt="image" src="https://github.com/user-attachments/assets/22b2bac4-34fb-42af-b657-09c66836ddb0" />
   * Anda akan melihat log di konsol yang mengonfirmasi koneksi basis data dan subscription topik MQTT berhasil.
  * MYSQL
  <img width="602" height="339" alt="image" src="https://github.com/user-attachments/assets/0877a78f-5c62-4ea8-9386-42878caaa547" />
<blockquote> Nama di mySql sama dengan nama di MQTT </blockquote>
## Penggunaan
 * Setelah server berjalan, Anda dapat mengakses dasbor di peramban web Anda dengan membuka:
   http://localhost:3002(port)
