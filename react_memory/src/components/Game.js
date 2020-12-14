import React from 'react'
import GameHeader from './components/GameHeader'
import Piece from './components/Piece'
import pieces from './pieces.json'
import { Container, Row, Column } from './components/Grid'

class Game extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      pieces,
      score: 0,
      topScore: 0,
      gameOver: false,
    }
  }
  handleClick(i)
  {
    const pieces = this.state.pieces.slice();
    const prevClicked = pieces[i].isClicked;

    if (prevClicked)
    {
      this.setState(
      {
        gameOver: true,
        topScore: (this.score > this.topScore) ? this.score : this.topScore,
      }
      );
    } else {
      pieces[i].isClicked = true;
      this.setState(
      {
        gameOver: false,
        pieces: pieces,
        score: this.score + 1,
      }
      );
    }
  }
  render()
  {
    const gameOver = this.state.gameOver;
    let status;
    if (gameOver)
    {
      status = 'Game Over!';
    } else {
      status = '';
    }
    return (
      <div className="game">
        <GameHeader
          status={status}
          score={this.score}
          topScore={this.topScore}
        />
        <div className="game-board">
          <Container>
            <Row>
              <Piece />
              <Piece />
              <Piece />
            </Row>
            <Row>
              <Piece />
              <Piece />
              <Piece />
            </Row>
            <Row>
              <Piece />
              <Piece />
              <Piece />
            </Row>
            <Row>
              <Piece />
              <Piece />
              <Piece />
            </Row>
          </Container>
          <Board
            pieces={current.pieces}
            onClick={(i) => this.handleClick(i)}
         />
        </div>
      </div>
    );
  }
}

export default Game;