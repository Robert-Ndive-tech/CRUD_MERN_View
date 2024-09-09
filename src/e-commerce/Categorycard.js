import './card.css';

// components/CategoryCard.js
import React from 'react';

const CategoryCard = ({ name, items, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{items}</p>
      </div>
      <div className="card-action">
        <a href="#">View Prices</a>
      </div>
    </div>
  );
};

export default CategoryCard;
