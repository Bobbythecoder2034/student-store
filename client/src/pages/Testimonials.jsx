import {useEffect, useState} from 'react'
import '../styles/css/testimonials.css'

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
        <div style={{alignItems: 'center', justifyContent: 'center'}} className='layout'>
            <div className="testimonials-layout">
               <div className="content-header">
                <h1 className='testimonials-header '>Testimonials</h1>
                <sub>Submissions are reviewed before appearing publicly</sub>
            </div> 

            <div className="testimonial-boxes">
                <div className='testimonials'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <form method='post' action="http://localhost:5000/api/public/testimonials" className='testimonials-form'>
                    
                </form>
            </div>
            </div>
            
            {/* {testimonials.map((testimonial) => (
                <div key={testimonial._id}>
                    <p><strong>{testimonial.name}</strong></p>
                    <p>Rating: {'⭐'.repeat(testimonial.rating)}</p>
                    <p>{testimonial.message}</p>
                </div>
            ))} */}
        </div>
    )
}

export default Testimonials