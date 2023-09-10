import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import Card from "../components/Card";
// import { Card } from "flowbite-react";

const Home = () => {
  return (
    <>
      <SearchBox />
      <div className="gap-4 flex max-w-screen-xl flex-wrap  mx-auto justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
