import React from "react";
import avatar from "../assets/avatar.webp"
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="w-full  max-w-sm m-auto shadow-2xl bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
  

      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-36 h-46 mb-3 rounded-full shadow-2xl"
          src={avatar}
          alt="Abdullah Inalcık"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Abdullah inalcik
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Frond-End Developer
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <Link
            to="https://github.com/abdullahinalcik"
            target="_blank"
            className=" text-6xl font-medium text-center text-black hover:scale-110 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >

               <AiFillGithub/>

         
          </Link>
          <Link
            to="https://www.linkedin.com/in/abdullah-inalcik/"
            target="_blank"
            className="  text-6xl font-medium text-center text-black  hover:scale-110 transition-all focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            <AiFillLinkedin/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
