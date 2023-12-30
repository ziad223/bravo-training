import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomePage from "./components/HomePage";
import Cart from "./components/cart/Cart";
import FakeSingle from "./components/fake/FakeSingle";
import DommySingle from "./components/dommy/DommySingle";
import CheckOut from "./components/checkout/CheckOut";
import { useState } from "react";
import Swal from "sweetalert2";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const selectedItem = cartItems.find((item) => item.id == product.id);

    if (selectedItem) {
      // setCartItems(
      //   cartItems.map(function (item) {
      //     item.id == product.id
      //       ? { ...selectedItem, qty: selectedItem.qty + 1 }
      //       : item;
      //   })
      // );
      Swal.fire({
        title: "This product This Already Exsists in the cart successfully",
        icon: "warning",
        timer: 2000,
        showConfirmButton: false,
      });
      
    } else {
      setCartItems([...cartItems, product]);
      Swal.fire({
        title: "The product added in the cart successfully",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const deacreaseQty = (product) => {};

  const deleteProduct = (product) => {
    setCartItems(cartItems.filter((item) => item.id != product.id));
    Swal.fire({
      title: "The product is Removed From cart",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  };
  let total = 0;

  return (
    <div>
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/check-out" element={<CheckOut total={total} />} />

          <Route
            path="/cart"
            element={
              <Cart
                total={total}
                deleteProduct={deleteProduct}
                cartItems={cartItems}
                addToCart={addToCart}
                deacreaseQty={deacreaseQty}
              />
            }
          />
          <Route
            path="/singleFake/:id"
            element={<FakeSingle addToCart={addToCart} />}
          />
          <Route
            path="/singleDommy/:id"
            element={<DommySingle addToCart={addToCart} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
