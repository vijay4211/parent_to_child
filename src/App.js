import "./App.css";
import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
 const users = [
  {name:"anil", email:"anil@gmail.com", contact:12356 }, //row-1
  {name:"siddhu", email:"siddhu@gmail.com", contact:"111" },  //row-2
  {name:"peter", email:"peter@gmail.com", contact:"111" } //row-3
 ] 
 

  return (
    <div className="App">
       <h4>List With Bootstrap and Unique Key</h4>
       <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(
            (item, index)=>(
              item.contact === '111' ?
              <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              </tr> : null
            )
          )
        }
        
      </tbody>
    </Table>
    </div>
  );
}
export default App;
