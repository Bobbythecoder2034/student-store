import {useState, useEffect} from 'react'
import List from '../components/List'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Products = ({products}) => {

    const [search, setSearch] = useState('false')
    const [isSearch, setIsSearch] = useState(false)
    const [filter, setFilter] = useState([])
    const [load, setLoad] = useState(0)
    
    const handleSearch = (e) => {

        setSearch(e.target.value)

    }
    

    return (
        <div>

            <div> 
                <input type="text" id='searchText' />
                <form onSubmit={e => e.preventDefault()}>
                    <br /><button onClick={() => {hanleSearch}}> search </button> <input value={search} type="text" id="search"/>
                    <br /><button onClick={() => {handleFilter}}> filter </button>
                    <br /><button onClick={()=>{setIsSearch(false); setFilter(null)}}> load all </button>
                </form>
                {/* <select name="sort" >
                    <option value="name down"><FaArrowDown/> Name</option>
                    <option value="name up"><FaArrowUp/> Name</option>
                    <option value="price down"><FaArrowDown/> Price </option>
                    <option value="price up"><FaArrowUp/> Price</option>
                </select> */}
            </div>

            <div>

                {/* hello 3 */}
                
                <List products={products} isSearch={isSearch} search={search} filters={filter}/>

            </div>

        </div>
    )
}

export default Products