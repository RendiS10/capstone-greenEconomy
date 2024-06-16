class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="app-bar">
        <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
          <h1>Green Sustainify</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
            <li><a href="#/beranda">Beranda</a></li>
            <li><a href="#/daftar-artikel">Artikel</a></li>
            <li><a href="#/daftar-gallery">Gallery</a></li>
            <li><a href="http://localhost:3000/" class="navbar-login">Login</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('my-navbar', MyNavbar);
