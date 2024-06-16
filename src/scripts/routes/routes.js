import Beranda from '../views/pages/beranda';
import Detail from '../views/pages/detail';
import DetailArtikel from '../views/pages/detail-artikel';
import DaftarArtikel from '../views/pages/daftar-artikel';
import Join from '../views/pages/join';
import Gallery from '../views/pages/daftar-gallery';
import DetailGallery from '../views/pages/detail-gallery';

const routes = {
  '/': Beranda,
  '/beranda': Beranda,
  '/detail': Detail,
  '/detail-artikel/:id': DetailArtikel,
  '/daftar-artikel': DaftarArtikel,
  '/join': Join,
  '/daftar-gallery': Gallery,
  '/detail-gallery/:id': DetailGallery,
};

export default routes;
