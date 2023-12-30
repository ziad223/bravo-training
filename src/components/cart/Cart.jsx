import "./cart.css";

import { Link } from "react-router-dom";
import CheckOut from "../checkout/CheckOut";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const Cart = ({ cartItems, deleteProduct ,  addToCart , deacreaseQty }) => {
  let total = 0;
  return (
    <div className="cart container">
      <div className="cart-left">
        {cartItems.length == 0 && (
          <h2 className="no-product">
            No There Any Products Added In The Cart
          </h2>
        )}
        {cartItems.map(function (item) {
          total = total + item.price  ;
          return (
            <div className="cart-product"  key={item.id}>
              <img src={item.image ? item.image : item.thumbnail} alt="" />
              <h2>
                {" "}
                {/* <FaTimes /> {item.qty} */}
                {item.title}
              </h2>
              {/* <div>
                <button onClick={() => addToCart(item)}>
                  <FaPlus  />
                </button>
                <h2>{item.qty}</h2>
                <button onClick={() => deacreaseQty(item)}>
                  <FaMinus />
                </button>
              </div> */}
              <h3 className="m">Price : {item.price}$</h3>
              <button
                className="remove-product"
                onClick={() => deleteProduct(item)}
              >
                Remove-Product
              </button>
            </div>
          );
        })}
      </div>
      <div className="cart-right">
        <div>
          <h2>Total</h2>
          <p>{total} $</p>
        </div>
        <hr />
        <Link to="/check-out">
          <button>CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
