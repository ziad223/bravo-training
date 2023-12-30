import "./featureCategory.css";
import img1 from "../../images/featured-categories/fetured-item-1.png";
import img2 from "../../images/featured-categories/fetured-item-2.png";
import img3 from "../../images/featured-categories/fetured-item-3.png";
import img4 from "../../images/featured-categories/fetured-item-4.png";
import img5 from "../../images/featured-categories/fetured-item-5.png";
import img6 from "../../images/featured-categories/fetured-item-6.png";
const FeatureCategory = () => {
  return (
    <div className="feature-category container">
      <div className="feature-category-up">
        <h2>Featured Categories</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
      <div className="feature-cartegory-content">
        <div className="feature">
          <div className="feature-left">
            <h3>TV & Audios</h3>
            <h4>Smart Television</h4>
            <h4>QLED TV</h4>
            <h4>Audios</h4>
            <h4>Headphones</h4>
          </div>
          <div className="feature-right">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="feature">
          <div className="feature-left">
            <h3>TV & Audios</h3>
            <h4>Smart Television</h4>
            <h4>QLED TV</h4>
            <h4>Audios</h4>
            <h4>Headphones</h4>
          </div>
          <div className="feature-right">
            <img src={img2} alt="" />
          </div>
        </div>
        <div className="feature">
          <div className="feature-left">
            <h3>TV & Audios</h3>
            <h4>Smart Television</h4>
            <h4>QLED TV</h4>
            <h4>Audios</h4>
            <h4>Headphones</h4>
          </div>
          <div className="feature-right">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="feature">
          <div className="feature-left">
            <h3>TV & Audios</h3>
            <h4>Smart Television</h4>
            <h4>QLED TV</h4>
            <h4>Audios</h4>
            <h4>Headphones</h4>
          </div>
          <div className="feature-right">
            <img src={img4} alt="" />
          </div>
        </div>
        <div className="feature">
          <div className="feature-left">
            <h3>TV & Audios</h3>
            <h4>Smart Television</h4>
            <h4>QLED TV</h4>
            <h4>Audios</h4>
            <h4>Headphones</h4>
          </div>
          <div className="feature-right">
            <img src={img5} alt="" />
          </div>
        </div>
        <div className="feature">
          <div className="feature-left">
            <h3>TV & Audios</h3>
            <h4>Smart Television</h4>
            <h4>QLED TV</h4>
            <h4>Audios</h4>
            <h4>Headphones</h4>
          </div>
          <div className="feature-right">
            <img src={img6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCategory;
