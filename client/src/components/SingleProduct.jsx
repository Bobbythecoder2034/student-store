const SingleProduct = ({name, slug, description, price, category, inStock, featured}) =>
{
       
        return(

                <div className="product" id={slug}>

                        
                        <h1>{name}</h1> 
                        <h2>{price}</h2> 
                        <h3>{inStock}</h3>
                        <h4>{category}</h4>
                        <p>{description}</p>


                </div>

        )

}

export default SingleProduct