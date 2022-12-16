import React from "react";

export const Tile = (object) => {
  const data = Object.values(object);

  return (
    <div className="tile-container">
      {data.map((element) => {
        <p key={data.indexOf}>{element}</p>
      })}
    </div>
  );
};
