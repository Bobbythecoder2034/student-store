import {NavLink} from "react-router-dom";


// _id, name, slug, description, price, category, inStock, featured
const SingleProduct = ({product}) =>
{
       
        return(

                
                <NavLink  key={product._id} className="product flex flex-col items-center border-3 rounded-2xl p-3 m-2 mb-3 shadow-lg text-center" to={`/product/:${product._id}`}>
                        {console.log(product._id)}
                        
                        <h1 className="SP-name">{product.name}</h1> 
                        <div className="flex flex-row mt-3 mb-3 gap-6">
                                <h2 className="SP-price rounded-lg p-1 pr-2 pl-2 bg-blue-600 text-white font-bold">{product.price}</h2> 
                                <h3 className="SP-stock rounded-lg p-1 pr-2 pl-2 bg-blue-600 text-white font-bold">{String(product.inStock)}</h3>
                                <h4 className="SP-category rounded-lg p-1 pr-2 pl-2 bg-slate-200 font-bold">{product.category}</h4>
                        </div>
                        <h4>{product.description.slice(0,175)}...</h4>

                </NavLink>

        )

}

export default SingleProduct