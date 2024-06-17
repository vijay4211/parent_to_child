import { Link, useNavigate } from "react-router-dom";
function Home() {

  const navigate = useNavigate();
  const navToPage = (url)=>{
    navigate(url);
  }
  return (
    <div>
      <h3>Home Page</h3>
      <p>This is Home Page of our awsome App</p>
      <p>And here we are learning about Router</p>
      <Link to="/about">Go to About Page</Link><br /><br />
      <button onClick={()=> navToPage("/about")}>Go to About Page</button><br />
      <button onClick={()=> navToPage("/filter")}>Go to Filter Page</button><br />
    </div>
  );
}
export default Home;
