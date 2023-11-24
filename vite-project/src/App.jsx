import LukyN from './LukyN';
import { sum } from './utils';

function lessThan4(dice){
   return sum(dice) < 4;
}

function sameDice(dice){
   return dice.every(d => d === dice[0]);
}

function App() {
  
  return (
    <>
      <LukyN winCheck={lessThan4}/>
      <LukyN winCheck={sameDice} title="Same Dice" numDice={2}/>
    </>
  );
}

export default App;
