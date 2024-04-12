// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useContext } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const Create = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5 ||
      category.trim().length < 5
    ) {
      alert("Each and Every input must have at least 4 Characters");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    // setproducts(...products, product)
    setproducts((prevProducts) => [...prevProducts, product]);

    localStorage.setItem("products", JSON.stringify(products));
    toast.success("Product added Successfully");
    navigate("/");
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className=" flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="text-3xl w-1/2 mb-5">Add New Product</h1>
      <input
        type="url"
        placeholder="Image Link"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>

      <textarea
        placeholder="Enter product Description here..."
        onChange={(e) => setdescription(e.target.value)}
        value={description}
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        rows="10"
      ></textarea>
      <div className="w-1/2">
        <button className="self-start py-3 px-5 border rounded border-blue-300 text-blue-300">
          Add new Product
        </button>
      </div>
    </form>
  );
};

export default Create;
