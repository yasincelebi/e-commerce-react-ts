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

const Product: React.FC<ProductTypes> = (props: ProductTypes): ReactElement => {
  return (
    <>
      <div>
        <Card className={styles.root}>
          <CardImg
            className={styles.media}
            top
            width="100%"
            src={props.image}
          />

          <CardBody className={styles.cardbody}>
            <div className={styles.productrow}>
              <CardTitle tag="h5">{props.name}</CardTitle>
              <CardText>{props.price}</CardText>
            </div>

            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>{props.description}</CardText>
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
