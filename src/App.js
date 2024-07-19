import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import CategorySection from './components/CategorySection';
import PopularProducts from './components/PopularProducts';
import Recommendations from './components/Recommendations';
import About from './components/About';
import Footer from './components/Footer';
import Polaroid from './page/Polaroid';
import HomePage from './page/HomePage';
import ProductDetail from './page/ProductDetail';
import AboutPage from './page/Service/AboutPage';
import ContactPage from './page/Service/ContactPage';
import OrderPage from './page/Service/OrderPage';
import PaymentPage from './page/Service/PaymentPage';
import ServiceHoursPage from './page/Service/ServiceHours';
import TermsCondition from './page/Service/TermsCondition';

const PolaroidPage = () => <div>Polaroid Page</div>;
const CetakBukuPage = () => <div>Cetak Buku Page</div>;
const CetakStikerPage = () => <div>Cetak Stiker Page</div>;
const CetakPosterPage = () => <div>Cetak Poster Page</div>;
const PrintA3Page = () => <div>Print A3+ Page</div>;
const CetakBannerPage = () => <div>Cetak Banner Page</div>;
const CetakBrosurPage = () => <div>Cetak Brosur Page</div>;
const SablonPage = () => <div>Sablon Page</div>;
const TonerPage = () => <div>Toner Page</div>;
const SparePartPage = () => <div>Spare Part Page</div>;
const KartuNamaPage = () => <div>Kartu Nama Page</div>;
const IDCardPage = () => <div>ID Card Page</div>;
const KertasPage = () => <div>Kertas Page</div>;
const MesinPage = () => <div>Mesin Page</div>;
const DeveloperPage = () => <div>Developer Page</div>;
const SemuaProdukPage = () => <div>Semua Produk Page</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <HomePage />

            // <>
            //   {/* <PaymentPage /> */}
            //   {/* <ContactPage /> */}
            //   {/* ProductDetail */}
            //   {/* <AboutPage /> */}
            //   {/* <CategorySection />
            //   <PopularProducts />
            //   <Recommendations />
            //   <About /> */}
            // </>
          } />
          <Route path="/polaroid" element={<Polaroid />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/service" element={<ServiceHoursPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms-conditions" element={<TermsCondition />} />
          <Route path="/order-method" element={<OrderPage />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
