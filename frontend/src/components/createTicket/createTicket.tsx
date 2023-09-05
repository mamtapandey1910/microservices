import axios from 'axios'
import './createTicket.css'
import { useState } from "react"

export const CreateTicket = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e: any) => {
        try {
            const ticket = await axios.post('http://localhost:4002/create/ticket', {
                title,
                description
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(ticket)
        } catch (err) {
            console.log(err)
        }
    }

    return <div className='ticket-container'>
        <input name="title" className="ticket-input " placeholder='Title'
            onChange={e => setTitle(e.target.value)} />
        <textarea name="description" id="" cols={5} rows={10} placeholder='Description' className='ticket-textArea'
            onChange={e => setDescription(e.target.value)} />
        <button type='submit' className='btn btn-primary w-50' onClick={handleSubmit}>Create Ticket</button>
    </div>
}