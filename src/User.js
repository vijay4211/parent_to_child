import {PureComponent } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class User extends PureComponent {
  render() {
    console.log("User Component Re-render");
    return (
      <div className="App">
        <h4>User Component {this.props.NumberCount}</h4>
      </div>
    );
  }
}
export default User;
