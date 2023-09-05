import './registerUser.css'
import { useState } from 'react'
import axios from 'axios'

export const RegisterUser = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        console.log(name, email, password)
        try {
            const register = await axios.post('http://localhost:4000/user/registration', {
                name,
                email,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(register)
        } catch (err) {
            console.log(err)
        }
    }

    return <div className="register-container">
        <input className="register-input" id="name" placeholder="Name" name="name"
            onChange={(e) => setName(e.target.value)} />
        <input type="email" className="register-input" id="email" placeholder="Email" name="email"
            onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="register-input" id="password" name="password" placeholder="password"
            onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' className='btn btn-primary w-25' onClick={handleSubmit}>Submit</button>
    </div>
}