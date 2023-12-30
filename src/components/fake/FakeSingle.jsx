import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './fake.css';
import { FaStar } from "react-icons/fa";


const FakeSingle = ({addToCart}) => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      }, []);
  });

  return (
    <div className="single-product container">
      <div className="single-product-left">
        <img src={product.image} alt="product" />
      </div>
      <div className="product-details">
          <h2 className="t">{product.category}</h2>
          <div>
        <FaStar className="star-icon"/>
        <FaStar className="star-icon"/>
        <FaStar className="star-icon"/>
        <FaStar className="star-icon"/>
        <FaStar className="star-icon"/>
          </div>
          <h3>{product.description}</h3>
          <h2 className="t">{product.title}</h2>
          <h2>Price : {product.price} $</h2>
          <button onClick={() =>addToCart(product)}>Add To Cart</button>
        </div>
    </div>
  );
};

export default FakeSingle;
