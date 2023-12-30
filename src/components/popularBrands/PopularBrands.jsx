import './PopularBrands.css';
import img1 from '../../images/brands/01.png';
import img2 from '../../images/brands/02.png';
import img3 from '../../images/brands/03.png';
import img4 from '../../images/brands/04.png';
import img5 from '../../images/brands/05.png';
import img6 from '../../images/brands/06.png';




const PopularBrands = () => {
  return (
    <div className='popular-brands container'>
      <h2>Popular Brands</h2>
      <div className="popular-content">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
      </div>
    </div>
  )
}

export default PopularBrands
