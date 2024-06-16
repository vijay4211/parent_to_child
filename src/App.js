import { useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let inputRef = useRef(null);
  let inputRef2 = useRef(null);

  //define function
  function submitForm(event) {
    //event is by default parameter
    //stop the reloading page
    event.preventDefault();
    console.log("input field 1 value : " + inputRef.current.value);
    console.log("input field 2 value : " + inputRef2.current.value);
    let input3 = document.getElementById("input3").value;
    console.log("input field 3 value : " + input3);
  }
  return (
    <div className="App">
      <h4>Uncontrolled Component</h4>
      <form onSubmit={submitForm}>
        <input type="text" ref={inputRef} />
        <br />
        <br />
        <input type="text" ref={inputRef2} />
        <br />
        <br />
        <input id="input3" type="text" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
