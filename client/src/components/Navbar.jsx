import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar(){  
    return (
        <div className="nav">
            <div className="ban">
                <img src="" alt="" />
                <h2>Student-Store</h2>
            </div>

            <div className="buttons">
                <button className='products'>Products</button>
                <button className='custom'>Create Custom</button>                
            </div>

        </div>
    )
}
