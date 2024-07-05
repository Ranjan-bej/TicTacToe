import { useState } from 'react';
import './App.css';

function App() {
  const [state , setState]=useState(Array(9).fill(null));
  const [Xturn,setXturn]=useState(true);
  const checkWinner = ()=>{
    const winnerLogic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];
    for(let logic of winnerLogic){
      const [a,b,c] = logic;
      if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
        return state[a];
      }
    }
    return false;
  };

  const winner = checkWinner();
  const handleClick=(index)=>{
    const copyState = [...state];
    copyState[index] = Xturn?"X":"O";
    setState(copyState);
    setXturn(!Xturn);
  }
  return (
    <div className="App">
      <div className="board">
      {winner?<h1>{winner} Won the game!</h1>:<h1>Tic Tac Toe</h1>}
        <div className="container text-center">

          <div className="row">
            <div className="col" onClick={()=>handleClick(0)}>{state[0]}</div>
            <div className="col" onClick={()=>handleClick(1)}>{state[1]}</div>
            <div className="col" onClick={()=>handleClick(2)}>{state[2]}</div>
          </div>


          <div className="row">
            <div className="col" onClick={()=>handleClick(3)}>{state[3]}</div>
            <div className="col" onClick={()=>handleClick(4)}>{state[4]}</div>
            <div className="col" onClick={()=>handleClick(5)}>{state[5]}</div>
          </div>


          <div className="row">
            <div className="col" onClick={()=>handleClick(6)}>{state[6]}</div>
            <div className="col" onClick={()=>handleClick(7)}>{state[7]}</div>
            <div className="col" onClick={()=>handleClick(8)}>{state[8]}</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
