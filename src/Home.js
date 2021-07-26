import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup21-page/Eng-Mobile/1348517_in_prime_mid_pd_1500x600._CB663332951_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="Sony WH-1000XM3 Industry Leading Wireless Noise Cancelling Headphones"
            rating={5}
            price={24000}
            img="https://m.media-amazon.com/images/I/3100PYQXsVL.__AC_SY200_.jpg"
            img1= "https://images-na.ssl-images-amazon.com/images/I/61D4Z3yKPAL._SX569_.jpg"
            detail = "Category > Electronics > Headphone"
            about = {['Digital noise cancelling: Industry leading Active Noise Cancellation (ANC) lends a personalized, virtually soundproof experience at any situation',
            'Voice assistant: Alexa, Google Assistant & Siri enabled (In-built) for voice access to music, information and more. Activate with a simple touch',
            'Speak-to-chat: Headphones use an array of smart technologies to create a seamless, hands-free listening experience. For eg, simply start speaking to automatically pause your music in Speak-to-Chat',
            "Wearing Detection: Proximity sensor and two acceleration sensors in your headphones can detect whether you're wearing them or not, then adapt playback accordingly to help save battery power",
            'Quick attention mode: Cover the right ear cup with your palm to turn down music for instant, easy conversation',
            'Smart listening: WH-1000XM4 adjusts the ambient sound to your activity to give you the best noise cancellation',
            'Long battery life: A single charge provides up to 30 hrs of playtime for reliable all day listening'
          ]}
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
            title="Bigmuscles Nutrition Premium Gold Whey 2kg [Belgian Chocolate] with Free T-Shirt"
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
