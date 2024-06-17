import { Link, Outlet } from "react-router-dom";
function Contact() {
  return (
    <div>
      <h1>Contact Us Page</h1>
      <p>Here we have some other business</p>
         <ul>
            <li><Link to={"company"}>Company</Link></li>
            <li><Link to={"channel"}>Channel</Link></li>
            <li> <Link to={"other"}>Other</Link></li>
         </ul>
      <Outlet />
    </div>
  );
}
export default Contact;
