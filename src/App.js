import "./App.css";
import Table from "react-bootstrap/Table";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const users = [
    {
      name: "anil",
      email: "anil@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "12", city: "Pune", country: "Dubai" },
        { Hn: "13", city: "Mumbai", country: "Canada" },
        { Hn: "14", city: "Kolhapur", country: "America" },
      ],
    },
    {
      name: "siddhu",
      email: "siddhu@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "12", city: "Pune", country: "Dubai" },
        { Hn: "13", city: "Mumbai", country: "Canada" },
        { Hn: "14", city: "Kolhapur", country: "America" },
      ],
    },
    {
      name: "peter",
      email: "peter@gmail.com",
      address: [
        { Hn: "10", city: "Noida", country: "India" },
        { Hn: "12", city: "Pune", country: "Dubai" },
        { Hn: "13", city: "Mumbai", country: "Canada" },
        { Hn: "14", city: "Kolhapur", country: "America" },
      ],
    },
  ];

  return (
    <div className="App">
      <h4>ist With Nested Array</h4>
        <Table variant="dark" striped>
            <thead>
                <tr>
                   <td>S.No</td>
                   <td>Name</td>
                   <td>Email</td>
                   <td>Address</td>
                </tr>
            </thead>
            <tbody>
              {
                 users.map(
                  (item, index)=>(
                    <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                    <Table variant="dark" striped>
                      <tbody>
                      {
                         item.address.map(
                          (data, index)=>(
                             <tr key={index}>
                               <td>{data.Hn}</td>
                               <td>{data.city}</td>
                               <td>{data.country}</td>
                             </tr>
                          )
                         )
                      }
                      </tbody>
                    </Table>
                    </td>
                 </tr>
                  )
                 )
              }
            </tbody>
        </Table>
    </div>
  );
}
export default App;
