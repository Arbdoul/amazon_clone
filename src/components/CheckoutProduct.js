import React from "react";
import "./CheckoutProduct.css";
import { useState } from "react";
import { Box, Rating } from "@mui/material";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

const CheckoutProduct = ({ id, image, title, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const [ratingValue, setRatingValue] = useState(3); // Initial rating value
  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  const removeFromBasket = () => {
    //remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <FlipMove>
      <div className="checkoutProduct" key={id}>
        <img
          className="checkoutProduct_image"
          src={image}
          alt="checkout product"
        />

        <div className="checkoutProduct_info">
          <p className="checkoutProduct_title">{title}</p>
          <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="product_rating">
            <Box component="fieldset" borderColor="transparent">
              <Rating
                name="simple-controlled"
                value={rating}
                precision={0.5}
                onChange={handleRatingChange}
              />
            </Box>
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </FlipMove>
  );
};

export default CheckoutProduct;
