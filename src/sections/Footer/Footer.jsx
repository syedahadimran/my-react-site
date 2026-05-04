import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo-white.svg";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
                <img src={logo} alt="Padelhaus logo" className="footer__logo-img" />
            </div>

            <p className="footer__description">
              Picklehaus — riverside and indoor
              <br />
              pickleball experiences with premium
              <br />
              courts, events, and community.
            </p>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Neighbours</h3>

            <a href="/" className="footer__link">
              Beach Volleyball | Funkhaus Beach
            </a>
            <a href="/" className="footer__link">
              PickleBall | Picklehaus Berlin
            </a>
          </div>

          <div className="footer__column footer__column--company">
            <div className="footer__group">
              <h3 className="footer__heading">Company</h3>

              <a href="/" className="footer__link">
                About Us
              </a>

              <div className="footer__career-row">
                <a href="/" className="footer__link footer__link--inline">
                  Careers
                </a>
                <span className="footer__badge">WE’RE HIRING</span>
              </div>

              <a href="/" className="footer__link">
                Press
              </a>
              <a href="/" className="footer__link">
                Gift Cards
              </a>
            </div>

            <div className="footer__group footer__group--legal">
              <h3 className="footer__heading">Legal</h3>

              <a href="/" className="footer__link">
                Imprint
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Contact</h3>

            <div className="footer__contact-text">
              Picklehaus Berlin
              <br />
              Spree Riverside Courts
              <br />
              Berlin, Germany
            </div>

            <a href="mailto:operations@padelfc.net" className="footer__link footer__link--spaced">
              operations@pickleballfc.net
            </a>

            <a href="/" className="footer__link footer__link--social">
              IG
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__bottom-text">© 2026 Picklehaus. All rights reserved.</p>
          <p className="footer__bottom-text footer__bottom-text--right">
            Built for players, partners, and community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;