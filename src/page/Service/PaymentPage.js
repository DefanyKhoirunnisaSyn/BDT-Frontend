import React from 'react';

function PaymentPage() {
  return (
    <div>
      <div className="bg-gray-200 h-64 flex items-center justify-center">
        <span className=' text-4xl font-bold mb-4'>Cara Pembayaran</span>
      </div>
      <main className="bg-gray-100 p-8 min-h-screen">
        <div className="bg-white p-8 rounded shadow-lg">
          <section className="text-left mb-8">
            <p className="mb-4 text-lg text-justify font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PaymentPage;
