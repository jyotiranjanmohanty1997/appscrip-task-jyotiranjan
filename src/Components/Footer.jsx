import React from "react";
import "./footer.css";
import { PayPalIcon, VisaIcon } from "react-svg-credit-card-payment-icons";
import { MastercardIcon } from "react-svg-credit-card-payment-icons";
import { Maestro } from "react-svg-credit-card-payment-icons/maestro";
import { AmericanExpress } from "react-svg-credit-card-payment-icons/americanexpress";
import { Generic } from "react-svg-credit-card-payment-icons/generic";

import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettà muse.</p>

          <div className="newsletter-box">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4>CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <small>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </small>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <div>
          <h4>mettā muse</h4>
          <a href="#">About Us</a>
          <a href="#">Stories</a>
          <a href="#">Artisans</a>
          <a href="#">Boutiques</a>
          <a href="#">Contact Us</a>
          <a href="#">EU Compliances Docs</a>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <a href="#">Orders & Shipping</a>
          <a href="#">Join/Login as a Seller</a>
          <a href="#">Payment & Pricing</a>
          <a href="#">Return & Refunds</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <div className="footer-icon">
            <span>
              <LuFacebook />
            </span>
            <span>
              <LuInstagram />
            </span>
            <span>
              <LuLinkedin />
            </span>
          </div>

          <h3 style={{padding:"10px 0 15px"}}>mettā muse ACCEPTS</h3>
          <div className="payments">
            <VisaIcon format="flatRounded" width={50} />
            <MastercardIcon format="logo" width={50} />
            <PayPalIcon width={50} />
            <Maestro width={50} />
            <AmericanExpress width={50} />
            <Generic width={50} />
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
