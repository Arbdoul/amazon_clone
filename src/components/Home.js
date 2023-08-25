import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://amazon-clone-with-stripe-payment.netlify.app/images/banner.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="0946"
            title="the lean startup"
            price={29.99}
            image="https://hips.hearstapps.com/hmg-prod/images/best-amazon-products-1622854678.png"
            rating={5}
          />
          <Product
            id="125783"
            title="Kenwood Kmix Stand Mixer fot baking, SStylish kitchen Mixer
            with k-beater, Dough Hook and whisk, 5 litre 
            Glass Bowl"
            price={300.9}
            rating={4}
            image="https://marketplace.canva.com/EAEUNaZvSwI/1/0/1600w/canva-white-and-grey-conservative-%26-minimal-wireless-earbuds-electronics-product-images-3GO3X2ZZgyE.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12"
            title="samsung s10 plus"
            price={200.99}
            rating={3.5}
            image="https://m.media-amazon.com/images/I/51QcNhMe3KL.jpg"
          />
          <Product
            id="3462"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={99.9}
            rating={4}
            image="https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/W/U/94285_1643813626.jpg"
          />
          <Product
            id="87465"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB - SILVER (4TH Generation)"
            price={598.99}
            rating={4.5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQRywwDXLiLjrC0IYcfW9R07PBnJe_a90vYA&usqp=CAU"
          />
        </div>

        <div className="home_row">
          <Product
            id="098"
            title="samsung s20 plus"
            price={350.9}
            rating={4.5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4UTUTkoeUCox3jTSH_6K_hwx_Cdkn62p8u-Smqjdj74k2c3J4FgUm0rngiRGfdNQjYkk&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
