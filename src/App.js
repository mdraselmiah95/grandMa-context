import { useState } from "react";
import "./App.css";
import Grandfather from "./components/Grandfather/Grandfather";

function App() {
  const [house, setHouse] = useState(1);
  const ornaments = "Diamond Ring";
  return (
    <div className="App">
      <button onClick={() => setHouse(house + 1)}>Buy a new houses</button>
      <Grandfather house={house} ornaments={ornaments} />
    </div>
  );
}

export default App;
