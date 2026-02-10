import '../styles/css/CustomOrder.css'
import {useState} from 'react'

const Order = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        description: '',
        color: 'red',
        material: 'Nylon',
        size: '',
        file: null
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleFileChange = (e) =>{
        setFormData(prev => ({...prev, file: e.target.files[0]}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const data = new FormData()
            data.append('name', formData.name)
            data.append('email', formData.email)
            data.append('phone', formData.phone)
            data.append('address', formData.address)
            data.append('description', formData.description)
            data.append('color', formData.color)
            data.append('material', formData.material)
            data.append('size', formData.size)
            data.append('file', formData.file)

        
        try{
            const response = await fetch('http://localhost:5000/api/public/custom-orders', {
                method: 'POST',
                body: data
            })
            
            if(response.ok){
                alert('Order submitted successfully!')
                setFormData({
                    name: '', email: '', phone: '', address: '',
                    description: '', color: 'red', material: 'Nylon',
                    size: '', file: null
                })
            }else{
                alert('Error submitting order')
            }
        }catch(error){
            console.error('Error:', error)
            alert('Failed to submit order')
        }
    }

    return (
        <div id="container" className='container'>
            <form onSubmit={handleSubmit}>
                <h1 id="header">Custom Order</h1>
                <label htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required/>
                <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
                <label htmlFor="number">Phone Number: XXX-XXX-XXXX</label>
                    <input type="tel" name="phone" placeholder="XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={formData.phone} onChange={handleChange} required/>
                <label htmlFor="address">Address:</label>
                    <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required/>
                <label htmlFor="description">Product Description:</label>
                    <textarea name="description" placeholder="Product Description" value={formData.description} onChange={handleChange} required/>
                
                <label htmlFor="color">Select Color:</label>
                <select name="color" value={formData.color} onChange={handleChange}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                </select>

                <label htmlFor="material">Select Material:</label>
                <select name="material" value={formData.material} onChange={handleChange}>
                    <option value="Nylon">Nylon</option>
                    <option value="PLA">PLA</option>
                    <option value="ABS">ABS</option>
                </select>

                <label htmlFor="size">Size:</label>
                    <input type="text" name="size" placeholder="Length, Width, Height (in centimeters)" value={formData.size} onChange={handleChange} required/>

                <label htmlFor="file">3D Model File:</label>
                    <input type="file" name="file" onChange={handleFileChange} required/>
                    
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Order
