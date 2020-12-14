import React from "react";

const Piece = props => (
  <div className="img-container">
    <img alt={props.id} src={props.image} />
  </div>
);
export default Piece;