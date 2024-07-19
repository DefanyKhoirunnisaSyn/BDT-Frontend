import React from 'react';
import instagramIcon from '../images/instagram.png';
import facebookIcon from '../images/facebook.png';
import shopeeIcon from '../images/shopee.png';
import tokopediaIcon from '../images/logo_ig.png';
import whatsappIcon from '../images/whatsapp.png';

function Footer() {
  return (
    <footer className="bg-[#B0A695] p-8">
      <div className="flex justify-between items-start">
        {/* Tentang Kami Section */}
        <div>
          <h3 className="font-bold mb-4 text-xl">Tentang Kami</h3>
          <ul>
            <li className="flex items-center mb-2 text-lg">
              <span className="mr-2">▶</span> Jam Layanan
            </li>
            <li className="flex items-center mb-2 text-lg">
              <span className="mr-2">▶</span> Tentang
            </li>
            <li className="flex items-center mb-2 text-lg">
              <span className="mr-2">▶</span> Hubungi Kami
            </li>
            <li className="flex items-center mb-2 text-lg">
              <span className="mr-2">▶</span> Cara Pembayaran
            </li>
            <li className="flex items-center mb-2 text-lg">
              <span className="mr-2">▶</span> Cara Pemesanan
            </li>
            <li className="flex items-center mb-2 text-lg">
              <span className="mr-2">▶</span> Syarat & Ketentuan
            </li>
          </ul>
        </div>

        {/* Hubungi Kami Section */}
        <div>
          <h3 className="font-bold mb-4 text-xl">Hubungi Kami</h3>
          <p className="text-lg">0823 2952 0842</p>
          <p className="text-lg">synofficialcompany@gmail.com</p>
          <div className="flex flex-col mt-4">
            <p className="font-bold mb-2 text-xl">Ikuti Kami</p>
            <div className="flex">

              <a href="https://instagram.com" className="mr-2">
                <img src={instagramIcon} alt="Instagram" className="h-10 w-10" />
              </a>
              <a href="https://facebook.com" className="mr-2">
                <img src={facebookIcon} alt="Facebook" className="h-10 w-10" />
              </a>
              <a href="https://shopee.com" className="mr-2">
                <img src={shopeeIcon} alt="Shopee" className="h-10 w-10" />
              </a>
              <a href="https://tokopedia.com">
                <img src={tokopediaIcon} alt="Tokopedia" className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Icon */}
        <div className="flex items-start">
          <img src={whatsappIcon} alt="WhatsApp" className="h-50 w-full" />
        </div>
      </div>
      <div className="text-center mt-4 text-lg">
        <span>Copyright © synchromatech.id. All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
