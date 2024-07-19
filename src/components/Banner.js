import React from 'react';
import BannerImg from '../images/banner.png'

function Banner() {
  return (
    <div className="mt-4 mx-4 bg-gray-200 h-64 flex items-center justify-center ">
      <img src={BannerImg} alt="Banner" className="w-full h-full object-cover" />
    </div>
  );
}

export default Banner;