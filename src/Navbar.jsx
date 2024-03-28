import App from "./App";
import Home from "./Home";
import Blogs from "./Blogs";
import Display from "./Display";
import './App.css'


function Navbar(){
    return(
    
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/display">Display</a></li>
            </ul>
            
            
            
        </nav>
    )

}



export default Navbar