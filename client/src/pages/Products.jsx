import {useState, useEffect} from 'react'
import List from '../components/List'
import {NavLink} from "react-router-dom";
import Navbar from "../components/Navbar";

const Products = () => {

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState([])
    const [items, setItems] = useState([])

    const handleSearch = (e) => {

        setSearch(e.target.value)

    }
    
    const handleFilter = (e) => {

        setFilter(e.target.value)

    }
    async function stuff() {
        const result = await fetch('http://localhost:5000/api/public/products')
        var revised = await result.json()
        setItems(revised)
        console.log(items)
    }
    

    useEffect(() => {
        stuff()
    }, [])
    

    return(
        <div className='product layout'> 
            {/* <form onSubmit={e => e.preventDefault()} > */}
            <form>
                <input placeholder='search' value={search} onChange={handleSearch} className='search' />

                <select name="sort" onChange={handleFilter} className='filter' >
                    <option value="">none</option>
                    <option value="miniatures">miniatures</option>
                    <option value="prototypes">prototypes</option>
                    <option value="functional-parts">functional parts</option>
                    <option value="decorative">decorative</option>
                    <option value="toys">toys</option>
                    <option value="organizers">organizers</option>
                </select>
                                                
                <List products={items} search={search} filters={filter}/>

            </form>
                
        </div>
    )
}

export default Products