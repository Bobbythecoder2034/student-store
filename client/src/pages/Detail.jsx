import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Detail = () =>{
    const {_id} = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{

        const fetchProduct = async () => {
            try{
                const response = await fetch(`/api/products/?id=${_id}`)
                const data = await response.json()
                setProduct(data)
            }catch(err){
                console.error('Error fetching product:', err)
            }finally{
                setLoading(false)
            }
        }

        fetchProduct()
        // Fetch product by slug
    }, [])//removed the slug from []

    const fetchProduct = async (id) =>{
        
    }

    if (loading) return <div>Loading...</div>
    if (!product) return <div>Product not found</div>

    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product.image} alt={product.name}/>
            </div>
            <div className="product-info">
                <h1>{product.name}</h1>
                <p className="price">${product.price}</p>
                <p className="category">Category: {product.category}</p>
                <div className="tags">
                    {product.tags ?.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <div className="stock-status">
                    {product.inStock ? <span className="in-stock">In Stock</span> : <span className="out-of-stock">Out of Stock</span>}
                </div>
                <button className="request-btn">Request this item</button>
            </div>
        </div>
    )
}

export default Detail