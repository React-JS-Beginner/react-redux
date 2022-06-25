import "./App.css";
import Cart from "./Components/Cart/Cart";
import CounterDisplay from "./Components/CounterDisplay/CounterDisplay";

function App() {
  return (
    <>
      <div className="App">
        <Cart />
        <div className="counter">
          <CounterDisplay />
        </div>
      </div>
    </>
  );
}

export default App;
