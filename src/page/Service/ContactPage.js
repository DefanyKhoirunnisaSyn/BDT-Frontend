import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage() {

  return (
    <div>
      <main className="bg-gray-100 p-8 min-h-screen">
        <div className="bg-gray-200 h-64 flex items-center justify-center">
          <span className=' text-4xl font-bold mb-4'>Hubungi Kami</span>
        </div>
        <div className="bg-white p-8 rounded shadow-lg">
          <section className="text-left mb-8">
            <p className="mb-4 font-mono text-lg">
              WhatsApp Admin: +62 823-2952-0842 (Tech Toch) <br />
              Email: techtoch@gmail.com <br />
              Instagram: @techtoch <br />
              Shopee: techtoch <br />
              Tokopedia: techtoch
            </p>
            <button className="bg-[#B2AB99] text-black font-semibold p-2 rounded">
              Mulai Pesanan
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
