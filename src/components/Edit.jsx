// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../utils/Context";
//import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


const Edit = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
  const { id } = useParams();
  const [product, setproduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
    const changeHandler = (e) => {
        // console.log(e.target.name, e.target.value);
    
        setproduct({ ...product,  [e.target.name]: e.target.value })
  };
  // const [title, settitle] = useState("");
  // const [image, setimage] = useState("");
  // const [category, setcategory] = useState("");
  // const [price, setprice] = useState("");
  // const [description, setdescription] = useState("");

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id[0]));
  }, [id]);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5 ||
      product.category.trim().length < 5
    ) {
      alert("Each and Every input must have at least 4 Characters");
      return;
    }

      const pi = products.findIndex((p) => p.id == id[0]);
      const copyData = [...products];
      copyData[pi] = { ...products[pi], ...product };
    
    // setproducts(...products, product)
    setproducts(copyData);

      localStorage.setItem("products", JSON.stringify(copyData));
      toast.success("Edition Successfull")
    navigate(-1);
  };
  return (
    <div>
      <form
        onSubmit={AddProductHandler}
        className=" flex flex-col items-center p-[5%] w-screen h-screen"
      >
        <h1 className="text-3xl w-1/2 mb-5">Edit Product</h1>
        <input
          type="url"
          placeholder="Image Link"
          className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
          name="image"
          onChange={changeHandler}
          value={product && product.image}
        />
        <input
          type="text"
          placeholder="Title"
          className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
          name="title"
          onChange={changeHandler}
          value={product && product.title}
        />
        <div className="w-1/2 flex justify-between">
          <input
            type="text"
            placeholder="Category"
            className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
            name="category"
            onChange={changeHandler}
            value={product && product.category}
          />
          <input
            type="number"
            placeholder="Price"
            className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
            name="price"
            onChange={changeHandler}
            value={product && product.price}
          />
        </div>

        <textarea
          placeholder="Enter product Description here..."
          onChange={changeHandler}
          name="description"
          value={product && product.description}
          className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
          rows="10"
        ></textarea>
        <div className="w-1/2">
          <button className="self-start py-3 px-5 border rounded border-blue-300 text-blue-300">
            Edit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
