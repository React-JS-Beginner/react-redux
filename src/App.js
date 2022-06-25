import logo from "./logo.svg";
import "./App.css";
import CounterDisplay from "./Components/CounterDisplay/CounterDisplay";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <CounterDisplay />
    </div>
  );
}

export default App;
