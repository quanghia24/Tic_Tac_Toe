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

export default function Board() {
  const [turn, setTurn] = useState(true);

  return (
      <>
        <div className="board-row">
          <Square turn={turn} setTurn={setTurn} />
          <Square turn={turn} setTurn={setTurn} />
          <Square turn={turn} setTurn={setTurn} />
        </div>
  <div className="board-row">
            <Square turn={turn} setTurn={setTurn} />
            <Square turn={turn} setTurn={setTurn} />
            <Square turn={turn} setTurn={setTurn} />
          </div>
  <div className="board-row">
            <Square turn={turn} setTurn={setTurn} />
            <Square turn={turn} setTurn={setTurn} />
            <Square turn={turn} setTurn={setTurn} />
        </div>

      </>
  );
}


