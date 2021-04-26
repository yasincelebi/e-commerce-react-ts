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
import { Typography } from "@material-ui/core";
type propsTypes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  product: any[];
  onAddToCart: (productId: number, quantity: number) => void;
};

const Product: React.FC<propsTypes> = ({
  product,
  onAddToCart,
}): ReactElement => {
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
              <CardText tag="h6">
                {product["price"].formatted_with_symbol}
              </CardText>
            </div>

            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <Typography
              dangerouslySetInnerHTML={{ __html: product["description"] }}
            />
            <div
              className={styles.buttoncontainer}
              onClick={() => onAddToCart(product["id"], 1)}
            >
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
