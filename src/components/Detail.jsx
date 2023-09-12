import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../context/BookContex'
import { useParams } from 'react-router-dom'
import b from "../assets/b.png";
import { useEffect } from 'react';

const Detail = () => {
  const {searchData,getData}=useContext(BookContext)
  console.log("detail",searchData);
  const { id } = useParams()
  const selectedBook= searchData.filter((item)=>item.id==id)
  console.log(selectedBook);
  console.log(selectedBook[0]);
  console.log(selectedBook[0].volumeInfo.imageLinks?.smallThumbnail );
  // useEffect(() => {
  //   getData() 
   
  // }, [])
  
  // console.log(selectedBook[0]?.volumeInfo?.authors);
  
  return (

   <div className='text-center max-w-screen-md items-center  mx-auto p-4 my-10'>
    
    <h1 className='my-4 mb-10 text-4xl font-serif font-bold '>{selectedBook[0].volumeInfo?.title}</h1>
    <img className='m-auto h-96 w-80' src={selectedBook[0].volumeInfo.imageLinks?.smallThumbnail } alt="" />
    <h5 className='font-serif font-bold my-3'>Authors: {selectedBook[0].volumeInfo?.authors}</h5>
    <p>{selectedBook[0].volumeInfo?.description}</p>
   </div>
  )
}

export default Detail