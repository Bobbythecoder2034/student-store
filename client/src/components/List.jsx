import SingleProduct from './SingleProduct'

const List = ({products, filters, isSearch, search}) => 
{

        const finding = () => {
                products.find((product)=>
                {

                        if(products.name === search)
                        {
                                                
                                <SingleProduct 

                                        key={product.id}         
                                        filterProducts={filters} 
                                        {...product}
                                        
                                />
                                                
                        }

                })

        }

        const filtering = () =>{

                products.filter((product)=>{

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

                })

        }

        const mapping = () => {

                products.map((product)=>{
                        
                        return(
                        
                                <SingleProduct 

                                        key={product.id}         

                                        filterProducts={filters} 
                                        {...product}
                                
                                />
                                
                        )
                        
                })
        }

        return(

                <div>

                        {isSearch?finding: typeof(filtering)=="Array"?filtering:mapping()}

                </div>

        )

}

export default List