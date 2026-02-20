import { Boxes } from "lucide-react";
import {NavLink} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar(){

    const linkClass = ({ isActive }) => "link" + (isActive ? " active" : "");

    return (
    // <div className="nav dark:bg-gray-800">
    //      <div className="nav-info">
    //         <div className="placeholder-logo"></div>
    //         <div className="blurb">
    //             <h3 className='nav-head text-black dark:text-white'>West-MEC</h3>
    //         <sub className='nav-sub'>Student Print Shop</sub>
    //         </div>
            
    //     </div>   

    //     <div className="nav-interaction dark:text-white text-black">
    //         <NavLink className='nav-products' to={'/'}>Home</NavLink>
    //         <NavLink className='nav-products' to={'/products'}>Products</NavLink>
    //         <NavLink className='nav-products' to={'/testimonials'}>Testimonials</NavLink>
    //         <NavLink className="nav-custom" to={'/custom-order'}>Custom Print</NavLink>
    //     </div>
    // </div>

        <div className="nav">
            <div className="logo-area">
                <div className="logo">
                                <Boxes className='logo'/>
                </div>
            <div className="stacked">
                <h1>West-MEC</h1>
                <sub>Student Print Shop</sub>
            </div>

            
        </div>
        
            <div className="buttons">
                <Link>
                    <div style={{alignSelf: 'center'}} className='sign-up'>Sign Up</div>
                </Link>
                <Link>
                    <div style={{justifySelf: 'center'}} className='product-link'>Products</div>
                </Link>
                <Link>
                    <button style={{alignSelf: 'center'}} className='custom-link'>Custom Print</button>
                </Link>
            </div>
        </div>
    
        
    )
}
