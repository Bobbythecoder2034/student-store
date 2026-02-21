import {useState} from 'react'
import Navbar from "../components/Navbar";

const SignUp = () =>{

    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        password: "",
        confirmPassword: ""
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleChange = (e) =>{
        setForm((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError("")
        setSuccess("")

        if(!form.name || !form.email || !form.address || !form.password){
            setError("Please fill in all required fields")
            return
        }

        if(form.password.length < 8){
            setError("Password must be at least 8 characters")
            return
        }

        if(form.password !== form.confirmPassword){
            setError("Passwords do not match")
            return
        }

        try{
            setLoading(true)

            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: form.name.trim(),
                    email: form.email.toLowerCase().trim(),
                    address: form.address.toLowerCase().trim(),
                    password: form.password
                })
            })

            const data = await res.json()

            if(!res.ok) throw new Error(data?.message || "Signup failed")

            setSuccess("Signup successful! You can now log in.")
            setForm({name: "", email: "", address: "", password: "", confirmPassword: ""})
        }catch(err){
            console.error(err)
            alert(err.message || "Something went wrong")
        }finally{
            setLoading(false)
        }
    }

    return (
        <div id="container" className="container">
            <Navbar/>
            <form className='form' onSubmit={handleSubmit}>
                <h1 id="header">Login</h1>
                <label htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} disabled={loading} required/>
                <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} disabled={loading} required/>
                <label htmlFor="address">Address:</label>
                    <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} disabled={loading} required/>
                <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} disabled={loading} required/>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} disabled={loading} required/>

                <button type="submit" disabled={loading}>
                    {loading ? "Signing Up...": "Sign Up"}
                </button>

                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
            </form>
        </div>
    )
}

export default SignUp