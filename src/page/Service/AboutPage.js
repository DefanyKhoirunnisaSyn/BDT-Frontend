import React from 'react';
import { useNavigate } from 'react-router-dom';

function AboutPage() {


  return (
    <div>
      <main className="bg-gray-100 p-8 min-h-screen">
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <span className='text-4xl font-bold mb-4'>Tentang</span>
        </div>
        <div className="bg-white p-8 rounded shadow-lg">
          <section className="text-left mb-8">
            <h2 className="text-left text-xl font-semibold mb-4">Tentang Tech Toch</h2>
            <p className="mb-4 text-justify">
              Di Tech Toch, kami menawarkan beragam produk percetakan dan penyedia berbagai macam sparepart mesin percetakan.
              Dengan mengakses atau menggunakan situs web Tech Toch, Anda tidak diperbolehkan melanggar hukum, mengganggu atau merusak sistem, atau tindakan lain yang dapat merugikan Tech Toch.
            </p>
            <button className="bg-[#B2AB99] text-black font-semibold p-2 rounded">

              Lihat Produk
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
