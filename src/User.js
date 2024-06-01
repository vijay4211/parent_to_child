import React from "react";

function User(props) {
  // const data = "Anil Siddhu";
  const data = {
    name: "Anil Siddhu",
    email: "anil@gmail.com",
    address: "Delhi",
  };

  return (
    <div className="App">
      <h4>User Name </h4>
      <button onClick={() => props.alert(data)}>Click Me</button>
    </div>
  );
}
export default User;
