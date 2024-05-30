import React, { useEffect } from "react";

function User(props) {
  //define useEffect
  useEffect(() => {
    console.log("useEffect called");
  }, [props.usercount, props.userdata]); //useEffect called on "count" And useEffect called on 'data'

  return (
    <div className="App">
      <h4>Count Props : {props.usercount}</h4>
      <h4>Data Props : {props.userdata}</h4>
    </div>
  );
}
export default User;
