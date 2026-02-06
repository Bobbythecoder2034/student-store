import {useState, useEffect} from 'react'
import List from '../components/List'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
const Products = ({products}) => {

    const [search, setSearch] = useState('')
    const [isSearch, setIsSearch] = useState(false)
    const [filter, setFilter] = useState([])
    const [load, setLoad] = useState(0)
    
    const handleSearch = (e) => {

        setIsSearch(true)
        setSearch(e.target.value)

    }
    
    const handleFilter = (e) => {

        setFilter(e.target.value)

    }
    

    return (
    

            <div> 
                <input type="text" id='searchText' />
                <form onSubmit={e => e.preventDefault()}>
                    <input placeholder='search' value={search} onChange={handleSearch}/>

                    <br /><select name="sort" onChange={handleFilter} >
                        <option value="miniatures">miniatures</option>
                        <option value="prototypes">prototypes</option>
                        <option value="functional-parts">functional parts</option>
                        <option value="decorative">decorative</option>
                        <option value="toys">toys</option>
                        <option value="organizers">organizers</option>
                    </select>

                    <br /><br /><button onClick={() => {handleFilter}}> filter </button>
                    
                    <br /><button onClick={()=>{setIsSearch(false); setFilter(null)}}> load all </button>
                    
                    <div>

                        <div>
                            
                            <List products={products} isSearch={isSearch} search={search} filters={filter}/>

                        </div>

                    </div>
                </form>
                
            </div>

            

    )
}

export default Products