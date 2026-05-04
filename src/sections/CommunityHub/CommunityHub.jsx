import React, { useEffect, useState } from "react";
import "./CommunityHub.css";
import { tabs, communityCards, levelCards } from "./data";

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect
      x="4"
      y="6"
      width="16"
      height="14"
      rx="2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 4V8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16 4V8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M4 10H20" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle
      cx="12"
      cy="12"
      r="8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8V12L15 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 21C15.5 16.8 18 13.8 18 10.5C18 6.9 15.3 4 12 4C8.7 4 6 6.9 6 10.5C6 13.8 8.5 16.8 12 21Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="10.5"
      r="2.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const PlayersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle
      cx="9"
      cy="10"
      r="2.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle
      cx="15"
      cy="10"
      r="2.2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M4.5 18C5 15.8 6.8 14.5 9 14.5C11.2 14.5 13 15.8 13.5 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10.5 18C11 15.8 12.8 14.5 15 14.5C17.2 14.5 19 15.8 19.5 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M20 11.6C20 16 16.4 19.6 12 19.6C10.6 19.6 9.2 19.2 8 18.5L4.5 19.4L5.4 16C4.6 14.7 4.2 13.2 4.2 11.6C4.2 7.2 7.8 3.6 12.2 3.6C16.4 3.6 20 7.2 20 11.6Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinejoin="round"
    />
    <path
      d="M9.3 8.9C9 9.3 8.7 9.8 8.7 10.4C8.7 11 9.1 11.7 9.6 12.4C10.5 13.6 11.7 14.7 13.1 15.4C13.7 15.7 14.5 16 15.1 15.8C15.6 15.7 16 15.3 16.3 14.9L16.5 14.6C16.6 14.4 16.6 14.2 16.4 14.1L14.5 13.2C14.3 13.1 14.1 13.1 14 13.3L13.5 13.9C13.4 14 13.3 14.1 13.1 14C12.2 13.6 11.1 12.6 10.6 11.8C10.5 11.6 10.5 11.5 10.6 11.4L11.1 10.8C11.2 10.6 11.3 10.4 11.2 10.2L10.4 8.3C10.3 8.1 10 8 9.9 8.2L9.3 8.9Z"
      fill="currentColor"
    />
  </svg>
);

const CommunityHub = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [displayedCards, setDisplayedCards] = useState(communityCards.events);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    const swapTimer = setTimeout(() => {
      setDisplayedCards(communityCards[activeTab]);
    }, 180);

    const finishTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 380);

    return () => {
      clearTimeout(swapTimer);
      clearTimeout(finishTimer);
    };
  }, [activeTab]);

  return (
    <section className="community-hub">
      
        <div className="community-hub__levels">
          <div className="community-hub__levels-divider" />

          <p className="community-hub__levels-eyebrow">JOIN YOUR LEVEL</p>

          <h3 className="community-hub__levels-title">COMMUNITY LEVELS</h3>

          <div className="community-hub__levels-grid">
            {levelCards.map((level) => (
              <article
                key={level.id}
                className={`community-hub__level-card community-hub__level-card--${level.theme}`}
              >
                <h4 className="community-hub__level-name">{level.title}</h4>

                <p className="community-hub__level-rating">{level.rating}</p>

                <p className="community-hub__level-subtitle">{level.subtitle}</p>

                <a href={level.whatsappLink}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="community-hub__level-button"
>
                  <span className="community-hub__level-button-icon">
                    <WhatsAppIcon />
                  </span>
                  <span>JOIN WHATSAPP</span>
                </a>
              </article>
            ))}
          </div>
        </div>
    </section>
  );
};

export default CommunityHub;