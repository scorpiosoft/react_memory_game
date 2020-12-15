import React from 'react'
import Piece from '../components/Piece'
import { Row, Col } from '../components/Grid'

// Fisher–Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j] using destructuring
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Board = (props) =>
{
    const { pieces, onClick } = props
    let rndPcs = pieces.slice();
    shuffle(rndPcs);
    return (
    <div>
            {rndPcs.map(piece => (
              <Piece
                id={piece.id}
                key={piece.id}
                image={piece.image}
                onClick={() => onClick(piece.id)}
              />
            ))}
        {/* <div className="board-row">
            <Square value={pieces[0]} onClick={() => onClick(0)} />
            <Square value={pieces[1]} onClick={() => onClick(1)} />
            <Square value={pieces[2]} onClick={() => onClick(2)} />
        </div>
        <div className="board-row">
            <Square value={pieces[3]} onClick={() => onClick(3)} />
            <Square value={pieces[4]} onClick={() => onClick(4)} />
            <Square value={pieces[5]} onClick={() => onClick(5)} />
        </div>
        <div className="board-row">
            <Square value={pieces[6]} onClick={() => onClick(6)} />
            <Square value={pieces[7]} onClick={() => onClick(7)} />
            <Square value={pieces[8]} onClick={() => onClick(8)} />
        </div> */}
    </div>
    )
}
export default Board;