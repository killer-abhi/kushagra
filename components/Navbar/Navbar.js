
import classes from "./navbar.module.css";
const Navbar=(props)=>{

    return(
        <div className="navbar">
            <div className="logo">

            </div>
            <div className="navContainer">
                <div className="navs">About Us</div>
                <div className="navs">How it Works</div>
                <div className="navs">Contact Us</div>
                <div className="signUp">Sign Up</div>
            </div>
        </div>
    )
};

export default Navbar;