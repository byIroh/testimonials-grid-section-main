import React from "react";

import { entries } from "../assets/data.json";

import GridItem from "./GridItem";

function Testimonials() {
  return (
    <>
      <h1 className="sr-only">Testimonials Section</h1>
      <div className="testimonials">
        {entries.map((entry, i) => {
          return (
            <GridItem
              key={i}
              index={i}
              imgSrc={entry.imgSrc}
              name={entry.name}
              status={entry.status}
              title={entry.title}
              review={entry.review}
            />
          );
        })}
      </div>
    </>
  );
}

export default Testimonials;
