import React from "react";
import { Container, Row, Col } from '../components/Grid'

const GameHeader = props => (
  <header className='header clearfix'>
  <Container>
    <Row classes='justify-content-md-center'>
      <Col size='md-auto'>
        <h2 className='left'>Click Memory</h2>
      </Col>
      <Col size='md-auto'>
        <h2 className='center'>{props.status}</h2>
      </Col>
      <Col size='md-auto'>
        <h2 className='right'>Score: {props.score.toString()} | Best: {props.topScore.toString()}</h2>
      </Col>
    </Row>
  </Container>
  </header>
);
export default GameHeader;
