import React from "react";
import Slider from "../../components/slider/Slider";
import "./home.scss";
import FeaturedProducts from "../../components/featuredProducts/FeaturedProducts";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
      <FeaturedProducts type="trending" />
    </div>
  );
};

export default Home;
