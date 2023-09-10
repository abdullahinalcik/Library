import  { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import Card from "../components/Card";
// import { Card } from "flowbite-react";

const Home = () => {

  return (
<>
<SearchBox/>
<Card/>
</>
  );
};

export default Home;
