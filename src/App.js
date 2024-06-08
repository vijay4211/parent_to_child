import { useState, useMemo } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //define state
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

//useMomo use callback function
const multiCountMemo = useMemo(
   //define function
   function multiCount(){
    console.log("Multi count");
    return count * 5;
  }, [count]

)

console.log("Render App Component");

  return (
    <div>
      <h4>Count : {count}</h4>
      <h4>Item : {item}</h4>
      <h4>{multiCountMemo}</h4>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button>
    </div>
  );
}
export default App;
