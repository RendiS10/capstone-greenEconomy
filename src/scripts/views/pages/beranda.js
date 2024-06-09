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
      <section class="aboutWe" id="aboutwe">  
          <h2><strong>Tentang Kami</strong></h2>
          <p>
           Selamat datang di website green economy kami, kami berkomitmen agar website ini menjadi tolak ukur agar orang lebih peduli dengan lingkungan dengan cara menjadi volunteer dengan tim kami.
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
              lorem ipsum dolor, sit amet consectetur adipisicing elit lorem ipsum dolor, sit amet consectetur adipisicing elit
            </p>
          </div>
          </div>
          <div class="listartikel">
          <img
          src="images/image_5.png"
          alt=""
        />
        <div class="artikel-body">
          <h3>Judul Kegiatan</h3>
          <p>
            lorem ipsum dolor, sit amet consectetur adipisicing elit lorem ipsum dolor, sit amet consectetur adipisicing elit
          </p>
        </div>
        </div>
        <div class="listartikel">
        <img
        src="images/image_5.png"
        alt=""
      />
      <div class="artikel-body">
        <h3>Judul Kegiatan</h3>
        <p>
          lorem ipsum dolor, sit amet consectetur adipisicing elit lorem ipsum dolor, sit amet consectetur adipisicing elit
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
