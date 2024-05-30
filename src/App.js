import "./App.css";
import "./Style.css";
import style from "./custome.module.css";

function App(){
  return(
    <div className="App">
      <h2 className="primary">Style type 1 in React js</h2>
      <h2 style={{color:"red", backgroundColor:"black"}}>Style type 2 in React js</h2>
      <h2 className={style.sucess}>Style type 3 in React js demo</h2>
    </div>
  )
}
export default App;

//style 1st bracket use jsx
//style 2nd bracke use css style
