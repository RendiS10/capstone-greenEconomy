const DaftarArtikel = {

  async render() {
    return `
    <article>
    <div class="lokasi">
      <p> <a href = "#/beranda"> Beranda</a> >> <a href = "#/daftar-artikel"> Daftar Artikel</a></p>
    </div>
    <section>
      <h2>Daftar List Artikel</h2>
        <div class="artikelList">
          <img src="images/image_5.png" alt="">
          <div class="textArtikel">
            <h3>Judul Kegiatan</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. vero necessitatibus omnis iste iure inventore minus dolorum alias expedita, odit voluptates dolore dolor aut dolores optio at explicabo modi cum facere, eaque non suscipit, nesciunt fugiat. Totam, numquam.
            Voluptate expedita ipsum repudiandae, cum, voluptas ratione inventore sapiente distinctio eum ut in ab ducimus. Fuga illo ex eaque, soluta ipsam magnam voluptate illum ad molestias officiis quam repellat accusamus?</p>
            <a href="">Baca Selengkapnya >> </a>
          </div>
        </div>
        <hr>
        <h2>Daftar List Artikel</h2>
        <div class="artikelList">
          <img src="images/image_5.png" alt="">
          <div class="textArtikel">
            <h3>Judul Kegiatan</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. vero necessitatibus omnis iste iure inventore minus dolorum alias expedita, odit voluptates dolore dolor aut dolores optio at explicabo modi cum facere, eaque non suscipit, nesciunt fugiat. Totam, numquam.
            Voluptate expedita ipsum repudiandae, cum, voluptas ratione inventore sapiente distinctio eum ut in ab ducimus. Fuga illo ex eaque, soluta ipsam magnam voluptate illum ad molestias officiis quam repellat accusamus?</p>
            <a href="">Baca Selengkapnya >> </a>
          </div>
        </div>
        <hr>
        <h2>Daftar List Artikel</h2>
        <div class="artikelList">
          <img src="images/image_5.png" alt="">
          <div class="textArtikel">
            <h3>Judul Kegiatan</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. vero necessitatibus omnis iste iure inventore minus dolorum alias expedita, odit voluptates dolore dolor aut dolores optio at explicabo modi cum facere, eaque non suscipit, nesciunt fugiat. Totam, numquam.
            Voluptate expedita ipsum repudiandae, cum, voluptas ratione inventore sapiente distinctio eum ut in ab ducimus. Fuga illo ex eaque, soluta ipsam magnam voluptate illum ad molestias officiis quam repellat accusamus?</p>
            <a href="">Baca Selengkapnya >> </a>
          </div>
        </div>
        <hr>
    </section>
  </article>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default DaftarArtikel;
