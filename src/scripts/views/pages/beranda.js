import axios from 'axios';

const Beranda = {
  async render() {
    return `
      <my-hero></my-hero>
      <article>
        <section class="about">
          <div class="aboutImg">
            <picture>
              <source srcset="images/image_2.webp 480w, images/image_2.webp 800w" sizes="(max-width: 600px) 480px, 800px" type="image/webp">
              <img src="images/image_2.png" alt="" class = "lazyload" />
            </picture>
          </div>
          <div class="aboutDescription">
            <p>
            Ekonomi hijau adalah konsep ekonomi yang mengedepankan rendah karbon, 
            efisiensi sumber daya, dan inklusivitas sosial. Dalam kerangka ekonomi hijau, 
            peningkatan lapangan kerja dan pendapatan dipacu oleh investasi dari sektor pemerintah dan swasta dalam aktivitas ekonomi, infrastruktur, 
            dan aset yang mendukung pengurangan emisi karbon dan polusi, peningkatan efisiensi energi dan sumber daya,
            serta pencegahan kehilangan keanekaragaman hayati dan layanan ekosistem.   
            </p>
            <p>
            Investasi ramah lingkungan ini perlu diaktifkan dan diperkuat melalui pengeluaran publik yang terarah,
            reformasi kebijakan, serta perubahan dalam perpajakan dan regulasi. 
            Program Lingkungan Hidup PBB mendukung jalur pembangunan yang menganggap<a href = "#" style = "text-decoration : none;">......................</a>
            </p>
          <a href = "#/detail" >  <button>Baca Selengkapnya</button></a>
          </div>
        </section>
        <div class="bg-join">
          <section class="aboutWe" id="aboutwe">  
            <h2><strong>Tentang Kami</strong></h2>
            <p>
            Selamat datang di website green economy kami, kami berkomitmen agar website ini menjadi tolak ukur agar orang lebih peduli dengan lingkungan dengan cara menjadi volunteer dengan tim kami.
            </p>
          </section>
        </div>
        <section class="galeri">
          <h2><strong>Galeri</strong></h2>
          <div class="cards-project" id="gallery-list">
            <!-- Galeri akan dimuat di sini -->
          </div>
        </section>
        <div class="bg-join">
          <section class="join">
            <h2>Gabung Bersama Kami</h2>
            <div class="button">
              <a href="#/join"><button>Join</button></a>
              <a href="https://kitabisa.com/campaign/pohonkebaikanuntuklingkungan"><button>Donasi</button></a>
            </div>
          </section>
        </div>
        <section class="article">
          <h2><strong>Artikel</strong></h2>
          <hr>
          <div class="article-list" id="article-list">
            <!-- Artikel akan dimuat di sini -->
          </div>
        </section>
      </article>
    `;
  },

  async afterRender() {
    // Mengambil data galeri dari server
    const response = await axios.get('http://localhost:5000/galleries');
    const galleries = response.data.slice(0, 4); // Batasi konten hingga 4 item
    const galleryListElement = document.getElementById('gallery-list');
    galleries.forEach((gallery) => {
      const galleryElement = `
        <a href="#/detail-gallery/${gallery.id}">
          <div class="card">
            <picture>
              <source srcset="${gallery.url} 480w, ${gallery.url} 800w" sizes="(max-width: 600px) 480px, 800px" type="image/webp">
              <img src="${gallery.url}" alt="${gallery.name}" class = "lazyload" />
            </picture>
            <div class="card-body">
              <h3>${gallery.name}</h3>
            </div>
          </div>
        </a>
      `;
      galleryListElement.innerHTML += galleryElement;
    });

    // Mengambil data artikel dari server
    const articleResponse = await axios.get('http://localhost:5000/articles');
    const articles = articleResponse.data.slice(0, 4); // Batasi konten hingga 4 item
    const articleListElement = document.getElementById('article-list');
    articles.forEach((article) => {
      const articleElement = `
        <a href="#/detail-artikel/${article.id}">
          <div class="card-article">
            <picture>
              <source srcset="${article.url} 480w, ${article.url} 800w" sizes="(max-width: 600px) 480px, 800px" type="image/webp">
              <img src="${article.url}" alt="${article.name}" class = "lazyload" />
            </picture>
            <div class="card-article-body">
              <h3>${article.name}</h3>
            </div>
          </div>
        </a>
      `;
      articleListElement.innerHTML += articleElement;
    });
  },
};

export default Beranda;
