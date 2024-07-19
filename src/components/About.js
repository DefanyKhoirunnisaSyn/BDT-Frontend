import React from 'react';

function About() {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-center mb-4">
        <hr className="flex-grow border-t-2 border-yellow-700" />
        <h2 className="text-center text-3xl font-bold mx-4">TENTANG</h2>
        <hr className="flex-grow border-t-2 border-yellow-700" />
      </div>
      <div className="bg-gray-200 p-6 rounded-md text-center">
        <h3 className="font-semibold mb-2 text-2xl text-center">Tentang Syn Chroma Tech</h3>
        <p className="text-lg text-center mt-4 mx-16">
          Di Syn Chroma Tech, kami menawarkan beragam produk percetakan dan penyedia berbagai macam sparepart mesin percetakan.
          Dengan mengakses atau menggunakan situs web Syn Chroma Tech, Anda tidak diperbolehkan melanggar hukum, mengganggu atau merusak sistem, atau tindakan lain yang dapat merugikan Syn Chroma Tech.
        </p>
      </div>
    </div>
  );
}

export default About;
