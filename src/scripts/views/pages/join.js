const Join = {
  async render() {
    return `
  <article>
      <section class="galeri">
        <h2><strong>JOIN US</strong></h2>
        <div class="card-join">
          <span>
            <p><i>    
              ikuti event kami di kota anda !
            </i></p>
          </span>
       
          <div class="cards-project-join">
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit lor
              </p>
            </div>
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

export default Join;
