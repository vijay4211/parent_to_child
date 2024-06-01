import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import User from "./User";
function App() {
  
  function parentAlert(DataComeFromChild){  //data as DataComeFromChild
     console.log(DataComeFromChild);
     alert(DataComeFromChild.name);
  }

  return (
    <div className="App">
      <h4>======Lifting State Up===========</h4>
      <User alert={parentAlert} />
    </div>
  );
}
export default App;
