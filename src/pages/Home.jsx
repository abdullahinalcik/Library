import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import Card from "../components/Card";
import { useEffect } from "react";
import { useContext } from "react";
import { BookContext } from "../context/BookContex";
// import { Card } from "flowbite-react";

const Home = () => {
  const { type, setType, search, setSearch, getData,searchData } = useContext(BookContext);
  useEffect(() => {
 
    getData()

 
 
 }, [])
 console.log(searchData);
 
  return (
    <>
      <SearchBox />
      <div className="gap-4 flex max-w-screen-xl flex-wrap  mx-auto justify-center">
      {searchData.length&&searchData.map((items)=> (<Card key={items.id} items={items}/>))}
    
       
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </>
  );
};

export default Home;
