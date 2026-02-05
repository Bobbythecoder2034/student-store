import SingleProduct from './SingleProduct'

const List = ({products, filters, isSearch, search}) => 
{

        

        if(isSearch)
        {

                console.log(search)
                

        }
        
        return(

                <div>
                        {/* {search} */}
                        <br />
                        <br />
                        {isSearch?products.filter((product)=> product.name.match(new RegExp(search, 'i')) !== null).map((product)=>{
                                
                                return ( <SingleProduct
                                            
                                        key={product.id} 
                                        name={product.name} 
                                        description={product.description} 
                                        {...product}

                                />)


                        }): typeof(filters)===String?products.filter((product)=>{product.category === filter}).map((product) => {

                                console.log(product)

                        }):products.map((product)=>{

                                return(
                                
                                        <SingleProduct 
                                        
                                                key={product.id} 
                                                name={product.name} 
                                                description={product.description} 
                                                {...product}
                                        
                                        />
                                        
                                )
                                
                        })}
                        
                </div>

        )

}

export default List