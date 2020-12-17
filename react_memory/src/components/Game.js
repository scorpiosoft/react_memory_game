import React from 'react'
import GameHeader from '../components/GameHeader'
import Board from '../components/Board'
import pieces from '../pieces.json'

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
    if (!this.state.gameOver)
    if (pcs[i].isClicked)
    {
      this.setState(
      {
        gameOver: true,
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
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
    console.log(this.state);
  }
  newGame()
  {
    const pcs = this.state.pieces.forEach(p => p.isClicked = false);
    this.setState(
    {
      gameOver: false,
      score: 0,
      pieces: pcs,
    }
    );
    console.log(`newGame, best: ${this.state.topScore}`);
  }
  render()
  {
    const gameOver = this.state.gameOver;
    let status;
    if (gameOver)
    {
      status = 'Game Over!';
    } else {
      status = 'Click on a new dino';
    }
    return (
      <div className="game">
        <GameHeader
          status={status}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Board
          pieces={this.state.pieces}
          onClick={(i) => this.handleClick(i)}
        />
      </div>
    );
  }
}
export default Game;