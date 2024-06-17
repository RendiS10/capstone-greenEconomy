import 'regenerator-runtime';
import '../components/my-navbar';
import '../components/my-hero';
import '../components/my-footer';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
