import React from "react"
import About from "../components/About"
import Banner from "../components/Banner"
import CategorySection from "../components/CategorySection"
import MainContent from "../components/MainContent"
import PopularProducts from "../components/PopularProducts"
import Recommendations from "../components/Recommendations"

function HomePage() {
  return (
    <>
      <Banner />
      <CategorySection />
      <PopularProducts />
      <Recommendations />
      <About />
    </>
  );
}

export default HomePage;