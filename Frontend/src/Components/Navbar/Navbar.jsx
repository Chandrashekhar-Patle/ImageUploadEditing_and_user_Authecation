import {  useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    const [menu, setMenu] = useState("home");
    
    return(
        <>
        <div>
            <nav className="Navbar">
                <div className="logo">
                    <h1>NextAstra Task</h1>
                </div>
                <ul className="nav-Item">
                    <li onClick={()=> setMenu("home")}><Link className="link" to="/">Home </Link>{menu === "home" ? <hr /> : <></>}</li>
                </ul>

                <div className="buttons">
                    <button><Link className="login" to="/login" >Login</Link></button>
                </div>

            </nav>
        </div>
        </>
    )
}

export default Navbar;