import { Link } from "react-router-dom";




const Navbar = () => {
    return (  
        <div className="navbar">
            <h1>Films rent</h1>
            <div className="links">
                <Link to="/" >Home</Link>
                <Link to="/create" >New Film</Link>
                <Link to="/createProducer" >New Producer</Link>
                <Link to="/producer" >Producer List</Link>
            </div>
        </div>
    );
}
 
export default Navbar;