import { useState } from 'react'

export const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre
                </label>
                <input
                    type="text"
                    className="Input"
                    value={name}
                    onChange={({ target }) => setName(target.value)} />

                <label className="Label">
                    Teléfono
                </label>
                <input
                    type="phone"
                    className="Input"
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)} />

                <label className="Label">
                    Correo electrónico
                </label>
                <input
                    type="email"
                    className="Input"
                    value={email}
                    onChange={({ target }) => setEmail(target.value)} />
            </form>
        </div>
    )
}
