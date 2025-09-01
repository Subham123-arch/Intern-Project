"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { product } from "./product";

type Todo = {
  id: number;
  title: string;
};

type product = {
  map: any;
  id: number;
  title: string;
  description: string;
  thumbnail: string;
};

export default function App() {
  const [todo, setTodo] = useState<null | Todo>(null);
  const [data, setData] = useState<{
    products: product[];
  }>({ products: [] });
  const [loading, setLoading] = useState(true);

  // Fetch all products
  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })  
      .catch((err) => {
        // console.error("Error fetching data:", err);
      });
  }, []);

  // Fetch one product example
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("https://dummyjson.com/products/6");
        // const json = await response.json();

        setTodo(response.data);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  

  // console.log(todo);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
     {
      data?.products?.length > 0 ? <>
       {loading ? ( 
        <div role="status" className="max-w-sm animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {data?.products.length > 0 &&
              data?.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  {/* Product Image */}
                  <img
                    className="rounded-t-lg w-full h-50 object-fill"
                    src={product.thumbnail}
                    alt={product.title}
                  />

                  {/* Product Content */}
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-1">
                      {product.title}
                    </h5>
                    <p className="mb-3 text-sm text-gray-700 line-clamp-3">
                      {product.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                    >
                      Read more
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
      </> :  <p className="text-red-600 text-center">Products are not available at the moment</p> 
     }
      

      {/* Grid container */}
    </div>
  );
}
