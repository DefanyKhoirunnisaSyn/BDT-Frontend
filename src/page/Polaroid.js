import React from 'react';
import { useNavigate } from 'react-router-dom';


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
    // Tambahkan produk lain sesuai kebutuhan
  ];

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
        {products.map((product, index) => (
          <div
            key={index}
            className="border p-2 mb-10 rounded shadow-sm cursor-pointer"
            onClick={handleProductClick}
          >
            <div className="bg-gray-200 h-48 mb-2"></div>
            <div className="text-center font-bold">{product.name}</div>
            <div className="text-center text-red-500">Mulai dari {product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Polaroid;
