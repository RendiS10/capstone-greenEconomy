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
        <img src="${gallery.url}" alt="${gallery.name}" />
        <p>${gallery.description}</p>
      `;
    } catch (error) {
      console.error(error);
      // Handle the error appropriately in your application
    }
  },
};

export default DetailGallery;
