import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h3>Home Page</h3>
      <p>This is Home Page of our awsome App</p>
      <p>And here we are learning about Router</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}
export default Home;
