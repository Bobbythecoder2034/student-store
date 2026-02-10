const SingleProduct = ({name, slug, description, price, category, inStock, featured}) =>
{
       
        return(

                <div className="product">

                        <h4>{name}</h4>
                        <h4>{description}</h4>

                </div>

        )

}

export default SingleProduct