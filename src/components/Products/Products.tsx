import React, { ReactElement } from "react";
import { Container, Row, Col } from "reactstrap";
import Product from "../Product/Product";
import ProductTypes from "../productTypes";
const products: ProductTypes[] = [
  {
    id: 1,
    name: "Shoes",
    description: "Shoes",
    price: "$54",
    image:
      "https://lh3.googleusercontent.com/proxy/w2_EHjHA9Zd1DydlH3ffD4cnnVbx2BeXzmJyT_O6HFaSNLS4XIiz8ctiP9Eu0fVqJAQhdWxqPWXM-hgdzvzRIRXd-WCjSNSze1g61lCcQhkwGh1GKh_GnMPCXZSG0dWjvHePFYf-YA",
  },
  {
    id: 2,
    name: "Clothes",
    description: "Zara Clothes",
    price: "$33",
    image:
      "https://www.iienstitu.com/uploads/blog%20yaz%C4%B1lar%C4%B1-%20haziran%20(2020)/urun-fotografi-cekmeniz-icin-bilmeniz-gereken-5-teknik.jpeg",
  },
  {
    id: 3,
    name: "Bags",
    description: "Just Bags",
    price: "$33",
    image:
      "https://images.squarespace-cdn.com/content/v1/58412fc9b3db2b11ba9398df/1592871314477-PHKEXWJGJKTOVE1WFTNB/ke17ZwdGBToddI8pDm48kPRPfF7iGTQlN_HblE0-rw17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iy8Rj2bPXFyaluz0PeKicNeOG44PLUr71pvuODVcFtV0YIapNWlU5y1sX93YwLcUg/%C3%BCr%C3%BCn-foto%C4%9Fraf%C4%B1-%C3%A7ekmek-%C3%BCr%C3%BCn-a%C3%A7%C4%B1s%C4%B1",
  },
  {
    id: 4,
    name: "Sneakers",
    description: "Sneakers",
    price: "$33",
    image: "https://i.ytimg.com/vi/YbA3xRKhAuI/maxresdefault.jpg",
  },
];

const Products: React.FC = (): ReactElement => {
  return (
    <Container>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product
                name={product.name}
                key={product.id}
                id={product.id}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
