import React from "react";
import { Link } from "react-router-dom";

import InstagramIcon from "../../assets/images/instagram-icon.png";
import PinterestIcon from "../../assets/images/pinterest-icon.png";

const Header = () => (
  <div className="footer">
    <div className="logo -small">
      <div className="cursive color-green">Phinney</div>
      Home Interiors
    </div>

    <div className="offset-content -small">
      <div className="secondary-type">206.300.8411</div>
      <div className="offset-content -small">
        <Link
          className="social-icon"
          to="https://www.instagram.com/phinneyhome/"
        >
          <img src={InstagramIcon} alt="Instagram" />
        </Link>
        <Link
          className="social-icon"
          to="https://www.pinterest.com/phinneyhome/"
        >
          <img src={PinterestIcon} alt="Pinterest" />
        </Link>
      </div>
    </div>
  </div>
);
export default Header;
