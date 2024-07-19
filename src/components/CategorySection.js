import React from 'react';
import { useNavigate } from 'react-router-dom';

import Polaroid from '../images/icons/polaroid.png';
import CetakBuku from '../images/icons/cetak-buku.png';
import CetakStiker from '../images/icons/cetak-stiker.png';
import CetakPoster from '../images/icons/cetak-poster.png';
import PrintA3 from '../images/icons/print-a3.png';
import CetakBanner from '../images/icons/cetak-banner.png';
import CetakBrosur from '../images/icons/cetak-brosur.png';
import Sablon from '../images/icons/sablon.png';
import Toner from '../images/icons/toner.png';
import SparePart from '../images/icons/spare-part.png';
import KartuNama from '../images/icons/kartu-nama.png';
import IDCard from '../images/icons/id-card.png';
import Kertas from '../images/icons/kertas.png';
import Mesin from '../images/icons/mesin.png';
import Developer from '../images/icons/developer.png';
import SemuaProduk from '../images/icons/semua-produk.png';

const categories = [
  { name: 'Polaroid', link: '/produk/jenis/Polaroid', icon: Polaroid },
  { name: 'Cetak Buku', link: '/produk/jenis/cetak-buku', icon: CetakBuku },
  { name: 'Cetak Stiker', link: '/produk/jenis/cetak-stiker', icon: CetakStiker },
  { name: 'Cetak Poster', link: '/produk/jenis/cetak-poster', icon: CetakPoster },
  { name: 'Print A3+', link: '/produk/jenis/print-a3', icon: PrintA3 },
  { name: 'Cetak Banner', link: '/produk/jenis/cetak-banner', icon: CetakBanner },
  { name: 'Cetak Brosur', link: '/produk/jenis/cetak-brosur', icon: CetakBrosur },
  { name: 'Sablon', link: '/produk/jenis/sablon', icon: Sablon },
  { name: 'Toner', link: '/produk/jenis/toner', icon: Toner },
  { name: 'Spare Part', link: '/produk/jenis/spare-part', icon: SparePart },
  { name: 'Kartu Nama', link: '/produk/jenis/kartu-nama', icon: KartuNama },
  { name: 'ID Card', link: '/produk/jenis/id-card', icon: IDCard },
  { name: 'Kertas', link: '/produk/jenis/kertas', icon: Kertas },
  { name: 'Mesin', link: '/produk/jenis/mesin', icon: Mesin },
  { name: 'Developer', link: '/produk/jenis/developer', icon: Developer },
  { name: 'Semua Produk', link: '/produk/jenis/semua-produk', icon: SemuaProduk },
];

const CategorySection = () => {
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <div className="mt-6 grid grid-cols-8 gap-4 p-4 bg-white">
      {categories.map((category) => (
        <div
          key={category.name}
          onClick={() => handleNavigation(category.link)}
          className="cursor-pointer flex flex-col items-center justify-center p-4 bg-white hover:bg-gray-300 rounded-lg shadow-md"
        >
          <img src={category.icon} alt={category.name} className="w-10 h-10 mb-2" />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
