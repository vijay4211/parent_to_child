import{withRoute} from "react-router-dom";

function User(props) {
  console.log(props);
  return (
    <div>
        <h4>User Component</h4>
    </div>
  );
}
export default withRoute(User);
