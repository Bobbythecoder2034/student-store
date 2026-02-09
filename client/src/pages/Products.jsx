import {useState, useEffect} from 'react'
import List from '../components/List'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
=======


>>>>>>> Stashed changes
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
    const reload = () =>{
        return(
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
                            
                            <List products={items} isSearch={isSearch} search={search} filters={filter}/>

                        </div>

                    </div>
                </form>
                
            </div>
        )
    }
    const [items, setItems] = useState([])
    const retrieve = async () => {
        const result = await fetch('http://localhost:5000/api/public/products')
        var revised = await result.json()
        setItems(revised)
        console.log(items)
    }
    // retrieve()

    useEffect(() => {
      console.log('hi')
      reload()
    }, [])
    

    return reload()
}

export default Products