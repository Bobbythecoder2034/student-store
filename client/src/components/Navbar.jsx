import {NavLink} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar(){

    const linkClass = ({ isActive }) => "link" + (isActive ? " active" : "");

    return (
<div className="nav">
         <div className="nav-info">
            <div className="placeholder-logo"></div>
            <div className="blurb">
                <h3 className='nav-head'>West-MEC</h3>
            <sub className='nav-sub'>Student Print Shop</sub>
            </div>
            
            </div>   

            <div className="nav-interaction">
<<<<<<< Updated upstream
                <button className='nav-products'>Products</button>
                <button className="nav-custom"><Link to={'/custom-order'}>Custom Print</Link></button>
=======
                <NavLink className='nav-products' to={'/products'}>Products</NavLink>
                <NavLink className="nav-custom" to={'/detail'}>Custom Print</NavLink>
>>>>>>> Stashed changes
            </div>
        </div>
        
    )
}
