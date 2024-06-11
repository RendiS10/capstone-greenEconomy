-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Jun 2024 pada 18.08
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `upload_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `article`
--

CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `article`
--

INSERT INTO `article` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`, `description`) VALUES
(1, 'Terapkan Ekonomi Hijau, Pemerintah Dorong Pelaku Industri Melakukan Pembangunan Berkelanjutan', '8bb7e694fbfbcaab7e1d23951824969d.jpg', 'http://localhost:5000/images/8bb7e694fbfbcaab7e1d23951824969d.jpg', '2024-06-11 13:45:17', '2024-06-11 14:07:59', 'Pembangunan berkelanjutan menjadi prioritas Pemerintah sebagai salah satu upaya menjaga kelestarian lingkungan melalui penerapan ekonomi hijau. Komitmen Pemerintah dalam menerapkan konsep ekonomi hijau juga melibatkan para pelaku usaha industri, dimana perusahaan industri diwajibkan memperhatikan keseimbangan dan kelestarian sumber daya alam dalam proses industri yang dilakukan.\r\n“Ekonomi hijau dalam dokumen perencanaan telah dimasukkan dalam RPJMN 2020-2024 dengan tiga program prioritas, yaitu peningkatan kualitas lingkungan, peningkatan ketahanan bencana dan perubahan iklim, serta pembangunan rendah karbon,” kata Menteri Koordinator Bidang Perekonomian Airlangga Hartarto.\r\nUsai menghadiri groundbreaking pembangunan pengolahan nikel rendah karbon di Kabupaten Morowali Provinsi Sulawesi Tengah, Menko Airlangga langsung bertolak ke lokasi persemaian PT Vale Nursery di Sorowako Provinsi Sulawesi Selatan, Jumat (10/02).\r\nDalam kesempatan tersebut, Menko Airlangga mengapresiasi komitmen perusahaan untuk melakukan proses industri dengan hasil karbon yang rendah dan diiringi dengan upaya pelestarian lingkungan. Selain meninjau lokasi persemaian, Menko Airlangga juga mendapatkan penjelasan mengenai denah lokasi persemaian serta menanam pohon polonangka yang merupakan tanaman kayu yang tahan akan rayap.\r\n“Ini merupakan wujud nyata dari implementasi green economy dan sustainable forest management,” ujar Menko Airlangga.\r\nNursery atau penyemaian benih merupakan salah satu implementasi pemberlakuan sustainable forest management. Area nursery tersebut dibangun oleh PT Vale Nursery untuk memenuhi kebutuhan rehabilitasi dan penanaman kembali di kawasan pertambangan. Fasilitas pembibitan seluas 2,5 Ha tersebut dapat memproduksi 700.000 bibit per tahun. Secara keseluruhan, area yang juga memproduksi berbagai jenis tanaman asli dan tanaman endemik yang merupakan bagian dari konservasi keanekaragaman hayati, disiapkan termasuk arboretum dan showcase yakni seluas 13,6 Ha.\r\n'),
(3, 'Welcome to Green Economy Indonesia Summit 2022', 'aa1355f203c12d987be43aad7ab1a9d7.jpg', 'http://localhost:5000/images/aa1355f203c12d987be43aad7ab1a9d7.jpg', '2024-06-11 14:02:34', '2024-06-11 14:14:53', 'Implementasi ekonomi hijau adalah salah satu arahan Presiden Republik Indonesia Joko Widodo di dalam mentransformasi perekonomian Tanah Air yang berbasis inovasi digital dan teknologi ke arah ekonomi berkelanjutan. Ekonomi hijau yang membutuhkan pembiayaan dan investasi yang tidak sedikit sangatlah dibutuhkan untuk mempercepat serta memperkuat proses transisi ekonomi masa depan Indonesia melalui ekonomi hijau. Dengan demikian, dibutuhkan sinergi dan integrasi yang menyeluruh antara Pemerintah bersama perusahaan swasta, perusahaan BUMN, dan stakeholder terkait di dalam pembiayaan transisi ekonomi hijau ini.'),
(5, 'Live Now! Momentum Bangkitnya Ekonomi Hijau RI di Tengah Gejolak Dunia', 'e54cca3087a6c6f6465f8bdf307b6cfb.png', 'http://localhost:5000/images/e54cca3087a6c6f6465f8bdf307b6cfb.png', '2024-06-11 14:18:49', '2024-06-11 14:18:49', 'Jakarta, CNBC Indonesia - Indonesia memiliki potensi besar dalam sumber energi bersih yang dapat mendukung pertumbuhan ekonomi nasional yang berkelanjutan dan mengurangi ketergantungan pada impor. Oleh karena itu, pengembangan energi bersih terus digalakkan dengan komitmen bersama antara pemerintah, pemangku kepentingan, dan masyarakat.\r\n\r\nCNBC Indonesia dengan bangga mempersembahkan Green Economic Forum 2024 dengan tema \"Green Economy to Support National Growth Amid Global Uncertainty\" yang akan berlangsung pada Rabu, 29 Mei 2024.\r\n\r\nAcara ini akan menampilkan 4 sesi diskusi panel dengan tema yang berbeda. Panel pertama akan membahas bagaimana sumber energi bersih dapat mendorong pertumbuhan ekonomi melalui tema \"Green Energy Driving Economic Growth\". Sesi ini akan menghadirkan Direktur Manajemen Risiko PT PLN (Persero), Suroso Isnandar; Executive Director, Global Financial Markets PT DBS Indonesia, M Suryo Mulyono; serta Direktur Strategi, Portofolio, dan Pengembangan Usaha Pertamina (Persero), Salyadi Saputra.\r\n\r\nSesi kedua akan membahas topik pembiayaan hijau sebagai solusi untuk pembangunan berkelanjutan dengan tema \"Green Finance, a Solution for Sustainable Development\". Pada sesi ini, hadir sebagai pembicara adalah Direktur EBTKE Kementerian ESDM, Eniya Listiani Dewi; serta Direktur Pengawasan Keuangan Derivatif dan Bursa Karbon Otoritas Jasa Keuangan (OJK), Lufaldy Ernanda.\r\n\r\nPanel ketiga akan mengeksplorasi bagaimana industri pertambangan serta minyak dan gas bumi (migas) berusaha mengurangi emisi karbon melalui tema \"Decarbonization in Mining, Oil and Gas Industry\". Narasumber pada sesi ini meliputi Deputi Bidang Koordinasi Kedaulatan Maritim dan Energi Kemenko Marves, Jodi Mahardi; Direktur Utama PT Trimegah Bangun Persada Tbk (Harita Nickel), Roy Arman Arfandy; serta Direktur Keuangan dan Investasi PT Pertamina Hulu Energi, Dannif Utojo Danusaputro.\r\n\r\nDengan menghadirkan berbagai pembicara yang kompeten di bidangnya, forum ini diharapkan dapat memberikan wawasan dan solusi konkret dalam mendukung ekonomi hijau demi pertumbuhan nasional yang berkelanjutan di tengah ketidakpastian global.\r\n\r\n\r\n\r\n\r\n\r\n\r\n'),
(6, 'The New “Green” Economy: Opportunities for All Industries', '3d1e8ba0c64eec765a6cf41689cb12f5.jpg', 'http://localhost:5000/images/3d1e8ba0c64eec765a6cf41689cb12f5.jpg', '2024-06-11 14:22:12', '2024-06-11 14:22:12', 'Bisnis di mana pun sedang mengalami “penghijauan” perekonomian. Meskipun perubahan ini telah terjadi selama beberapa dekade, baru-baru ini banyak pelaku sektor publik dan swasta yang mendorong reformasi model ekonomi tradisional untuk mengatasi permasalahan mendesak terkait perubahan iklim, serta tantangan utama sosial dan ekonomi.\r\n\r\nPada tahun 2015, negara-negara di seluruh dunia mengadopsi Agenda Pembangunan Berkelanjutan 2030 dan 17 Tujuan Pembangunan Berkelanjutan. Tujuan-tujuan ini mengakui bahwa pengentasan kemiskinan global harus berjalan seiring dengan strategi yang membangun pertumbuhan ekonomi yang bersih dengan bertindak berdasarkan berbagai kebutuhan lingkungan dan sosial termasuk pendidikan, perlindungan sosial, penciptaan lapangan kerja, pelestarian keanekaragaman hayati, serta pengelolaan air dan lahan. Di Kanada, pendorong ekonomi “penghijauan” mencakup kebijakan dan peraturan pemerintah, persyaratan sektor keuangan terkait dengan keterbukaan informasi serta kinerja, dan preferensi konsumen dan tenaga kerja. Semua pertimbangan tersebut kini sering disebut sebagai “ESG”.\r\n\r\nMeskipun upaya perlindungan lingkungan secara tradisional berfokus pada mempertimbangkan risiko dan dampak terhadap bisnis, peluang ekonomi hijau tetap ada untuk dimanfaatkan. Beberapa analis memperkirakan bahwa pasar global untuk inovasi ramah lingkungan dapat mencapai $5 triliun atau lebih pada tahun 2025. Peluang bisnis, industri, keterampilan, dan pasar ramah lingkungan yang baru merupakan hadiah ekonomi global.'),
(7, 'Teknologi dan Inovasi Sektor Keuangan Mewujudkan Green Economy', 'c590753945fc176a467b4e03c53676ea.jpg', 'http://localhost:5000/images/c590753945fc176a467b4e03c53676ea.jpg', '2024-06-11 14:25:50', '2024-06-11 14:25:50', 'Jakarta, Kominfo - Pemerintah melakukan segala upaya untuk mempercepat kemajuan pembangunan dan mendukung peningkatan energi terbarukan. Dalam mencapai target tersebut diperlukan transfer teknologi dan investasi untuk mendorong transisi dari penggunaan bahan bakar fosil ke penggunaan energi terbarukan.\r\n\r\nSejalan dengan komitmen Nationally Determined Contributions Indonesia, Pemerintah juga mengutamakan pembangunan rendah karbon di dalam Rencana Pembangunan Jangka Menengah. Menteri Koordinator Bidang Perekonomian Airlangga Hartarto mengatakan bahwa Indonesia mengapresiasi inisiatif Natural Capital Carbon Communities Superpower dalam Tri Hita Karana Climate Forum, dari Jakarta, Rabu (23/06/2021).\r\n\r\nMendukung hal tersebut, Indonesia telah mereformasi iklim investasi secara signifikan dengan mengesahkan Undang-Undang Cipta Kerja. Selain memberikan lebih banyak kemudahan bagi investor dan mitra pembangunan, Undang-Undang ini juga mengatur pembangunan yang tetap memperhatikan lingkungan.\r\n\r\nSelanjutnya, Airlangga mengatakan perubahan teknologi dalam kewirausahaan dan inovasi dalam sektor keuangan dilihat sebagai kunci untuk mengubah jalur pembangunan menjadi green economy. Bertepatan dengan Presidensi G20 Indonesia tahun 2022, Pemerintah berencana untuk meluncurkan pusat keunggulan dalam teknologi atau Centre of Future Knowledge.\r\n\r\nPusat teknologi ini merupakan platform untuk berinovasi dan transfer teknologi dengan kolaborasi global. Pemerintah mengajak sektor swasta untuk mendukung inovasi teknologi karena melalui kewirausahaan sektor swasta dapat melakukan perubahan besar yang diperlukan.\r\n\r\n“The Centre of Future Knowledge yang hijau dan berpihak pada energi terbarukan ini akan mendukung penciptaan nilai untuk dunia bisnis yang lebih baik. Pusat teknologi ini akan fokus pada peran alih teknologi, riset dan pengembangan oleh investasi swasta dengan akademisi dan penelitian global terkemuka dalam mewujudkan masa depan yang berkelanjutan di Indonesia,” tutur Airlangga.\r\n\r\nSelaras dengan peluncuran Tri Hita Karana Roadmap tentang Blended Finance yang telah dikembangkan oleh komunitas global dengan panduan dari Organization for Economic Co-operation and Development, Pemerintah akan mendirikan Global Blended Finance Institute secara multilateral di Bali.\r\n\r\nGlobal Blended Finance Institute akan berperan dalam menarik pendanaan untuk mengembangkan proyek dekarbonisasi berkualitas tinggi serta untuk mengurangi risiko penyandang dana dan investor swasta dengan pengembangan kapasitas pada persiapan proyek dan prinsip-prinsip keuangan campuran pada praktik yang baik.\r\n\r\n“Forum ini memiliki diskusi yang sangat bernilai dan saya menyambut baik paparan yang disampaikan. Saya juga mengucapkan terima kasih kepada Pemerintah Amerika Serikat, Tri Hita Karana dan seluruh pihak yang mendukung terselenggaranya forum ini,” pungkas Airlangga. '),
(8, 'Green Economy serta Peluang Kontribusi Islamic Social Finance dalam Pengembangannya', 'bd4241117f51329d3ed39b7e52c3dba1.jpg', 'http://localhost:5000/images/bd4241117f51329d3ed39b7e52c3dba1.jpg', '2024-06-11 16:00:26', '2024-06-11 16:01:58', 'Dalam era di mana tantangan lingkungan dan kebutuhan akan pertumbuhan ekonomi berkelanjutan semakin mendesak, konsep green economy telah muncul sebagai landasan yang menjanjikan untuk mengatasi dua isu krusial ini secara bersamaan. Konsep Green Economy merangkul perlindungan dan pengelolaan berkelanjutan terhadap sumber daya alam dalam pembangunan. Buku ini hadir dengan tujuan untuk menguraikan konsep, manfaat, tantangan, dan potensi yang terkait dengan ekonomi hijau. Dengan menggabungkan prinsip-prinsip ekonomi yang mapan dengan keberlanjutan lingkungan, ekonomi hijau berusaha untuk mengarahkan arus modal dan sumber daya menuju solusi yang lebih ramah lingkungan.\r\n\r\nBuku ini juga menggali kedalaman hubungan antara urgensi pembangunan dan permasalahan lingkungan yang muncul dengan menawarkan wawasan tentang bagaimana konsep “Islamic Social Finance” dapat berperan sebagai alternatif pembiayaan yang mendukung pembangunan berkelanjutan. Melalui buku ini, penulis mencoba menawarkan sudut pandang pemanfaatan instrumen keuangan sosial Islam melalui peran lembaga keuangan sosial Islam dalam mendorong pencapaian green economy di Indonesia. Prinsip dalam keuangan Islam mendorong transaksi ekonomi yang adil, transparan, dan bermanfaat bagi masyarakat luas.');

