import React, { useState } from 'react';
import './App.css';
import Cell from './components/Cell';
import Title from './components/Title';
import Display from './components/Display';

const items = [
  { text: '', id: 0 },
  { text: '', id: 1 },
  { text: '', id: 2 },
  { text: '', id: 3 },
  { text: '', id: 4 },
  { text: '', id: 5 },
  { text: '', id: 6 },
  { text: '', id: 7 },
  { text: '', id: 8 },
];

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const isWin = (wins, items) => items[wins[0]].text !== '' && items[wins[0]].text === items[wins[1]].text && items[wins[0]].text === items[wins[2]].text;

const App = () => {
  const [cells, setCells] = useState(items);
  const [player, setPlayer] = useState(true)
  const [isEnd, setEnd] = useState(false)
  const [winAndLoser, setWinAndLoser] = useState('Draw')

  const onCellClick = (id) => {
      if(cells.find(cell => cell.id === id).text !== '')
        return;

      

    setCells(previous => {
      const currentPlayer = player
      setPlayer(!player)

        const temp = previous.map((item) => (item.id === id ? { ...item, text: currentPlayer ? 'O' : 'X' } : item));

        if(wins.some(win => isWin(win, temp))) {
          setEnd(true)
          setWinAndLoser(player ? 'Player O Wins' : 'Player X Wins')
        } else if(temp.every(cell => cell.text !== '')) {
          setEnd(true)
          setWinAndLoser('Draw')
        }

      return temp;
    });

    
  };

  const onRestart = () => {
    setCells(items.map(item => ({ ...item, text: '' })));
    setPlayer(true);
    setEnd(false);
    setWinAndLoser('Draw');
  };

  return (
    <>
      <div className='head-wrapper'>
        <h1 className='head-title'>TIC-TAC-TOE</h1>
      </div>
      <div className='game__board'>
        <div className='grid'>
          {cells.map(({ text, id }) => <Cell onCellClick={event => onCellClick(id)} key={id} text={text}/>)}
        </div>
        <Title text={`Player ${player ? 'O' : 'X'}`} />
      </div>
      {isEnd && <Display text={winAndLoser} onRestart={onRestart}/>}
    </>
  );
};

export default App;
