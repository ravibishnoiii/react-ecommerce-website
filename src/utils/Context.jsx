/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import axios from './axios';

export const ProductContext = createContext();

const Context = (props) => {
    const [products, setproducts] = useState(null);

    const getproducts = async () => {
        try {
            const { data } = await axios("/products");
            setproducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } 
    };
    console.log(products);

    useEffect(() => {
         getproducts();
    }, []);

    return (
        <ProductContext.Provider value={[products, setproducts]}>
            
            {props.children}
        </ProductContext.Provider>
    );
}

export default Context;
