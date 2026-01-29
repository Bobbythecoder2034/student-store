import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar(){  
    return (
        <header className="nav">
            <nav className="nav-inner">
                <div className="brand">Student Hub</div>

                <NavLink className={({isActive}) => "link" + (isActive ? " active" : "")} to="/" end>
                    Home
                </NavLink>

                <NavLink className={({isActive}) => "link" + (isActive ? " active" : "")} to="/products">
                    Products
                </NavLink>

                <NavLink className={({isActive}) => "link" + (isActive ? " active" : "")} to="/products/[slug]">
                    {/* Not sure how to do the link for this one */}
                    Product Detail Page
                </NavLink>

                <NavLink className={({isActive}) => "link" + (isActive ? " active" : "")} to="/testimonials">
                    Testemonials
                </NavLink>

                <NavLink className={({isActive}) => "link" + (isActive ? " active" : "")} to="/custom-order">
                    Custom Order
                </NavLink>
            </nav>
        </header>
    )
}