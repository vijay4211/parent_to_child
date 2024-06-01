import { Table } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "./Col";
function App() {


  return (
    <div className="App">
      <h4>React Fragment</h4>
        <Table>
          <tbody>
            <tr>
               <Col />
            </tr>
          </tbody>
        </Table>
    </div>
  );
}
export default App;
