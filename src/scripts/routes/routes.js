import Beranda from '../views/pages/beranda';
import Detail from '../views/pages/detail';
import DetailArtikel from '../views/pages/detail-artikel';
import Login from '../views/pages/login';
import DaftarArtikel from '../views/pages/daftar-artikel';
import Kontak from '../views/pages/kontak';
import Join from '../views/pages/join';

import Donasi from '../views/pages/donasi';
import Gallery from '../views/pages/daftar-gallery';
import DetailGallery from '../views/pages/detail-gallery';

const routes = {
  '/': Beranda,
  '/beranda': Beranda,
  '/detail': Detail,
  '/detail-artikel/:id': DetailArtikel,
  '/login': Login,
  '/daftar-artikel': DaftarArtikel,
  '/kontak': Kontak,
  '/join': Join,
  '/donasi': Donasi,
  '/daftar-gallery': Gallery,
  '/detail-gallery/:id': DetailGallery,
};

export default routes;
