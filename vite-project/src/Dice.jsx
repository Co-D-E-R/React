import Die from './Die';
import './Dice.css';
function Dice({ dice , color}){
    return <>
        <section className="Dice">
            {dice.map((d,i) =>(
                <Die key={i} val={d} color={color}/>
            ))}
        </section>
    </>
}

export default Dice;