import { useEffect, useState } from "react";
import "./dommy.css";
import { Link } from "react-router-dom";

const Dommy = ({addToCart}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);
  return (
    <div className="dommy">
      <div className="fake-title">
        <h2>Dommy Json Products</h2>
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
                <img src={product.thumbnail} alt="" />
                <h3>{product.title.slice(0, 20)}</h3>
                <button onClick={() =>addToCart(product)}>Add To Cart</button>
                <Link to={`/singleDommy/${product.id}`} className="more">
                  <button >More Details</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dommy;
