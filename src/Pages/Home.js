import React from "react";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import Loader from "../Components/Loading Screen/Loader";
import Quote from "../Components/Home/Quote component/Quote";
import Aboutwpu from "../Components/Home/Aboutwpu/Aboutwpu";
import Goals from "../Components/Home/Goals/Goals";
import Vision from "../Components/Home/Vision/Vision";
import { Parallax } from "react-scroll-parallax";
import Header from "../Components/Header/Header";
import Homegif from "../Assests/HomeHeader.gif";

const Home = () => {
  return (
    <>
      <Header
        gif={Homegif}
        text="Meet Startups"
      />
      <Aboutwpu />
      <Goals />
      <Vision />
      <Quote />
    </>
  );
};

export default Home;
