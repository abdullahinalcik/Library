import React from "react";



const Footer = () => {
  return (
    <footer className="bg-white  dark:bg-gray-900 m-4">
    <div className="w-full  mx-auto  ">
      <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 " />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 {" "}
        <a
          href="https://www.linkedin.com/in/abdullah-inalcik/"
          target="_blank"
          className="hover:underline"
        >
          Abdullah Inalcik
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
  );
};

export default Footer;
