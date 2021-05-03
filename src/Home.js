import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Cnnjpp/OnePlus_9Series/1/D22361055_OnePlus_9_Family_Design_SIM_Tall_hero_1500x600._CB670176272_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones"
            rating={5}
            price={24000}
            img="https://m.media-amazon.com/images/I/3100PYQXsVL.__AC_SY200_.jpg"
          />
          <Product
            id={2}
            title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage) 17.22 centimeters"
            img="https://images-na.ssl-images-amazon.com/images/I/61YSMhOd5EL._SX679_.jpg"
            price={54999}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            img="https://images-na.ssl-images-amazon.com/images/I/71EWsnij3RL._UX569_.jpg"
            title="Tommy Hilfiger Men's Regular Fit T-Shirt"
            rating={3}
            price={2499}
          />
          <Product
            id={4}
            img="https://images-na.ssl-images-amazon.com/images/I/71RTgfYvg6L._SX679_.jpg"
            title="Bigmuscles Nutrition Premium Gold Whey 2kg [Belgian Chocolate] with Free T-Shirt|Whey Protein Isolate & Whey Protein Concentrate, 25g Protein Per Serving, 0g Sugar, 5.5g BCAA"
            rating={4}
            price={2249}
          />
          <Product
            id={5}
            img="https://images-na.ssl-images-amazon.com/images/I/61sElHXH4uL._SY450_.jpg"
            title="Bose TV Speaker"
            rating={5}
            price={26900}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            img="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SX679_.jpg"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            rating={5}
            price={102990}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
