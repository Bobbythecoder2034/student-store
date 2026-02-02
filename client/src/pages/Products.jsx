import {useState} from 'react'
import List from '../components/List'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Products = ({products}) => {

    
    const [search, setSearch] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const [filter, setFilter] = useState([])

    return (
        <>
    

                <div> 

                    <input type="text" id='searchText' />
                    <button onClick={() => {setIsSearch(true); setSearch()}}> search </button>
                    <button onClick={() => {}}>Filter</button>
                    <select name="sort" >

                            <option value="name down">{FaArrowDown} Name</option>
                            <option value="name up">{FaArrowUp} Name</option>
                            <option value="price down">{FaArrowDown} Price </option>
                            <option value="price up">{FaArrowUp} Price</option>

                        </select>

                </div>

                <div>

                    <List/>

                </div>
  
        </>
        
        
    )
}

export default Products