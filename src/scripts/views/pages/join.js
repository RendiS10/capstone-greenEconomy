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
            <picture>
              <source srcset="images/gdsate-small.jpg 480w, images/gdsate-large.jpg 800w" sizes="(max-width: 600px) 480px, 800px" type="image/jpg">
              <img src="images/gdsate.jpg" alt="" class = "lazyload" />
            </picture>
          <div class="card-body">
            <h3>Bandung</h3>
         <a href="https://chat.whatsapp.com/DgauoOuA7jr7qoMth2nlUo class="button-link">
        <button class="small-button-join">Klik Untuk Bergabung</button>
          </a>
            </div>
          </div>
          <div class="card">
            <picture>
              <source srcset="images/pesona-Surabaya-small.jpg 480w, images/pesona-Surabaya-large.jpg 800w" sizes="(max-width: 600px) 480px, 800px" type="image/jpg">
              <img src="images/pesona-Surabaya.jpg" alt="" class = "lazyload" />
            </picture>
          <div class="card-body">
            <h3>Surabaya</h3>
        <a href="https://chat.whatsapp.com/LQ1xtHDerUfBPAEykyJ4Jy" class="button-link">
        <button class="small-button-join">Klik Untuk Bergabung</button>
          </a>
            </div>
          </div>
          <div class="card">
            <picture>
              <source srcset="images/jogja-small.jpg 480w, images/jogja-large.jpg 800w" sizes="(max-width: 600px) 480px, 800px" type="image/jpg">
              <img src="images/jogja.jpg" alt="" class = "lazyload" />
            </picture>
            <div class="card-body">
              <h3>Yogyakarta</h3>
            <a href="https://chat.whatsapp.com/CxBUDKbaReqBAz7IsMYNl2" class="button-link">
        <button class="small-button-join">Klik Untuk Bergabung</button>
          </a>
            </div>
          </div>
          <div class="card">
            <picture>
              <source srcset="images/cimahi-small.jpg 480w, images/cimahi-large.jpg 800w" sizes="(max-width: 600px) 480px, 800px" type="image/jpg">
              <img src="images/cimahi.jpg" alt="" class = "lazyload" />
            </picture>
            <div class="card-body">
              <h3>Cimahi</h3>
              <a href="https://chat.whatsapp.com/G8SgTEodgvR28lfWmubjD0" class="button-link">
        <button class="small-button-join">Klik Untuk Bergabung</button>
          </a>
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
