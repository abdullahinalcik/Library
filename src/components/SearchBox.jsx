import React from 'react'
import { useState } from 'react'

const SearchBox = () => {
    const [category,setCategory]=useState("")
    const [toggle,setToggle]=useState(false)
  return (
    <div className="max-w-screen-md items-center  mx-auto p-4 my-10">
    <form>
      <div className="flex">
        <button
          data-dropdown-toggle="select"
          className="flex-shrink-0  inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg--100 border border-gray-300 rounded-l-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
          onClick={() => setToggle(!toggle)}
        >
          { category ? category:"Categories" }
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          id="select"
          className={` ${toggle? "":"hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 `}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button-2"
          >
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
                onClick={()=>{
                  setCategory("Books")
                  setToggle(!toggle)
                }}
              >
                <div className="inline-flex items-center">Books</div>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
                onClick={()=>{
                  setCategory("Magazines")
                  setToggle(!toggle)
                
                }}
              >
                <div className="inline-flex items-center">Magazines</div>
              </button>
            </li>
          </ul>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id='location-search"'
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search for books or magazines"
            required=""
          />
          <button
            type="submit"
            className="absolute top-0 right-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
        
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default SearchBox