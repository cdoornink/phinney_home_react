import React from "react";

import Icon from "./icon";

const Header = () => (
  <div className="footer offset-content -large">
    <div className="logo -small">
      <div className="cursive">Phinney</div>
      Home Interiors
    </div>

    <div className="offset-content -small">
      <a className="social-icon" href="https://www.instagram.com/phinneyhome/">
        <Icon icon="instagram" />
      </a>
      <a className="social-icon" href="https://www.pinterest.com/phinneyhome/">
        <Icon icon="pinterest" />
      </a>
    </div>
    <div className="offset-content -small">
      <a href="tel:+12063008411">
        <div className="secondary-type">206.300.8411</div>
      </a>
    </div>
  </div>
);
export default Header;
