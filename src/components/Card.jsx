import React from "react";
import { Link } from "react-router-dom";
import b from "../assets/b.png";
import Detail from "./Detail";
import { useContext } from "react";
import { BookContext } from "../context/BookContex";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toastErrorNotify } from "../helper/Toastify";

const Card = ({items}) => {
  const { volumeInfo } = items;
  const{user,setUser}=useContext(AuthContext)

  return (
    <div className="ms-0 mb-0 max-w-xs w-80 h-96 shadow-lg  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg m-auto mt-1 w-36 h-44" src={volumeInfo?.imageLinks?.smallThumbnail || b} alt={volumeInfo?.title} />
 
      <div className="p-5">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        {volumeInfo?.title}
        </h5>
        <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400 line-clamp-2">
        {items.volumeInfo.description}
        </p>
        <Link
          onClick={()=>{!(user.password && user.email)&&toastErrorNotify("Please Login")}}
          to={`detail/${items.id}`}
          className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
