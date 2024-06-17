import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Nav from "./Nav";
import Page404 from "./component/Page404";
import User from "./component/User";
import Filter from "./component/Filter";
import Contact from "./component/Contact";
import Company from "./component/Company";
import Channel from "./component/Channel";
import Other from "./component/Other";
import Login from "./component/Login";
import Protected from "./component/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Protected Component={Home}/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<Protected Component={About}/>} />
          <Route path="/user/:name" element={<User />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/filter" element={<Protected Component={Filter} />} />
          <Route path="/contact/" element={<Contact />}>
              <Route path="company" element={<Company />}/>
              <Route path="channel" element={<Channel />}/>
              <Route path="other" element={<Other />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
