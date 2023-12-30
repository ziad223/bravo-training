import './trendingProduct.css';
import trending from "./trending";
import { FaStar } from "react-icons/fa";

const TrendingProduct = () => {
  return (
    <div className="trending-product ">
      <div className="trending-product-title">
        <h2>Trending Product</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="products container">
        {trending.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.img} alt="product" />
              <h4>{product.name}</h4>
              <h3>{product.title}</h3>
              <div className="rate">
                <div>
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                  <FaStar className="star-icon" />
                </div>
                <h4>{product.raiting}</h4>
              </div>
              <h2>{product.price}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingProduct;
