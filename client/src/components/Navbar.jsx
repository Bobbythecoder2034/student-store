import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar(){  
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
                <button className='nav-products'>Products</button>
                <button className="nav-custom">Custom Print</button>
            </div>
        </div>
        
    )
}
