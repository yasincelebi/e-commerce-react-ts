import React, { ReactElement } from "react";
import { Container, Row, Col } from "reactstrap";
import Product from "../Product/Product";
import ProductTypes from "../productTypes";
type productsTypes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[];
  onAddToCart: (productId: number, quantity: number) => void;
};
const Products: React.FC<productsTypes> = ({ products, onAddToCart }) => {
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
