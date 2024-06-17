import {useSearchParams} from "react-router-dom";

function Filter(){
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("age"));
    console.log(searchParams.get("city"));
    const age = searchParams.get("age");
    const city = searchParams.get("city");
    const email = searchParams.get("email");
    return(
        <div>
            <h3>Filter Page</h3>
            <h4>Age is : {age}</h4>
            <h4>City is : {city}</h4>
            <h4>Email is : {email}</h4>
            <input type="text" onChange={(e)=> setSearchParams({text:e.target.value, email:"vijay@gmail.com" })} placeholder="Set Text in Query Params" />
            <button onClick={()=> setSearchParams({age:40})}>Set Age in Query Params</button>
        </div>
    )
}
export default Filter;