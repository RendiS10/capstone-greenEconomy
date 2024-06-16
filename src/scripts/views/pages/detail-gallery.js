/* eslint-disable no-undef */
import axios from 'axios';

const DetailGallery = {
  async render() {
    return `
    <article>
    <section class="detail">
    <div class="lokasi">
    <p> <a href="#/beranda"> Beranda</a> >> <a href="#/detail-gallery/:id"> Detail Galeri</a></p>
    </div>
  <h2><strong>Galeri</strong></h2>
  <div class="detailImg" id="detail-gallery">
    <!-- Konten galeri akan dimuat di sini -->
  </div>
  </section>
</article>
    `;
  },

  async afterRender() {
    try {
      const id = window.location.hash.split('/').pop(); // Ambil ID dari URL

      const response = await axios.get(`http://localhost:5000/galleries/${id}`);
      const gallery = response.data;

      if (!gallery) {
        throw new Error('Gallery not found');
      }

      const detailGalleryElement = document.getElementById('detail-gallery');
      detailGalleryElement.innerHTML = `
        <picture>
          <source srcset="${gallery.url} 480w, ${gallery.url} 800w" sizes="(max-width: 600px) 480px, 800px" type="image/webp">
          <img src="${gallery.url}" alt="${gallery.name}" loading="lazy" />
        </picture>
        <p>${gallery.description}</p>
      `;
    } catch (error) {
      console.error(error);
      // Handle the error appropriately in your application
    }
  },
};

export default DetailGallery;
