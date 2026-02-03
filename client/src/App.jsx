// import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
// import Detail from './pages/Detail.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
// import Products from './pages/Products.jsx'
import Testimonials from './pages/Testimonials.jsx'
// import Order from './pages/Order.jsx'


const App = () => {
    return (
      <div className="app">
        <Navbar/>
      
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path='/testimonials' element={<Testimonials/>}/>
          </Routes>
        </main>
      </div>
    )
}

export default App