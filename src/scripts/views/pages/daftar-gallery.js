const Gallery = {
  async render() {
    return `
    <article>
    <section class="daftar-galeri">
      <p> <a href = "#/beranda"> Beranda</a> >> <a href = "#/gallery"> Galeri</a></p>
      <h2><strong>Galeri</strong></h2>
      <div class="cards-project">
        <div class="card">
        <a href = "#/detail-gallery">
        <img
        src="images/image_5.png"
        alt=""
        />
        <div class="card-body">
        <h3>Judul Kegiatan</h3>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit
        </p>
        </div>
        </a>
        </div>
        <div class="card">
          <img
            src="images/image_5.png"
            alt=""
          />
          <div class="card-body">
            <h3>Judul Kegiatan</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="images/image_5.png"
            alt=""
          />
          <div class="card-body">
            <h3>Judul Kegiatan</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
        <div class="card">
          <img
            src="images/image_5.png"
            alt=""
          />
          <div class="card-body">
            <h3>Judul Kegiatan</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit lor
            </p>
          </div>
        </div>
      </div>
  </section>
  </article>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Gallery;
