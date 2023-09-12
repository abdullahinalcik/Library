import { useEffect } from "react";
import { createContext } from "react";
import axios from"axios";
import { useState } from "react";
import { data } from "autoprefixer";




export const BookContext=createContext()



const BookContexProvider = ({children}) => {

    const [type,setType]=useState("all")

    const [search,setSearch]=useState("react")

    const [searchData,setSearchData]=useState([])


    const API_KEY=import.meta.env.VITE_API_KEY
    // console.log(API_KEY);
    // console.log(`https://www.googleapis.com/books/v1/volumes?q=${search}&printType=${type}&key=${API_KEY}`);
    // console.log(search);
    // console.log(type);

    const url=`https://www.googleapis.com/books/v1/volumes?q=${search}&printType=${type}&key=${API_KEY}`

    // console.log(url);

  const getData = async()=>{
    try {
        const {data}=await axios(url)
        // console.log(data);
        setSearchData(data.items)
        // console.log("Bookscont",searhData);

    } catch (error) {
        console.log(error);
    }

    }

 

 const values={type,setType,search,setSearch,getData,searchData}

  return (
    <BookContext.Provider value={values}>{children}</BookContext.Provider>
  )
}

export default BookContexProvider
