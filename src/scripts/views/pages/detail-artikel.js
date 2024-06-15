import axios from 'axios';

const DetailArtikel = {
  async render() {
    return `
      <article>
        <section class="detail">
          <div class="lokasi">
            <p> <a href="#/beranda"> Beranda</a> >> <a href="#/detail-artikel/:id"> Detail Artikel </a></p>
          </div>
          <div class="detailImg" id="detail-article">
          </div>
        </section>
      </article>
    `;
  },

  async afterRender() {
    try {
      const id = window.location.hash.split('/').pop(); // Ambil ID dari URL

      const articleResponse = await axios.get(`http://localhost:5000/articles/${id}`);
      const article = articleResponse.data;

      if (!article) {
        throw new Error('Article not found');
      }

      const detailArticleElement = document.getElementById('detail-article');
      detailArticleElement.innerHTML = `
        <h2>${article.name}</h2>
        <img src="${article.url}" alt="${article.name}" />
        <p>${article.description}</p>
      `;
    } catch (error) {
      console.error(error);
      // Handle the error appropriately in your application
    }
  },
};

export default DetailArtikel;