-- --------------------------------------------------------

--
-- Struktur dari tabel `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `gallery`
--

INSERT INTO `gallery` (`id`, `name`, `image`, `url`, `createdAt`, `updatedAt`, `description`) VALUES
(26, 'Ceramah Kepala Biro Perencanaan pengembagan Green Economy (26/3/2024)', '50b7a06714aa733353c8c49676d5a76f.jpg', 'http://localhost:5000/images/50b7a06714aa733353c8c49676d5a76f.jpg', '2024-06-11 13:56:02', '2024-06-11 15:27:13', 'kepala biro melakukan sosialisasi dengan judul Perencanaan pengembagan Green Economy, sosialisasi ini melibatkan beberapa narasumber yang di undang dari beberapa provinsi indonesia.\r\n'),
(27, 'kunjungan Proactive', '7cf8e75cdbbbc18ebe5019e24d4fa195.jpeg', 'http://localhost:5000/images/7cf8e75cdbbbc18ebe5019e24d4fa195.jpeg', '2024-06-11 15:10:48', '2024-06-11 15:10:48', 'kunjungan pada tanggal 15 januari 2024 untuk kolaborasi dengan Proactive, seminar untuk mahasiswa tentang green economy'),
(28, 'Kegiatan Pembubaran Panitia Bukit Pakar (28/12/2023)', '911826831438dc95c751f9ad094d3ab4.jpeg', 'http://localhost:5000/images/911826831438dc95c751f9ad094d3ab4.jpeg', '2024-06-11 15:36:05', '2024-06-11 15:36:05', 'kegiatan setelah selesai melakukan kegiatan survey tempat industri'),
(29, 'kegiatan sosialiasi dengan CSA di STMIK Mardira Indonesia', 'f34fc501b03b3052f5919c51c1a5f2fd.jpeg', 'http://localhost:5000/images/f34fc501b03b3052f5919c51c1a5f2fd.jpeg', '2024-06-11 15:55:33', '2024-06-11 15:55:33', 'kolaborasi dengan Unit kegiatan Mahasiswa CSA (Creative Student Association) dengan mengadakan workshop seminar dengan mengundang beberapa narasumber dengan keahlian dibidang green economy'),
(30, 'kunjungan SMA Kimia Dharma bhakti (5/05/2023) ', '8ba90c1ae200ed236eea04344c50a3fc.jpeg', 'http://localhost:5000/images/8ba90c1ae200ed236eea04344c50a3fc.jpeg', '2024-06-11 16:06:46', '2024-06-11 16:06:46', 'undangan resmi dari kepala sekolah SMA Kimia Dharma bhakti yang dilaksanakan pada 5 mei 2023 dengan mengadakan sosialisasi mengenai bagaimana cara kita bekerja dimasa yang akan datang dengan konsep ramah lingkungan.');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `article`
--
ALTER TABLE `article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
