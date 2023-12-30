import './footer.css';
// import logo from "../../images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        {/* <img src={logo} /> */}
        <div className="icons">
          <FaFacebook className="footer-icon" />
          <FaWhatsapp className="footer-icon" />
          <FaLinkedin className="footer-icon" />
          <FaGithub className="footer-icon" />
          <FaYoutube className="footer-icon" />
        </div>
      </div>
      <p>@Copwrite , By <span>Bravo Team</span> 2023 , All Right Reserved</p>
    </div>
  );
};

export default Footer;
