/* eslint-disable no-undef */
import axios from 'axios';

const Gallery = {
  async render() {
    return `
    <article>
    <section class="daftar-galeri">
     <div class="lokasi">
      <p> <a href = "#/beranda"> Beranda</a> >> <a href = "#/daftar-gallery"> Daftar Galeri</a></p>
    </div>
      <h2><strong>Galeri</strong></h2>
      <div class="cards-project" id="gallery-list">
       
      </div>
  </section>
  </article>
    `;
  },

  async afterRender() {
    // Mengambil data galeri dari server
    const response = await axios.get('http://localhost:5000/galleries');
    const galleries = response.data;
    const galleryListElement = document.getElementById('gallery-list');
    galleries.forEach((gallery) => {
      const galleryElement = `
        <a href="#/detail-gallery/${gallery.id}">
          <div class="card">
            <img src="${gallery.url}" alt="${gallery.name}" />
            <div class="card-body">
            <h3>Judul : ${gallery.name}</h3>
            </div>
          </div>
          </a>
        `;
      galleryListElement.innerHTML += galleryElement;
    });
  },
};

export default Gallery;
