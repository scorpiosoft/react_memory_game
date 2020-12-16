import React from 'react'
import Piece from '../components/Piece'
import { Container, Row, Col } from '../components/Grid'

// Fisher–Yates shuffle
function shuffle(array)
{
  for (let i = array.length - 1; i > 0; i--)
  {
    let j = Math.floor(Math.random() * (i + 1));

    // swap elements array[i] and array[j] using destructuring
    [array[i], array[j]] = [array[j], array[i]];
  }
}
const Board = (props) =>
{
  const { pieces, onClick } = props
  let rndPcs = pieces.slice();
  shuffle(rndPcs);
  let idx = 0;
  rndPcs.forEach(element => {
    element.index = idx;
    idx++;
  });
  const row1 = rndPcs.filter(p => (p.index < 3));
  const row2 = rndPcs.filter(p => (p.index >= 3 && p.index < 6));
  const row3 = rndPcs.filter(p => (p.index >= 6 && p.index < 9));
  const row4 = rndPcs.filter(p => (p.index >= 9));
  return (
    <div>
    <Container fluid={true}>
      <Row fluid={true} classes={'justify-content-md-center'}>
        {row1.map(piece => (
          <Col key={piece.id}>
            <Piece
              id={piece.id}
              image={piece.image}
              onClick={() => onClick(piece.id)}
            />
         </Col>
        ))}
      </Row>
      <Row fluid={true} classes={'justify-content-md-center'}>
        {row2.map(piece => (
          <Col key={piece.id}>
            <Piece
              id={piece.id}
              image={piece.image}
              onClick={() => onClick(piece.id)}
            />
         </Col>
        ))}
      </Row>
      <Row fluid={true} classes={'justify-content-md-center'}>
        {row3.map(piece => (
          <Col key={piece.id}>
            <Piece
              id={piece.id}
              image={piece.image}
              onClick={() => onClick(piece.id)}
            />
         </Col>
        ))}
      </Row>
      <Row fluid={true} classes={'justify-content-md-center'}>
        {row4.map(piece => (
          <Col key={piece.id}>
            <Piece
              id={piece.id}
              image={piece.image}
              onClick={() => onClick(piece.id)}
            />
         </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}
export default Board;