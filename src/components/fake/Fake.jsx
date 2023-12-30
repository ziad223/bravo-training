import React, { useEffect, useState } from "react";
import "./fake.css";
import { Link } from "react-router-dom";


const Fake = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      }, []);
  });
  return (
    <div className="fake ">
      <div className="fake-title">
        <h2>Fake Api Products</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
          architecto sint labore provident eaque mollitia aliquid ratione
          adipisci expedita pariatur! Corrupti sit deleniti assumenda ea
          accusantium molestiae nisi rerum aspernatur?
        </p>
        <div className="api-products container">
          {products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <img src={product.image} alt="" />
                <h3>{product.title.slice(0, 15)}</h3>
                <button onClick={() =>addToCart(product)}>Add To Cart</button>
                <Link className="more" to={`/singleFake/${product.id}`}>
                  <button>More Details</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Fake;
