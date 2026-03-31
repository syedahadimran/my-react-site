import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form-section__container">
        <h2 className="contact-form-section__title">GET IN TOUCH</h2>

        <p className="contact-form-section__subtitle">
          Interested in partnerships, events, or collaborations?
        </p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact-form__field">
            <input
              type="text"
              placeholder="Your Name"
              className="contact-form__input"
            />
          </div>

          <div className="contact-form__field">
            <input
              type="email"
              placeholder="Email Address"
              className="contact-form__input"
            />
          </div>

          <div className="contact-form__field">
            <input
              type="tel"
              placeholder="Phone Number (Optional)"
              className="contact-form__input"
            />
          </div>

          <div className="contact-form__field contact-form__field--textarea">
            <textarea
              placeholder="Your Message"
              className="contact-form__input contact-form__textarea"
            />
          </div>

          <button type="submit" className="contact-form__button">
            <span>SEND MESSAGE</span>
            <span className="contact-form__arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;