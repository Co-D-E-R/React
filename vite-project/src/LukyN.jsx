import { useState } from "react";
import { rollDice,d6 } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

function LukyN({numDice=2,winCheck,title ="Dice Game"}){
    const [ dice1 , setDice] = useState(rollDice(numDice));
    const isWinner = winCheck(dice1); 
    const roll = () => {
        setDice(rollDice(numDice));
    }
    return <>
        <main className="LuckyN">
             <h1>{title} {isWinner && "You Win!"}</h1>
            <Dice dice={dice1}/>
            {/* <button onClick={roll}>Roll Again</button>  */}
            <Button clickFun={roll}/> 
        </main>
    </>

}

export default LukyN;