// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useContext } from 'react';
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'
const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];
  
  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
    
  };


  return (
    <nav className="w-[20%] h-full bg-zinc-50 flex flex-col items-center pt-5 ">
      <h1
        className="text-3xl text- hover:scale-110 shadow-[0_9px_0_rgb(0,0,0)] transition-all ease-out p-2 border-2 border-black 
hover:translate-y-1 hover:shadow-[0_4px_0px_rgb(0,0,0)]  mt-4 mb-8 w-1/2 font-serif text-orange-600"
      >
        Trendify
      </h1>
      <a
        className="py-3 px-5 border rounded border-blue-200 text-blue-300"
        href="/create"
      >
        Add new Product
      </a>
      <hr className="w-[80%]" />
      <h1 className="text-2xl  w-[80%] mt-5 mb-5">Categories Filter</h1>
      <div className=" w-[80%]">
        {distinct_category.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className=" flex items-center mb-3"
          >
            <span
              style={{ backgroundColor: color() }}
              className=" rounded-full mr-2 w-[15px] h-[15px] "
            ></span>{" "}
            {c}{" "}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav
