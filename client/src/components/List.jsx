import SingleProduct from './SingleProduct'

const List = ({products, filters, isSearch, search}) => 
{
        let filteredProducts = products;

        if(isSearch)
        {
                const regex = new RegExp(search, 'i')
                filteredProducts = products.filter((product)=> product.name.match(regex))
                console.log(search)
        }
        else if(typeof(filters) === "object" && Array.isArray(filters))
        {
                filteredProducts = products.filter((product)=>
                        filters.includes(product.category)
                )
        }
        
        return(
                <div>
                        {filteredProducts.map((product)=>
                                <SingleProduct 
                                        key={product.id}
                                        {...product}
                                />
                        )}
                </div>
        )

}

export default List