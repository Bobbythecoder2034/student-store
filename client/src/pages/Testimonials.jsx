import {useEffect, useState} from 'react'
import '../styles/css/testimonials.css'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    async function stuff(params) {
        const result = await fetch('http://localhost:5000/api/public/testimonials')
        var revised = await result.json()
        setItems(revised)
        console.log(items) 
    }
    useEffect( () => {
        stuff()
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
        <>
        <div style={{alignItems: 'center', justifyContent: 'center'}} className='layout'>
            <div className="testimonials-layout">
               <div className="content-header" style={{height: '10%'}}>
                <h1 className='testimonials-header '>Testimonials</h1>
                <sub>Submissions are reviewed before appearing publicly</sub>
            </div> 

            <div className="testimonial-boxes">
                <div className='testimonials'>
                    <h1 style={{alignSelf: 'start'}}>Approved</h1>
                    <div className='testimonial-card'></div>
                    <div className='testimonial-card'></div>
                    <div className='testimonial-card'></div>
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
        </>
        
    )
}

export default Testimonials