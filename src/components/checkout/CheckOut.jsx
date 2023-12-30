import "./checkout.css";
import img from "../../images/payment/payment.jpg";
import Swal from "sweetalert2";

const CheckOut = () => {
  function successSubmit() {
    Swal.fire({
      title: "Payment completed successfully",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
    });
  }
  return (
    <div className="check-out">
      <h2>Check Out</h2>
        <label>Full Name :</label>
        <input type="text" placeholder="Ziad Abdalla" />
        <label>Email :</label>
        <input type="text" placeholder="ziad@example.com" />
        <label>Address :</label>
        <input type="text" placeholder="Egypt - Sharkia - Zagazig"  />
        <label>City :</label>
        <input type="text" placeholder="Zagazig"  />
        <label>Name on Card :</label>
        <input type="text" placeholder="Ziad Abdalla Elsayed" />
        <label>Credit card number</label>
        <input type="text" placeholder="1111-2222-3333-4444" />
        <div className="part">
          <div>
            <label>State</label>
            <input type="text" placeholder="NY" />
          </div>
          <div>
            <label>Zip</label>
            <input type="text" placeholder="10001" />
          </div>
          <div>
            <label>Exp Month :</label>
            <input type="text" placeholder="2018" />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" placeholder="352" />
          </div>
          <img src={img} alt="payment" />
          <button className="submit" onClick={successSubmit}>
            Submit
          </button>
        </div>
    </div>
  );
};

export default CheckOut;
