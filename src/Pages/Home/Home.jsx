import React from "react";
import Hero1 from "../../Components/Hero Section/Hero1";
// import Hero2 from "../../Components/Hero Section/Hero2";
import Cards from "../../Components/Cards/Cards1/Cards1";
import Hero3 from "../../Components/Hero Section/Hero3";
import Faq from "../../Components/Faq/Faq";
import Howitworks from "../../Components/How it works/Howitworks";
import Report from "../../Components/Report/Report";

const Home = () => {
  return (
    <>
      <div className="w-[100%] h-screen flex justify-center items-center bg-custom-gradient">
      <Hero1 />
      </div>
      {/* <Hero2/> */}
      <Cards/>
      <Hero3/>
      <Howitworks/>
      <Faq/>
      <Report/>
    </>
  );
};

export default Home;
