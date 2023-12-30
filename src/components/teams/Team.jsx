import "./team.css";
import img1 from "../../images/team/01.jpg";
import img2 from "../../images/team/02.jpg";
import img3 from "../../images/team/03.jpg";
import img4 from "../../images/team/04.jpg";
import { FaFacebook , FaTwitter ,FaSkype   } from "react-icons/fa";

const Team = () => {
  return (
    <div className="our-team container">
      <div className="team-title">
        <h2>Our Team</h2>
        <p className="p">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
        <div className="team-content">
          <div className="team">
            <img src={img1} alt="" />
            <h2>Amal Ibrahim</h2>
            <p>Frontend Developer</p>
            <div>
              <FaFacebook className="team-icon"/>
              <FaTwitter className="team-icon"/>
              <FaSkype className="team-icon"/>
            </div>
          </div>
          <div className="team">
            <img src={img2} alt="" />
            <h2>Sami Azab</h2>
            <p>Backend Developer</p>
            <div>
              <FaFacebook className="team-icon"/>
              <FaTwitter className="team-icon"/>
              <FaSkype className="team-icon"/>
            </div>
          </div>
          <div className="team">
            <img src={img3} alt="" />
            <h2>Ahmed Nagy</h2>
            <p>Founder, CEO</p>
            <div>
              <FaFacebook className="team-icon"/>
              <FaTwitter className="team-icon"/>
              <FaSkype className="team-icon"/>
            </div>
          </div>
          <div className="team">
            <img src={img4} alt="" />
            <h2>Esraa Adel</h2>
            <p>Fullstack Developer</p>
            <div>
              <FaFacebook className="team-icon"/>
              <FaTwitter className="team-icon"/>
              <FaSkype className="team-icon"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
