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
                <NavLink className='nav-products' to={'/'}>Home</NavLink>
                <NavLink className='nav-products' to={'/products'}>Products</NavLink>
                <NavLink className="nav-custom" to={'/custom-order'}>Custom Print</NavLink>
            </div>
        </div>
        
    )
}
