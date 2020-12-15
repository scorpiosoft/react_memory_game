import React from 'react'
import GameHeader from '../components/GameHeader'
import Board from '../components/Board'
import Piece from '../components/Piece'
import pieces from '../pieces.json'
import { Container } from '../components/Grid'

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
    const pcs = this.state.pieces.slice();

    if (!this.gameOver)
    {
      if (pcs[i].isClicked)
      {
        this.setState(
        {
          gameOver: true,
          topScore: (this.score > this.topScore) ? this.score : this.topScore,
        }
        );
      } else {
        pcs[i].isClicked = true;
        this.setState(
        {
          pieces: pcs,
          score: this.state.score + 1,
        }
        );
      }
    }
    console.log(this.state)
  }
  newGame()
  {
    this.setState(
    {
      gameOver: false,
      score: 0,
      pieces,
    }
    );
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
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div className="game-board">
          <Container>
            <Board
              pieces={this.state.pieces}
              onClick={(i) => this.handleClick(i)}
            />
          </Container>
        </div>
      </div>
    );
  }
}

export default Game;