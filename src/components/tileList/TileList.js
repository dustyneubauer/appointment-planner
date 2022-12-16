import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = (arr) => {
  return (
    <div>
      {arr.map((element,index) => 
      <Tile obj={element} key={index} />
      )}
    </div>
  );
};
