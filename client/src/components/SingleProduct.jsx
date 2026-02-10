import {NavLink} from "react-router-dom";


const SingleProduct = ({name, slug, description, price, category, inStock, featured}) =>
{
       
        return(

                <NavLink className="product" id={slug} to={'/detail'} >

                        
                        <h1 className="SP-name">{name}</h1> 
                        <h2 className="SP-price">{price}</h2> 
                        <h3 className="SP-stock">{String(inStock)}</h3>
                        <h4 className="SP-category">{category}</h4>


                </NavLink>

        )

}

export default SingleProduct