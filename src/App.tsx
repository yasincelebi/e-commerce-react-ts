import React, { ReactElement, useState, useEffect } from "react";
import NavigationBar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";
export default function App(): ReactElement {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const data = await commerce.products.list();

    setProducts(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <NavigationBar />
      <Products />
    </div>
  );
}
