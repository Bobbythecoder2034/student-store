// import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
// import Detail from './pages/Detail.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Products from './pages/Products.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Order from './pages/CustomOrder.jsx'
import './styles/css/style.css'

// get data

// const parsed = JSON.parse(mockData)
// console.log(typeof(mockData))


const App = () => {
    return (
      <div className="app">
              
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/products' element={<Products/>}/> {/* Products link has map error */}
            <Route path='/testimonials' element={<Testimonials/>}/> {/* Only shows the word 'testimonials' along with navbar */}
            <Route path='/custom-order' element={<Order/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </main>
      </div>
    )
}

export default App