import './App.css';
import {useState} from "react";


function Square({turn, setTurn}) {
  const [value, setValue] = useState(null);

  function handleClick() {
    if(value !== null) return;
    console.log(turn);
    if(turn){
      setValue('x');
    }
    else{
      setValue('o');
    }
    setTurn(!turn);
  }
  return <button className="square" onClick={handleClick}>{value}</button>;
}

function checkWinning() {
    return;
}

export default function Board() {
  const [turn, setTurn] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
      <>
        <div className="board-row">
          <Square turn={turn} setTurn={setTurn} />
          {/*<Square turn={turn} setTurn={setTurn} />*/}
        </div>


      </>
  );
}


