import "./banner.css";

const Banner = () => {
  return (
    <div className="banner container">
      <div className="banner-left">
        <div className="banner-text">
          <h2>Smart Watch 2.0</h2>
          <h3>Space Gray Aluminum Case with</h3>
          <h3>Black/Volt Real Sport Band</h3>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="banner-right">
        <div className="banner-text">
          <h2>Smart Headphone</h2>
          <h3>Lorem ipsum dolor sit amet,</h3>
          <h3>eiusmod tempor incididunt ut labore.</h3>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
