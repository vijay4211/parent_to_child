import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import User from "./User";

function App() {
  //function
  function test() {
    console.log("test function");
  }
  test();

  return (
    <div className="App">
      <h4>Reuse Component With List</h4>
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}
export default App;
