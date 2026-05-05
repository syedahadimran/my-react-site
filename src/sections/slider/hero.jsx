import "./hero.css";
import heroDesktop from "../../assets/images/slider-bg.jpeg";
import heroMobile from "../../assets/images/slider-bg-mob.jpeg";
import logo from "../../assets/images/logo-white.svg";
import { useState, useEffect } from "react";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero__video"
        style={{
          backgroundImage: `url(${isMobile ? heroMobile : heroDesktop})`,
          backgroundSize: "cover",
          backgroundPosition: isMobile ? "center top" : "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="hero__overlay"></div>

      <header className="hero__header">
        <div className={`hero__mobile-menu ${menuOpen ? "active" : ""}`}>
          <a href="#about" className="hero__nav-link">About</a>
          <a href="#community" className="hero__nav-link">Community</a>
          <a href="#gallery" className="hero__nav-link">Gallery</a>
          <a href="#contact" className="hero__nav-link">Contact</a>
        </div>

        <nav className="hero__nav hero__nav--left">
          <a href="#contact" className="hero__nav-link">Contact</a>
        </nav>

        <a href="/" className="hero__logo-link" aria-label="Homepage">
          <img src={logo} alt="Logo" className="hero__logo" />
        </a>

        <nav className="hero__nav hero__nav--right">
          <a href="#about" className="hero__nav-link">About Us</a>
        </nav>

        <button
          className="hero__menu-button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div className="hero__content">
        <h1 className="hero__title">
          BERLIN,
          <br />
          LET&apos;S PICKLEBALL
        </h1>

        <p className="hero__text">
          EXPERIENCE BERLIN&apos;S <strong>FIRST INDOOR PICKLEBALL CLUB!</strong>
          <br />
          ENJOY <strong>PICKLEBALL</strong> ON AND OFF THE PITCH IN OUR NEW
          <br />
          INDUSTRIAL LOCATION BY THE <strong>SPREE</strong>
        </p>

        <a
          href="https://funkhaus-sports.netlify.app/venue/7d0202a4-1003-4794-9404-b58704fed655?step=0"
          className="hero__button"
        >
          BOOK NOW
        </a>
      </div>
    </section>
  );
}

export default Hero;