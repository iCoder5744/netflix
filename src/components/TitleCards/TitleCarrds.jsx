import React, { useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = () => {
  const cardsRef = useRef(null);

  // Scroll the card list when the arrow button is clicked
  const scrollCards = (direction) => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += direction === "right" ? 240 : -240; // Scroll by 240px (or any other value)
    }
  };

  return (
    <div className="title-cards">
      <h2>Popular on Netflix</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={card.image} alt={card.name} />
            </div>
            <p>{card.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TitleCards;
