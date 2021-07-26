import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";


function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        img: props.img,
        price: props.price,
        rating: props.rating,
      },
    });
  };

  const addProduct = () =>{
    dispatch({
      type: "ACTIVE_PRODUCT",
      product: props
    });
  }

  return (

    <div className="product" onClick = {addProduct}>

      <div className="product__info">
        <Link to = '/product_detail'>
          <p class = 'product_title'>{props.title}</p>
        </Link>
        <p className="product__price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={props.img} />
      <button onClick={addToBasket}>Add To Cart</button>
    </div>
  );
}

export default Product;
