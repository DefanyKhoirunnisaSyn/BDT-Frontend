import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PopularProducts() {
  const [produkData, setProdukData] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch('https://bdt24-fs046.vercel.app/api/produk')
      .then(response => response.json())
      .then(data => {
        // Sort data by createdAt in descending order
        const sortedData = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        // Get the 3 newest items
        const newestData = sortedData.slice(0, 3);
        console.log(newestData);
        setProdukData(newestData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bg-white p-4">
      <h2 className="my-4 text-center text-yellow-700 font-bold">POPULAR PRODUCTS</h2>
      <div className="grid grid-cols-3 gap-4">
         {produkData.map(item => (
          <Link to={`/product-detail/${item._id}`} className="block">
        
          <div className="bg-gray-200 h-32 mb-2">
            <img src={`https://bdt24-fs046.vercel.app/produk/${item.image}`} alt={item.nama} className="h-full w-full object-cover" />
          </div>
         
          </Link>
      ))}
      </div>
    </div>
  );
}

export default PopularProducts;
