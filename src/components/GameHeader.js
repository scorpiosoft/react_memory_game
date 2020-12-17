import React from "react";
import { Container, Row, Col } from '../components/Grid'

const GameHeader = props => (
  <header className='header clearfix'>
  <Container>
    <Row >
      <Col size='4'>
        <h3 className='left'>Click Memory</h3>
      </Col>
      <Col size='4'>
        <h3 className='center'>{props.status}</h3>
      </Col>
      <Col size='4'>
        <h3 className='right'>Score: {props.score.toString()} | Best: {props.topScore.toString()}</h3>
      </Col>
    </Row>
    <Row >
      <Col size='12'>
        <h4 className='center'>Click on each dino without clicking the same dino twice.  Click again to start a new game.</h4>
      </Col>
    </Row>
  </Container>
  </header>
);
export default GameHeader;
