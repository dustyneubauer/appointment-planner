import React from "react";

export const Tile = (tile) => {
  const data = Object.values(tile);

  return (
    <div className="tile-container">
      {data.map((element,index) => {
        <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>{element}</p>
      })}
    </div>
  );
};
