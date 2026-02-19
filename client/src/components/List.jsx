import SingleProduct from './SingleProduct'

const List = ({products, filters, search}) => 
{

        
        return(

                <div className='product-column'>
                     
                        {products.filter((product)=> product.name.match(new RegExp(search, 'i')) !== null && product.category.match(new RegExp(filters, 'i')) !== null).map((product)=>{
                                
                                return ( <SingleProduct
                                            
                                        key={product.id} 
                                        product = {product}

                                />)

                        })}
                        
                </div>

        )

}

export default List