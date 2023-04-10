import React from "react";
import Loader from "../Components/Loading Screen/Loader";
import Quote from "../Components/Home/Quote component/Quote";
// import Aboutwpu from "../Components/Home/Aboutwpu/Aboutwpu";
import Goals from "../Components/Home/Goals/Goals";
import Vision from "../Components/Home/Vision/Vision";
import Header from "../Components/Header/Header";
import Homegif from "../Assests/HomeHeader.gif";
import Visionary from "../Components/Home/Visionary/Visionary";

const Home = () => {
  return (
    <>
      <Header
        gif={Homegif}
        text="Meet Startups"
      />
      <Visionary />
      {/* <Aboutwpu /> */}
      <Goals />
      <Vision />
      <Quote />
    </>
  );
};

export default Home;
