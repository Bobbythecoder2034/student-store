import {NavLink} from "react-router-dom";

export default function Navbar(){

    const linkClass = ({ isActive }) => "link" + (isActive ? " active" : "");

    return (
        <header className="nav">
            <nav className="nav-inner">

                {/* Logo */}
                <NavLink to="/" className="brand">
                    Student Hub
                </NavLink>

                {/* Links */}
                <div className="nav-links">
                    <NavLink className={linkClass} to="/" end>
                        Home
                    </NavLink>

                    <NavLink className={linkClass} to="/products">
                        Products
                    </NavLink>

                    <NavLink className={linkClass} to="/testimonials">
                        Testimonials
                    </NavLink>
                </div>

                {/* CTA Button */}
                <NavLink className="cta" to="/custom-order">
                    Custom Print
                </NavLink>

            </nav>
        </header>
    );
}
