// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import Loading from "./Loading";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import { useEffect } from "react";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(null);

  const getproductscategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setfilteredProducts(products);
    if (category != "undefined") {
      //getproductscategory();

      setfilteredProducts(products.filter(p=>p.category == category))

    }
  
  }, [category, products]);

  return products ? (
    <>
      <Nav />

      <div className=" w-[80%]  p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              key={i}
              to={`/details/${p.id}`}
              className="mr-3 mb-3 card p-3  border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center "
            >
              <div
                className=" hover:scale-110 w-full mb-3 bg-center h-[80%] bg-contain bg-no-repeat "
                style={{ backgroundImage: `URL(${p.image})` }}
              ></div>
              <h1 className="hover:text-blue-300">{p.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
