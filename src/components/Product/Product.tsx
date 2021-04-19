import styles from "./Product.module.scss";
import React, { ReactElement } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ProductTypes from "../productTypes";

type propsTypes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any[];
};

const Product: React.FC<propsTypes> = ({ product }): ReactElement => {
  
  console.log(product);
  return (
    <>
      <div>
        <Card className={styles.root}>
          <CardImg
            className={styles.media}
            top
            width="100%"
            src={product["media"].source}
          />

          <CardBody className={styles.cardbody}>
            <div className={styles.productrow}>
              <CardTitle tag="h5">{product["name"]}</CardTitle>
              <CardText>{product["price"].formatted}</CardText>
            </div>

            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>{product["description"]}</CardText>
            <div className={styles.buttoncontainer}>
              <Button className={styles.cartbutton} color="info">
                <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Product;
