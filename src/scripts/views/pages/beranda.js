const Beranda = {
  async render() {
    return `
    <article>
      <section class="about">
        <div class="aboutImg">
          <img src="images/image_2.png" alt="" />
        </div>
        <div class="aboutDescription">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea maxime
            quaerat nisi cumque! Iure odio debitis similique eius, nihil
            libero non animi doloremque atque ullam tempore suscipit
            temporibus, quas necessitatibus! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Fugiat velit distinctio nihil quos
            nobis suscipit dignissimos nesciunt soluta reprehenderit
            consectetur officia, nulla rerum impedit a laudantium accusamus.
            Delectus, iusto itaque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veritatis architecto vitae repudiandae sit,
            reiciendis suscipit placeat tempora consectetur sed dolorem
            deserunt quod sapiente dolor officiis sequi. Veritatis minima
            voluptates optio.
          </p>
          <button><a href = "#/detail" >Baca Selengkapnya</a></button>
        </div>
      </section>
      <section class="aboutWe" id="aboutwe">  
          <h2><strong>Tentang Kami</strong></h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
            quaerat rerum. Esse, sed. Iste ex magnam ipsam nihil! Laudantium
            nemo id reiciendis sit distinctio illum nisi, quasi in voluptas
            impedit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Obcaecati labore natus amet minima odit! Quibusdam assumenda
            delectus placeat, culpa mollitia beatae, officia hic, qui
            excepturi illo quas sit quod voluptate? Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Culpa fugiat aspernatur iste,
            aliquid nihil pariatur voluptates, doloremque molestiae commodi
            accusamus obcaecati architecto, maxime rerum et molestias
            excepturi amet tempora nam?
          </p>
    
      </section>
      <section class="galeri">
          <h2><strong>Galeri</strong></h2>
          <div class="cards-project">
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
          </div>
      </section>
      <section class="join">
          <h2>Gabung Bersama Kami</h2>
          <div class="button">
            <button><a href="">Join</a></button>
            <button><a href="https://kitabisa.com/campaign/pohonkebaikanuntuklingkungan">Donasi</a></button>
          </div>
      </section>
      <section class="artikel">
        <h2><strong>Artikel</strong></h2>
        <hr>
        <div class="artikels">
          <div class="listartikel">
            <img
            src="images/image_5.png"
            alt=""
          />
          <div class="artikel-body">
            <h3>Judul Kegiatan</h3>
            <p>
              Lorem ipsum dolo
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

export default Beranda;
