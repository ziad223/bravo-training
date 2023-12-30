import "./header.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="header container">
      <div className="header-left">
        <div className="header-left-one">
          <div className="header-one-text">
            <h3>No restocking fee ($35 savings)</h3>
            <h2>M75 Sport Watch</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
              tempor incididunt ut labore dolore magna aliqua.
            </p>
            <h3>
              Now Only <span>$320.99</span>
            </h3>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-one">
          <div className="a">
            <h3>New line required</h3>
            <h2>iPhone 12 Pro Max</h2>
            <h4>$259.99</h4>
          </div>
        </div>
        <div className="header-right-two">
          <div className="a">
            <h3>Weekly Sale!</h3>
            <h4>Saving up to 50% off all online store items this week.</h4>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
