import { PureComponent } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./User";
class App extends PureComponent {
  //define constructor method
  constructor() {
    super();
    //define state
    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <div className="App">
        <User NumberCount={this.state.count} />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Update Count
        </button>
      </div>
    );
  }
}
export default App;
