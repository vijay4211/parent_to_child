import { Component } from "react";

class Student extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  render() {
    return (
      <div>
        <h1>Student Will Unmount</h1>
      </div>
    );
  }
}
export default Student;
