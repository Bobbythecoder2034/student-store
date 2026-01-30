import SingleProducts from './SingleProduct'

const List = ({products, filters, isSearch, search}) => 
{

        return(

                <div>
                
                        {isSearch?products.find((product)=>
                                {

                                        if(products.name === search)
                                        {
                                        
                                                <SingleProduct 

                                                        key={product.id}         
                                                        filterProducts={filters} 
                                                        {...product}
                                
                                                />
                                        
                                        }

                                })filters.length>0?products.filter((product)=>{

                                        filters.foreach((filter)=>{
                                                if(product.category === filter)
                                                {

                                                        <SingleProduct 

                                                                key={product.id}         
                                                                filterProducts={filters} 
                                                                {...product}
                                
                                                        />

                                                }       
                                        })

                                }):products.map((product)=>{
                        
                                        return(
                        
                                                <SingleProduct 

                                                        key={product.id}         
                                                        filterProducts={filters} 
                                                        {...product}
                                
                                                />
                                
                                        )
                        
                                })
                        }
                
                <div/>

        )

}

export default List