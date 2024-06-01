import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import User from "./User";

function App() {
  const users = [
    { name: "Anil", email: "anil@gmail.com", contact: "111"},
    { name: "Bruce", email: "bruce@gmail.com", contact: "222"},
    { name: "Peter", email: "peter@gmail.com", contact: "333"},
    { name: "Sam", email: "sam@gmail.com", contact: "444"},
  ];

  function handler(){
    alert("Hello");
  }

  return (
    <div className="App">
      <h4>Reuse Component With List</h4>
      {
        users.map(
          (item, index)=>(
              <User username={item.name} useremail={item.email} usercontact={item.contact} functionhandler={handler}/>
          )
        )
      }
    </div>
  );
}
export default App;
