import React, { useState } from 'react';
import { FaHome, FaArrowDown } from 'react-icons/fa';
import Banner from '../components/Banner';
import shopeeIcon from '../images/shopee.png';
import tokopediaIcon from '../images/logo_ig.png';

function ProductDetail() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const images = [
    '/asset/image/image-1.png',  // Update with your actual image paths
    '/asset/image/image-2.png',
    '/asset/image/image-3.png',
  ];

  const handleImageChange = (index) => {
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="">
      <Banner />
      <div className="mt-4 flex flex-col items-start p-4">
        <div className="w-full border-t border-l border-r border-black border-b-4 border-brown-500 mb-4 rounded-sm flex justify-between items-center px-4 py-2">
          <div className="font-bold text-gray-700 text-xl">POLAROID</div>
          <div className="flex items-center text-gray-600 mr-2 text-lg">
            <FaHome className="mr-2" />
            <span>Home</span>
            <span className="mx-2">&gt;</span>
            <span>Polaroid</span>
          </div>
        </div>
        <div className="flex">
          <div className="relative flex-shrink-0 w-[450px] h-[450px] bg-gray-300 flex items-center justify-center">
            <button
              className="absolute left-0 bg-gray-500 text-white px-4 py-2 text-lg"
              onClick={handlePreviousImage}
            >
              &lt;
            </button>
            <img src={images[selectedImageIndex]} alt="Selected" className="w-full h-full object-cover" />
            <button
              className="absolute right-0 bg-gray-500 text-white px-4 py-2 text-lg"
              onClick={handleNextImage}
            >
              &gt;
            </button>
          </div>
          <div className="ml-6">
            <h1 className="text-5xl font-bold mb-4">POLAROID</h1>
            <p className="text-2xl mb-4 font-bold">Rp. 200 *start from</p>
            <div className="flex space-x-4 mb-4">
              <button className="bg-[#B0A695] text-white px-6 py-3 rounded text-xl">Pesan Sekarang</button>
              <button className="bg-white text-white rounded w-12 h-12">
                <img src={shopeeIcon} alt="Shopee" className="w-full h-full" />
              </button>
              <button className="bg-white text-white rounded w-12 h-12">
                <img src={tokopediaIcon} alt="Tokopedia" className="w-full h-full" />
              </button>
            </div>
            <button
              className="bg-gray-200 text-black px-6 py-3 rounded text-xl flex items-center justify-between"
              onClick={toggleDescription}
            >
              Deskripsi Produk <FaArrowDown className="ml-2" />
            </button>
            {showDescription && (
              <div className="mt-4 bg-gray-100 p-4 rounded text-lg">
                <p className='mb-4 font-mono pr-4'>Di Syn Chroma Tech, kami menawarkan beragam produk percetakan dan penyedia berbagai macam sparepart mesin percetakan.</p>
                <p className='font-mono pr-4'>Dengan mengakses atau menggunakan situs web Syn Chroma Tech, Anda tidak diperbolehkan melanggar hukum, mengganggu atau merusak sistem, atau tindakan lain yang dapat merugikan Syn Chroma Tech.</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex mt-4 space-x-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-36 h-36 bg-gray-300 flex items-center justify-center cursor-pointer ${index === selectedImageIndex ? 'border-4 border-black' : ''
                }`}
              onClick={() => handleImageChange(index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
