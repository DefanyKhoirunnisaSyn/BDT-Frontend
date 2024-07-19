import React from 'react';
import { useEffect, useState } from 'react';

function Recommendations() {
  const recommendations = [
    { name: "Cetak Buku", price: "Rp. 15.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    { name: "Cetak Stiker A3+", price: "Rp. 3.000" },
    // ... more recommendations
  ];

  const [produkData, setProdukData] = useState([]);

  useEffect(() => {
    fetch("https://bdt24-fs046.vercel.app/api/produk")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.data);
        setProdukData(data.data);
      });
  }, []);

  return (
    <div className="mt-4 bg-white p-4">
      <div className="border-t border-l border-r border-black border-b-4 border-brown-500 mb-4 rounded-sm">
        <h2 className="my-4 text-center text-yellow-700 font-bold">REKOMENDASI</h2>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-4">
      {produkData.map(item => (
        <div className="border p-2 rounded-md" key={item.id}>
        <div className="bg-gray-200 h-32 mb-2">
          <img src={`https://bdt24-fs046.vercel.app/produk/${item.image}`} alt={item.nama} className="h-full w-full object-cover" />
        </div>
        <div className='ml-2 justify-start'>{item.nama}</div>
        <div className="ml-2 mb-4 text-red-500">{item.harga}</div>
  </div>
))}

      </div>
    </div>
  );
}

export default Recommendations;
