import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";


export function Dice () {
    const dices = [
      {
        dice: diceEmpty,
        alt: "dice is rolling"
      },
      {
        dice: dice1,
        alt: "Dice showing one",
      },
      {
        dice: dice2,
        alt: "Dice showing two",
      },
      {
        dice: dice3,
        alt: "Dice showing three",
      },
      {
        dice: dice4,
        alt: "Dice showing four",
      },
      {
        dice: dice5,
        alt: "Dice showing five",
      },
      {
        dice: dice6,
        alt: "Dice showing six",
      },
    ];

    const emptyDice = dices[0]

    const randomDice = () => {
        const randomNr = Math.floor((Math.random() * 6) +1)
        return dices[randomNr]
    }

    const [dice, setDice] = useState(randomDice())

    const rollDice = () => {
        setDice(emptyDice);
        setTimeout(() => {
            setDice(randomDice)
        }, 1000)
    }

    return (
        <>
        <div>
            <img onClick={rollDice} className="dice" src={dice.dice} alt={dice.alt} />
        </div>
        </>
    )
}