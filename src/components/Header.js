import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'
import { FaHome } from 'react-icons/fa';


function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#B0A695] p-4 flex justify-between items-center relative">
      <div className="flex items-center">
        <div className="bg-gray-400 rounded-full overflow-hidden" style={{ width: 40, height: 40 }}>
          <img src={logo} alt="Logo" className="w-full h-full object-cover" />
        </div>
        <span className="ml-6 font-semibold text-lg">synchromatech.id</span>
        <div className="ml-2 text-black cursor-pointer" onClick={toggleDropdown}>
          &#9660;
        </div>
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute ml-12 mt-80 w-48 bg-white border rounded shadow-lg z-10"
          >
            <ul>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleNavigation('/service')}
              >
                Jam Layanan
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleNavigation('/about')}
              >
                Tentang
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleNavigation('/contact')}
              >
                Hubungi Kami
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleNavigation('/payment')}
              >
                Cara Pembayaran
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleNavigation('/order-method')}
              >
                Cara Pemesanan
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => handleNavigation('/terms-conditions')}
              >
                Syarat & Ketentuan
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <div className="mr-4 cursor-pointer" onClick={() => handleNavigation('/')}>
          <FaHome className="mr-2 text-4xl" />
        </div>
        <input
          type="text"
          placeholder="Cari Produk..."
          className="p-2 rounded border w-80"
        />
      </div>
    </header>
  );
}

export default Header;
