import SingleProduct from './SingleProduct'

const List = ({products, filters, isSearch, search}) => 
{

        if(isSearch)
        {

                const regex = new RegExp(search, 'i')
                const found  = products.filter((product)=>{console.log(product.name.match(regex));return product.name.match(regex)})
                console.log(search)

        }
        
        return(

                <div>

                        {isSearch?products.filter((product)=>
                        {

                                if(products.name === search)
                                {
                                                        
                                        <SingleProduct 

                                                key={product.id}
                                                {...product}
                                                
                                        />
                                                        
                                }

                        }): typeof(filters)==="Array"?products.filter((product)=>{
                                filters.foreach((filter)=>{
                                        if(product.category === filter)
                                        {

                                                <SingleProduct 

                                                        key={product.id}
                                                        {...product}
                                        
                                                />

                                        }       
                                })
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