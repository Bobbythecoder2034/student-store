import React from 'react'

const Order = () => {
    return (
        <div id="container">
            <form action=""> 
                <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="Name" required/>

                <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Email" required/>

                <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" placeholder="XXX-XXX-XXXX" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>

                <label htmlFor="address">Address:</label>
                    <input type="text" placeholder="address" required/>

                <label htmlFor="description">Product Description:</label>
                    <input type="text" placeholder="description" required/>

                <label htmlFor="color">Choose your color:</label>
                    <select name="color" id="color">
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                    </select>

                <label htmlFor="material">Choose your material:</label>
                    <select name="material" id="material">
                        <option value="nylon">Nylon</option>
                        <option value="PLA">PLA</option>
                        <option value="ABS">ABS</option>
                    </select>

                <label htmlFor="size">Choose your size:</label>
                    <select name="size" id="size">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                
                <label htmlFor="file">Upload file: (STL/ZIP/etc)</label>
                    <input type="file"/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Order