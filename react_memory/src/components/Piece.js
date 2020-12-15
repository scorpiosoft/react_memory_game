import React from "react";

const Piece = props => (
  <div className="img-container">
    <img className='image' alt={props.id} src={props.image} onClick={props.onClick}/>
  </div>
);
export default Piece;