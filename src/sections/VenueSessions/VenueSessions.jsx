import React, { useEffect, useRef, useState } from "react";
import "./VenueSessions.css";
import { venueSessions } from "./data";

const VenueSessions = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollAmount = () => {
    const slider = sliderRef.current;
    if (!slider) return 300;

    const card = slider.querySelector(".venue-sessions__card");
    if (!card) return 300;

    const styles = window.getComputedStyle(slider);
    const gap = parseInt(styles.gap || "20", 10);

    return card.offsetWidth + gap;
  };

  const scrollNext = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: scrollAmount(),
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.scrollBy({
      left: -scrollAmount(),
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = [...slider.querySelectorAll(".venue-sessions__card")];
    const target = cards[index];
    if (!target) return;

    const left =
      target.offsetLeft - slider.clientWidth / 2 + target.clientWidth / 2;

    slider.scrollTo({
      left,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const cards = [...slider.querySelectorAll(".venue-sessions__card")];
      if (!cards.length) return;

      const center = slider.scrollLeft + slider.clientWidth / 2;

      let closest = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(center - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);
    };

    handleScroll();
    slider.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="venue-sessions">
      <div className="venue-sessions__container">
        <h2 className="venue-sessions__eyebrow">COURT SESSIONS</h2>

        <h2 className="venue-sessions__title">EXPERIENCE OUR VENUE</h2>

        <p className="venue-sessions__subtitle">
          From sunrise sessions to tournament finals, discover the rhythm of our
          courts
        </p>

        <div className="venue-sessions__slider-wrap">
          <div className="venue-sessions__slider" ref={sliderRef}>
            {venueSessions.map((item) => (
              <article className="venue-sessions__card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="venue-sessions__image"
                />

                <div className="venue-sessions__overlay" />

                <div className="venue-sessions__content">
                  <p className="venue-sessions__tag">{item.tag}</p>

                  <h3 className="venue-sessions__title-card">
                    {item.title.split("\n").map((line, index, arr) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>

                  <div className="venue-sessions__underline" />
                </div>

                <div className="venue-sessions__hover-border" />
              </article>
            ))}
          </div>

          <button
            className="venue-sessions__arrow venue-sessions__arrow--left"
            onClick={scrollPrev}
            aria-label="Previous session"
            type="button"
          >
            <span>‹</span>
          </button>

          <button
            className="venue-sessions__arrow venue-sessions__arrow--right"
            onClick={scrollNext}
            aria-label="Next session"
            type="button"
          >
            <span>›</span>
          </button>
        </div>

        <div className="venue-sessions__mobile-nav">
          <div className="venue-sessions__dots">
            {venueSessions.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`venue-sessions__dot ${
                  activeIndex === index ? "venue-sessions__dot--active" : ""
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>

          <div className="venue-sessions__swipe-hint">
            <span className="venue-sessions__swipe-icon">»</span>
            <span>Swipe to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSessions;