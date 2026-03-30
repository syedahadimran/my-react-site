import "./hero.css";
import heroVideo from "../../assets/video/hero-video.mp4";
import logo from "../../assets/images/logo-white.svg";

function Hero() {
  return (
    <section className="hero">
      <video className="hero__video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero__overlay"></div>

      <header className="hero__header">
  <nav className="hero__nav hero__nav--left">
    <a href="#contact" className="hero__nav-link">Contact</a>
  </nav>

  <a href="/" className="hero__logo-link" aria-label="Homepage">
    <img src={logo} alt="Logo" className="hero__logo" />
  </a>

  <nav className="hero__nav hero__nav--right">
    <a href="#about" className="hero__nav-link">About Us</a>
  </nav>

  <button className="hero__menu-button" aria-label="Open menu">
    <span></span>
    <span></span>
    <span></span>
  </button>
</header>

      <div className="hero__content">
        <h1 className="hero__title">
          BERLIN,
          <br />
          LET&apos;S PADEL
        </h1>

        <p className="hero__text">
          EXPERIENCE BERLIN&apos;S <strong>FIRST INDOOR PADEL CLUB!</strong>
          <br />
          ENJOY <strong>PADEL</strong> ON AND OFF THE PITCH IN OUR NEW
          <br />
          INDUSTRIAL LOCATION BY THE <strong>SPREE</strong>
        </p>

        <a href="#booking" className="hero__button">
          BOOK NOW
        </a>
      </div>
    </section>
  );
}

export default Hero;