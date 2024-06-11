class MyHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="hero" id="hero">
        <div class="overlay">
          <h2 tabindex="0">Green Sustainify Education</h2>
        </div>
      </div>
    `;
  }
}

customElements.define('my-hero', MyHero);
