import "./App.css";
import { LikeButton } from "./components/LikeButton";
import { Counter } from "./components/Counter";
import { ClickablePicture } from "./components/ClickablePicture";
import { Dice } from "./components/Dice";
import { DiscoButton } from "./components/DiscoButton";

function App() {
  

  const createRandomNr = (endNr, startNr=0) => {
    return Math.floor((Math.random() * endNr) + startNr)
  }

 
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <Counter />
      <ClickablePicture />
      <Dice randomNr={createRandomNr} />
      <DiscoButton randomNr={createRandomNr} />
      <DiscoButton randomNr={createRandomNr} />
    </div>
  );
}

export default App;
