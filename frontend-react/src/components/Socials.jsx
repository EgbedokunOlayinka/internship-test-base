import React from "react";
import { ReactComponent as FacebookIcon } from "../img/facebook-f-brands.svg";
import { ReactComponent as TwitterIcon } from "../img/twitter-brands.svg";
import { ReactComponent as InstagramIcon } from "../img/instagram-brands.svg";

const Socials = () => {
  return (
    <div className="socials">
      <div className="social-div fb">
        <FacebookIcon className="social-icon" />
      </div>
      <div className="social-div tw">
        <TwitterIcon className="social-icon" />
      </div>
      <div className="social-div ins">
        <InstagramIcon className="social-icon" />
      </div>
    </div>
  );
};

export default Socials;
