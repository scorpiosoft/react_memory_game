import React from "react";

const GameHeader = props => (
  <header>
    <h1 className='float-left'>Memory</h1>
    <h1 className='align-center'>{props.status}</h1>
    <h1 className='float-right'>Score: {props.score} | Top Score: {props.topScore}</h1>
  </header>
);
export default GameHeader;
