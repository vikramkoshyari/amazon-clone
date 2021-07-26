import React from "react";
import "./ProductDetail.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";


function ProductDetail(){

  const [{ product }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: product.title,
        img: product.img,
        price: product.price,
        rating: product.rating,
      },
    });
  };



  return (
    <div class = 'parent'>
      <div class = 'category'>
        <p>{product.detail}</p>
      </div>
      <div class = 'sale_banner'>
        <img src = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup21-page/ILM/1348895_in_prime_3_PD21_r1_640x45._CB663270726_.jpg"/>
      </div>
      <div class = 'product_detail'>
        <div class = 'product_image'>
          <img src = {product.img1}/>
        </div>

        <div class = 'product_data'>
          <div class = 'product_title'>
            <p>{product.title}</p>
          </div>
          <div className="product__rating">
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>

          <p className="product__price">
            <span class = 'label'>Price: </span>

            <span>
              ₹
              <strong>{product.price}</strong>
            </span>
          </p>

          <button onClick={addToBasket}>Add To Cart</button>

          <Link to = '/payment'>
            <button class = 'buy_now' onClick={addToBasket}>Buy Now</button>
          </Link>

          <div class = 'delivery'>
            <p>Free delivery : <span class = 'date'>Tommorrow</span></p>
          </div>

          <div class = 'offers_container'>

            <div class = 'offer_title'>
              <img src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2BJREFUeNq0WMGxm0AMBY/vIaccg4+5QQXBFcTuwK7gmwr8fwWQCkwHnw5MByanHE2OOYV0EMnz5JH372L2mzCjWQPaXa309CQcBBNc9ZdPO5Lk0XXCCQzJaDiS9CSL1c/f/XvXmnls6LoOGCOSnWN+NMZzs7Enp/FsGkX3zzTEJC8kLcmensUWnTPJ6d5ecw8vxjCqoXGLsDyRdCQlSYNwFSRr0lvhdzx2Ax9j2IBvJCuctEVocuCkIQNqfk8jeyGBwey1D64QemMGV0ebrmlcwhu8WUPPKqWTY+R3/Dyl9xymv1N75nLR4hyOBZ1+g9Dodx09T/G79V17PiJrEodRleN565mVvcyZG6jfB//3OjqM5HC22jMNjGHQfbfMaT3JcAdM8bzaovKZZAMs3nqGsUALVFBo6b52EZhK2U5lk2lIIfyDzVpD52CA/g2Ac6RuYTsNDDkZ3MGYSpVOojxcDmBnA8/V1tTGCTlEMTBkA/OFcUk3hMGJAcwD+Gc7UKcKxV2DPFMKu8ITtks2+WGhfja4HAjzBjo1U4HTGCiecbLeAWJ+XpDuEeHogLcM9y2wEgwcpAdTH3UtC1UMeaFMsgnMaTtZonQbbNwpLKX3CA8GFMBngDXK0OCXypYdI9L4FQvz3NKzFyqkjs2Q7+K+X+9orjYwpPExROod5NIPhWrBvcEd9QhDYtWnLDC/UOHObWUDibFTEbm0JaFF4QkAZoX1UMhUq8B6NTdgMKiGQZGJIWDuiHcdKKC5ySbeFKAVApPFXIbcpDE2iXG/VhyyMqbKuhzWhRji4pkrwk0eMIBnprHoJvDyV4OT5NAldDOzRZ1ZYnmPyiPVhF9ZFmOJk/9ByFtkqK1r1Exs9czeaCVdvbCUhNY4dY6NXlDnlrZ1EJoGxJe9+W6Cy84CKscCV+/4cBG8mVgOdUBVT01j7jVXS22QJxeNWntuFMjGUamLiTq95UBffdNc9TZj6FTBQI3qLI1VLM35UKgf/VS5boaKfVJZZTZf/PX5PNCCPGxMpD5VM9UGZEbTJO0HY+SEUjO5Ma/SvyD2qf7wR9iklfyI9BZOepraGCl8FwoHJkq0qDsF8hz4kNJSDZUVr/9nEHc+cWUBa6Q6wwA6W0f5iF0fflP+WSReefjPon8CDABsv8NYms+x0wAAAABJRU5ErkJggg=='/>
              <p><span class = 'burgandy'>Save Extra</span> with 2 offers</p>
            </div>

            <div class = 'offer'>
              <p><span class = 'burgandy'>No Cost EMI: {" "}</span>Avail No Cost EMI on select cards for orders above ₹3000</p>
            </div>

            <div class = 'offer'>
              <p><span class = 'burgandy'>Partner Offers: {" "} </span>Get GST invoice and save up to 28% on business purchases.</p>
            </div>

          </div>

          <div class = 'policies'>

            <div class = 'column'>
              <div class = "icon_container">
                <img src = 'https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png'/>
              </div>
              <p>Pay on Delivery</p>
            </div>

            <div class = 'column'>
              <div class = "icon_container">
                <img src = 'https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png'/>
              </div>
              <p>7 Day Replacement</p>
            </div>

            <div class = 'column'>
              <div class = "icon_container">
                <img src = 'https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png'/>
              </div>
              <p>Amazon Delivered</p>
            </div>

            <div class = 'column'>
              <div class = "icon_container">
                <img src = 'https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png'/>
              </div>
              <p>1 Year Warranty</p>
            </div>


          </div>

          <div class = 'seperator'>
          </div>


          <div class = 'about'>
            <h3>About this item</h3>

            <div class = 'list'>
              <ul>
                {product.about.map((item)=>
                  (<li>{item}</li>)
                )}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail;
