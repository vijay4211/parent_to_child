import "./App.css";

function App() {
  
 const students = [
  {name:"anil", email:"anil@gmail.com", contact:12356 }, //row-1
  {name:"siddhu", email:"siddhu@gmail.com", contact:111222 },  //row-2
  {name:"peter", email:"peter@gmail.com", contact:3333 } //row-3
 ] 
 

  return (
    <div className="App">
      <table border={1}>
        <tr>
        <td>Name</td>
          <td>Email</td>
          <td>Contact</td>
        </tr>
      {
        students.map((data)=>(
          <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.contact}</td>
        </tr>
        ))
      }
      </table>
    </div>
  );
}
export default App;
