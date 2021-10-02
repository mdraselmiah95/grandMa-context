import { createContext, useState } from "react";
import "./App.css";
import Grandfather from "./components/Grandfather/Grandfather";

export const RingContext = createContext("ring");

function App() {
  const [house, setHouse] = useState(1);
  const ornaments = "Diamond Ring with Love";
  return (
    <RingContext.Provider value={[ornaments, house]}>
      <div className="App">
        <button onClick={() => setHouse(house + 1)}>Buy a new houses</button>
        <Grandfather house={house} ornaments={ornaments} />
      </div>
    </RingContext.Provider>
  );
}

export default App;
