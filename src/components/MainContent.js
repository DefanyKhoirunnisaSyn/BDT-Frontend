// src/components/MainContent.js
import React from 'react';

const MainContent = () => {
  return (
    <main className="p-4">
      <section className="bg-gray-300 h-64 flex items-center justify-center mb-4">
        Banner / Header Image
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Popular Products</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 h-40"></div>
          <div className="bg-gray-200 h-40"></div>
        </div>
      </section>
      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Rekomendasi</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-200 h-40 flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-24 w-full mb-2"></div>
            <span>Cetak Buku</span>
            <span>Mulai dari Rp. 15.000</span>
          </div>
          <div className="bg-gray-200 h-40 flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-24 w-full mb-2"></div>
            <span>Cetak Stiker A3+</span>
            <span>Mulai dari Rp. 3.000</span>
          </div>
          <div className="bg-gray-200 h-40 flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-24 w-full mb-2"></div>
            <span>Cetak Stiker A3+</span>
            <span>Mulai dari Rp. 3.000</span>
          </div>
          <div className="bg-gray-200 h-40 flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-24 w-full mb-2"></div>
            <span>Cetak Stiker A3+</span>
            <span>Mulai dari Rp. 3.000</span>
          </div>
          <div className="bg-gray-200 h-40 flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-24 w-full mb-2"></div>
            <span>Cetak Buku</span>
            <span>Mulai dari Rp. 15.000</span>
          </div>
          <div className="bg-gray-200 h-40 flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-24 w-full mb-2"></div>
            <span>Cetak Buku</span>
            <span>Mulai dari Rp. 15.000</span>
          </div>
          <div className="bg-gray-200 h-40 flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-24 w-full mb-2"></div>
            <span>Cetak Buku</span>
            <span>Mulai dari Rp. 15.000</span>
          </div>
          <div className="bg-gray-200 h-40 flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-24 w-full mb-2"></div>
            <span>Cetak Buku</span>
            <span>Mulai dari Rp. 15.000</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
