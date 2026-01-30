import React from 'react'

const Home = () => {
    return (
        <div className="card">
            <h2>Home</h2>
            <p>"Once you realize you can do anything, you're free... you could fly."</p>
            <div className="row">
                {/* Need to add links */}
                <Link to="/" className="link active"></Link>    
                <Link to="/" className="link active"></Link>    
                <Link to="/" className="link active"></Link>    
                <Link to="/" className="link active"></Link>    
                <Link to="/" className="link active"></Link>    
            </div>
            <p>"Nobody could touch you... nobody."</p>
        </div>
    )
}

export default Home