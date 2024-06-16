import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Link to="/home">Home Page</Link> <br />
        <Link to="/about">About Page</Link><br />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h3>Home Page</h3>
      <p>This is Home Page of Website</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h3>About Page</h3>
      <p>This is About Page of Website</p>
    </div>
  );
}

export default App;
