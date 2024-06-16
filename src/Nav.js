import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <br />
      <Link to="/about">About Page</Link>
      <br />
    </div>
  );
}
export default Nav;
