import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <h3>About Page</h3>
      <p>This is About Page of our awsome App</p>
      <p>And here we are learning About Router</p>
      <Link to="/">Go to Home Page</Link>
      <li><Link to={"/user/Anil"} state={{name : "Anil Siddhu", age:27}}>Anil</Link></li>
      <li><Link to={"/user/Peter"}>Peter</Link></li>
      <li><Link to={"/user/John"}>John</Link></li>
    </div>
  );
}
export default About;
