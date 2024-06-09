import Beranda from '../views/pages/beranda';
import Detail from '../views/pages/detail';
import DetailArtikel from '../views/pages/detailArtikel';
import Login from '../views/pages/login';
import DaftarArtikel from '../views/pages/daftar-artikel';
import Kontak from '../views/pages/kontak';
import Register from '../views/pages/register';
import Donasi from '../views/pages/donasi';
import Gallery from '../views/pages/daftar-gallery';
import DetailGallery from '../views/pages/detail-gallery';

const routes = {
  '/': Beranda,
  '/beranda': Beranda,
  '/detail': Detail,
  '/detailArtikel': DetailArtikel,
  '/login': Login,
  '/daftar-artikel': DaftarArtikel,
  '/kontak': Kontak,
  '/register': Register,
  '/donasi': Donasi,
  '/daftar-gallery': Gallery,
  '/detail-gallery': DetailGallery,
};

export default routes;
