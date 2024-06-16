import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  //define state
  const [val, setVal] = useState("0"); //0 is default value

  return (
    <div className="App">
      <h4>Controlled Component</h4>
      <h5>Value : {val}</h5>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
      />
    </div>
  );
}
export default App;
