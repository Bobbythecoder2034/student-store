import {NavLink} from "react-router-dom";


const SingleProduct = ({name, slug, description, price, category, inStock, featured}) =>
{
       
        return(

                <NavLink className="product flex flex-col items-center border-3 rounded-2xl p-3 m-2 mb-3 shadow-lg text-center" id={slug} to={'/detail'} >
                        <h1 className="SP-name">{name}</h1> 
                        <div className="flex flex-row mt-3 mb-3 gap-6">
                                <h2 className="SP-price rounded-lg p-1 pr-2 pl-2 bg-blue-600 text-white font-bold">{price}</h2> 
                                <h3 className="SP-stock rounded-lg p-1 pr-2 pl-2 bg-blue-600 text-white font-bold">{String(inStock)}</h3>
                                <h4 className="SP-category rounded-lg p-1 pr-2 pl-2 bg-slate-200 font-bold">{category}</h4>
                        </div>
                        <h4>{description.slice(0,175)}...</h4>

                </NavLink>

        )

}

export default SingleProduct