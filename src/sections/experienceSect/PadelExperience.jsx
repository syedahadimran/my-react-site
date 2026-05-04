import React from "react";
import "./PadelExperience.css";
import { features } from "./data";

const PadelExperience = () => {
  return (
    <section className="padel-experience">
      <div className="padel-experience__container">
        <h2 className="padel-experience__title">
          A UNIQUE PICKLEBALL
          <br />
          EXPERIENCE
        </h2>

        <p className="padel-experience__description">
          More than just a pickleball club. Play on our world-class courts, step onto
          our beach ,<br /> by the Spree, try pickleball — with more sports coming soon.
        </p>

        <div className="padel-experience__grid">
          {features.map((item) => {
            const lines = item.title.split("\n");

            return (
              <div className="padel-experience__card" key={item.id}>
                <div className="padel-experience__icon">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="padel-experience__icon-img"
                  />
                </div>

                <h3 className="padel-experience__card-title">
                  {lines.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PadelExperience;