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
      winLose: 0, // -1:lose, 0:alive, 1:win
    }
  }
  handleClick(i)
  {
    const pcs = this.state.pieces.slice();
    if (this.state.winLose !== 0)
    {
      this.newGame();
    } else {
      if (pcs[i].isClicked)
      {
        this.setState(
        {
          winLose: -1,
          topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        }, () => {console.log(this.state); console.log('Game Over!');}
        );
      } else {
        const score = this.state.score + 1;
        const wl = (score === 12) ? 1 : 0;
        const best = (wl === 1) ? score : this.state.topScore;
        pcs[i].isClicked = true;
        this.setState(
        {
          pieces: pcs,
          score: score,
          winLose: wl,
          topScore: best,
        }, () => {console.log(this.state); if(wl===1){console.log('You Win!')}}
        );
      }
    }
  }
  newGame()
  {
    // const pcs = this.state.pieces.forEach(p => p.isClicked = false);
    let pcs = Array(12).fill(null);
    for (let i = 0; i < 12; i++)
    {
      pcs[i] = this.state.pieces[i];
      pcs[i].isClicked = false;
    }
    console.log(`pcs: ${pcs}`);
    this.setState(
    {
      winLose: 0,
      score: 0,
      pieces: pcs,
    }, () => {console.log('newGame'); console.log(this.state);}
    );
  }
  render()
  {
    const winLose = this.state.winLose;
    let status;
    if (winLose === -1)
    {
      status = 'Game Over!';
    } else
    if (winLose === 1)
    {
      status = 'You Win!';
    } else
    {
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