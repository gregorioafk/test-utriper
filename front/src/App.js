import logo from "./logo.svg";
import "./App.css";
import Calendario from "./Calendario";
import CurrencyConverter from "./CurrencyConverter";
import MockHorarios from "./MockHorarios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calendario />
        <CurrencyConverter />
        <MockHorarios />
      </header>
    </div>
  );
}

export default App;
