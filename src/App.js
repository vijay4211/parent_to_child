import { Component, createRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  //define constructor
  constructor(){
    super();
    this.inputRef = createRef();
  }
  componentDidMount(){
    // console.log(this.inputRef.current.value="1000");

  }

  //define function
  getVal(){
    console.log(this.inputRef.current.value);
    this.inputRef.current.style.color = "red";
    this.inputRef.current.style.backgroundColor = "black";
  }

  render() {
    //method
    return (
      <div>
        
        <input type="text" ref={this.inputRef}/>
        <button onClick={()=> this.getVal()}>Check Ref</button>
      </div>
    );
  }
}
export default App;
