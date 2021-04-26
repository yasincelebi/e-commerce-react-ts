import React, { ReactElement, useState, useEffect } from "react";
import NavigationBar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { commerce } from "./lib/commerce";

export default function App(): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const getProducts = async (): Promise<void> => {
    const data = await commerce.products.list();
    setProducts(data.data);
  };
  const fetchCart = async () => {
    const resCart = await commerce.cart.retrieve();
    setCart(resCart);
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    getProducts();
    fetchCart();
  }, []);
  console.log(cart);
  return (
    <div>
      <NavigationBar />
      <Products products={products} onAddToCart={handleAddToCart} />
    </div>
  );
}
