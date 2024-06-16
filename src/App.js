import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h4>HOC</h4>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter}/>
    </div>
  );
}

function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100 }}>
      Red <props.cmp />
    </h2>
  );
}

function HOCGreen(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: 100 }}>
      Green <props.cmp />
    </h2>
  );
}

function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: 100 }}>
      Blue <props.cmp />
    </h2>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default App;
