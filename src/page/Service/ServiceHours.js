// ServiceHours.js
import React from 'react';
function ServiceHoursPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-200 h-64 flex items-center justify-center">
        <span className=' text-4xl font-bold mb-4'>Jam Layanan</span>
      </div>
      <main className="flex-grow">
        <div className="bg-gray-200 p-8">
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Jam Layanan Kami:</h2>
            <p>Senin - Jum'at: 08.00 - 21.00</p>
            <p>Sabtu: 09.00 - 18.00</p>
            <p>Minggu: 12.00 - 17.00</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ServiceHoursPage;
