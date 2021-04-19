import React, { ReactElement, useState, useEffect } from "react";
import NavigationBar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";

export default function App(): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState([]);
  const getProducts = async (): Promise<void> => {
    const data = await commerce.products.list();
    setProducts(data.data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavigationBar />
      <Products products={products} />
    </div>
  );
}
