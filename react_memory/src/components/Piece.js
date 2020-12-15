import React from "react";

const Piece = props => (
  <div className="img-container">
    <img className='image' alt={props.id} src={props.image} />
  </div>
);
export default Piece;