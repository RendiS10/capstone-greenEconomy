class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="atas">
          <div class="footerImg">
            <img src="favicon2.png" alt="">
          </div>
          <div class="nama">
            <h4><strong>Capstone Project</strong></h4>
            <p>Muhammad fikriansyah J.P</p>
            <p>Rendi sutendi</p>
            <p>Ericho wicaksono</p>
          </div>
          <div class="contact">
            <h4><strong>Contact</strong></h4>
            <p>rendisutendi10@gmail.com</p>
          </div>
          <div class="followUs">
            <h4><strong>INGIN BERGABUNG MENJADI VOLUNTEER KAMI?</strong></h4>
            <p>Follow Us</p>
            <div class="icon">
              <i class="fab fa-github"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-instagram"></i>
            </div>
          </div>
        </div>
        <div class="bawah">
          <h4>Copyright © 2024 - Green Sustainify </h4>
        </div>
      </footer>
    `;
  }
}

customElements.define('my-footer', MyFooter);
