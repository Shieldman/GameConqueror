import React from "react";
import Slider from "../components/Slider/Slider";
import CardsModule from "../components/CardsModule/CardsModule";
import Logout from "../components/Logout/Logout";

const HomePage = () => {
  return (
    <>
      <Slider />
      <CardsModule />
      <Logout/>
    </>
  );
};

export default HomePage;
