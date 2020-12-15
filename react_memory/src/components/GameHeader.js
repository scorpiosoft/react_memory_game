import React from "react";
import { Row, Col } from '../components/Grid'

const GameHeader = props => (
  <header className='header clearfix'>
    <Row>
      <Col size='md-4'>
        <h1 className='left'>Click Memory</h1>
      </Col>
      <Col size='md-4'>
        <h1 className='center'>{props.status}</h1>
      </Col>
      <Col size='md-4'>
        <h1 className='right'>Score: {props.score.toString()} | Top Score: {props.topScore.toString()}</h1>
      </Col>
    </Row>
  </header>
);
export default GameHeader;
