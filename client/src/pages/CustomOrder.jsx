import {useState} from 'react'

const Order = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        description: '',
        color: 'red',
        material: 'PLA',
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

    const handleSubmit = async (e) =>{
        e.preventDefault()
        // TODO: Send formData to backend
        console.log(formData)
    }

    return (
        <div id="container">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required/>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
                <input type="tel" name="phone" placeholder="XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={formData.phone} onChange={handleChange} required/>
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required/>
                <textarea name="description" placeholder="Product Description" value={formData.description} onChange={handleChange} required/>
                
                <select name="color" value={formData.color} onChange={handleChange}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                </select>

                <select name="material" value={formData.material} onChange={handleChange}>
                    <option value="Nylon">Nylon</option>
                    <option value="PLA">PLA</option>
                    <option value="ABS">ABS</option>
                </select>

                <input type="text" name="size" placeholder="Size" value={formData.size} onChange={handleChange} required/>
                <input type="file" onChange={handleFileChange} required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Order