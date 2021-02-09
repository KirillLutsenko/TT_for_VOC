import React from 'react';
import './Footer.scss';

export const Footer = () => (
  <footer className="app__footer footer">
    <div className="footer__footer-info footer-info">
      <div className="footer-info__title-section">
        <div className="footer-info__footer-logo" />

        <span className="footer-info__portfolio">
          Shroders Blended Portfolio - Fall 2019
        </span>
      </div>

      <div className="footer-info__description-section">
        <span className="footer-info__description">
          Direct Investment in Alternative Assets Blockchain-based platform
        </span>

        <div className="footer-info__license-and-adress">
          <span>
            © 2019 Shroders Blended Portfolio
          </span>

          <a
            href="https://goo.gl/maps/TLPLRGgRqnGAzKgHA"
            target="blank"
          >
            71-75 Shelton Street WC2H 9JQ London
          </a>
        </div>
      </div>
    </div>

    <div className="footer__links">
      <div className="footer__product product">
        <h4 className="product__title">Product</h4>
        <ul className="product__list">
          <li className="product__item">Platform</li>
          <li className="product__item">Use Cases</li>
          <li className="product__item">Invest in Assets</li>
          <li className="product__item">Raise capital</li>
          <li className="product__item">Request a demo</li>
        </ul>
      </div>

      <div className="footer__about about">
        <h4 className="about__title">About</h4>
        <ul className="about__list">
          <li className="about__item">Company</li>
          <li className="about__item">Events</li>
          <li className="about__item">Blog</li>
          <li className="about__item">Contact Us</li>
        </ul>
      </div>
    </div>
  </footer>
);
