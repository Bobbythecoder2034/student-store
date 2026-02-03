import {useState, useEffect} from 'react'
import List from '../components/List'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Products = ({products}) => {

    const [search, setSearch] = useState('false')
    const [isSearch, setIsSearch] = useState(false)
    const [filter, setFilter] = useState([])
    const [load, setLoad] = useState(0)
    
    useEffect(() => {
      
        setSearch(document.getElementById('search').ariaValueText)
        // console.log(document.getElementById('search'))
    }, [isSearch])
    

    return (
        <div>

            <div> 
                <input type="text" id='searchText' />
                <form action="">
                    <br /><button onClick={() => {setIsSearch(true);}}> search </button> <input type="text" id="search"/>
                </form>
                <br /><button onClick={() => {setFilter}}> filter </button>
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