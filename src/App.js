import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./User";
import { useRef } from "react";

function App() {
  //define variable
  let inputRef = useRef(null);

  //define function
  function updateINput() {
    inputRef.current.value = "1000";
    inputRef.current.style.color ="red";
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <User ref={inputRef}/>
      <button onClick={updateINput}>Update InputBox</button>
    </div>
  );
}
export default App;
