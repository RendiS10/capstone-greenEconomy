import axios from 'axios';

const DaftarArtikel = {

  async render() {
    return `
    <article>
    <div class="lokasi">
      <p> <a href = "#/beranda"> Beranda</a> >> <a href = "#/daftar-artikel"> Daftar Artikel</a></p>
    </div>
    <section class="daftarArtikel">
      <h2>Daftar List Artikel</h2>
      
        <div class="artikelList" id="article-list">
      
      </div>
   
    </section>
  </article>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const articleResponse = await axios.get('http://localhost:5000/articles');
    const articles = articleResponse.data;
    const articleListElement = document.getElementById('article-list');
    articles.forEach((article) => {
      const truncatedDescription = `${article.description.substring(0, 250)}...`;
      const articleElement = `
    <div class="article-body">
      <picture>
        <source srcset="${article.url} 480w, ${article.url} 800w" sizes="(max-width: 600px) 480px, 800px" type="image/webp">
        <img src="${article.url}" alt="${article.name}" class = "lazyload" />
      </picture>
      <div class="textArtikel">
        <h3>${article.name}</h3>
        <p>${truncatedDescription}<a href="#/detail-artikel/${article.id}"> 
        <br>
        <br>
        Baca Selengkapnya >> </a></p>
      </div>
      </div>
      <hr>
  `;
      articleListElement.innerHTML += articleElement;
    });
  },
};

export default DaftarArtikel;
