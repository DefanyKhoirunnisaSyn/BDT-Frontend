import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Polaroid() {
  const navigate = useNavigate();

  const products = [
    { name: 'Cetak Buku', price: 'Rp. 15.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
    { name: 'Cetak Stiker A3+', price: 'Rp. 3.000' },
  ];

  const [produkData, setProdukData] = useState([]);

  const { jenis} = useParams();

  useEffect(() => {
    // Fetch data from API
    fetch(`https://bdt24-fs046.vercel.app/api/produk/jenis/Polaroid`)
      .then(response => response.json())
      .then((data) => {
        console.log(data.data);
        setProdukData(data.data.produk);
      });
  }, []);

  const handleProductClick = () => {
    navigate('/product-detail');
  };

  return (
    <div className="container mx-auto mt-4 px-4">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold text-gray-700">Polaroid</h1>
        <input
          type="text"
          placeholder="Cari Produk..."
          className="p-2 border rounded w-full max-w-md"
        />
      </div>
      <div className="flex items-center mb-4 text-gray-600">
        <span>Home</span>
        <span className="mx-2">&gt;</span>
        <span>Polaroid</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {produkData.map(item => (
        <div className="border p-2 rounded-md" key={item.id}>
          <Link to={`/product-detail/${item._id}`} className="block">
            <div className="bg-gray-200 h-32 mb-2">
              <img src={`https://bdt24-fs046.vercel.app/produk/${item.image}`} alt={item.nama} className="h-full w-full object-cover" />
            </div>
            <div className='ml-2 justify-start'>{item.nama}</div>
            <div className="ml-2 mb-4 text-red-500">{item.harga}</div>
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Polaroid;
