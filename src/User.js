import React from "react";

function User(props) {
  const styling = {
    background : "skyblue",
    marginTop:"40px"
  }
  const NameStyle = {
    background : "pink"
  }
  const ButtonSytle = {
    padding:"5px 10px 10px 5px"
  }
  return (
    <div className="App" style={styling}>
      <h4 style={NameStyle}>Name : {props.username} </h4>
      <h4>Email : {props.useremail} </h4>
      <h4>Contact : {props.usercontact}</h4>
      <button onClick={()=> props.functionhandler()} style={ButtonSytle}>Click</button>
    </div>
  );
}
export default User;
