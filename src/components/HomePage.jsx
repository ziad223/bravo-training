import React from "react";
import Header from "./Header/Header";
import FeatureCategory from "./featureCategory/FeatureCategory";
import TrendingProduct from "./trendingProduct/TrendingProduct";
import Banner from "./banner/Banner";
import Fake from "./fake/Fake";
import Team from "./teams/Team";
import Dommy from "./dommy/Dommy";
import PopularBrands from "./popularBrands/PopularBrands";

const HomePage = ({addToCart}) => {
  return (
    <div>
      <Header />
      <FeatureCategory  />
      <TrendingProduct/>
      <Banner />
      <Fake addToCart = {addToCart} />
      <Team />
      <Dommy addToCart = {addToCart} />
      <PopularBrands />
    </div>
  );
};

export default HomePage;
