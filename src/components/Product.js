import React, { useState } from "react";
import "./Product.css";
import { Box, Rating } from "@mui/material";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

const Product = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket >>>>>", basket);

  const [ratingValue, setRatingValue] = useState(3); // Initial rating value

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
  };

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product" key={id}>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
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
      </div>

      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
