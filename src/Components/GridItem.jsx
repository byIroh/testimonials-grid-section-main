import React from "react";

function GridItem({ imgSrc, name, status, title, review, index }) {
  return (
    <div className="grid-item">
      {index === 0 && (
        <img
          className="grid-item__decoration"
          src="images/bg-pattern-quotation.svg"
        />
      )}
      <div className="grid-item__details-wrapper">
        <img className="grid-item__img" src={imgSrc} />
        <div>
          <p className="grid-item__name">{name}</p>
          <p className="grid-item__status">{status}</p>
        </div>
      </div>
      <h2 className="grid-item__title">{title}</h2>
      <p className="grid-item__review">" {review} "</p>
    </div>
  );
}

export default GridItem;
