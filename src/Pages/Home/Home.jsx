import React from "react";
import Hero1 from "../../Components/Hero Section/Hero1";
// import Hero2 from "../../Components/Hero Section/Hero2";
import Cards from "../../Components/Cards/Cards1/Cards1";
import Hero3 from "../../Components/Hero Section/Hero3";
import Faq from "../../Components/Faq/Faq";

const Home = () => {
  return (
    <>
      <div className="w-[100%] h-screen flex justify-center items-center sm:border-b-2 sm:border-white
         @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }


      ">
      <Hero1 />
      </div>
      {/* <Hero2/> */}
      {/* <Hero3/> */}
      {/* <Cards/> */}
      <Faq/>
    </>
  );
};

export default Home;
