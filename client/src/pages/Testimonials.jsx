import {useEffect, useState} from 'react'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchTestimonials()
    }, [])

    const fetchTestimonials = async () => {
        try{
            const response = await fetch('/api/testimonials')
            const data = await response.json()
            setTestimonials(data)
            setLoading(false)
        }catch (err){
            console.error('Error fetching testimonials:', err)
            setLoading(false)
        }
    }

    if(loading) return <div>Loading...</div>

    return (
        <div>
            <h2>Testimonials</h2>
            {testimonials.map((testimonial) => (
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