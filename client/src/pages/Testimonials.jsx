import {useEffect, useState} from 'react'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    useEffect(async () => {
        const result = await fetch('http://localhost:5000/api/public/testimonials')
        var revised = await result.json()
        setItems(revised)
        console.log(items)
    }, [])

    // const fetchTestimonials = async () => {
    //     try{
    //         const response = await fetch('/api/testimonials')
    //         const data = await response.json()
    //         setTestimonials(data)
    //         setLoading(false)
    //     }catch (err){
    //         console.error('Error fetching testimonials:', err)
    //         setLoading(false)
    //     }
    // }

    

    return (
        <div>
            <h2>Testimonials</h2>
            {items.map((testimonial) => (
                <div key={testimonial._id}>
                    <p><strong>{testimonial.name}</strong></p>
                    <p>Rating: {'⭐'.repeat(testimonial.rating)}</p>
                    <p>{testimonial.message}</p>
                </div>
            ))}
        </div>
    )
}

export default Testimonials