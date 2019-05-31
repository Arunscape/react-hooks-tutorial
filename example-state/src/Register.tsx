import React, { useState } from 'react'


const Login: React.FC = () => {

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [user, setUser] = useState()

    const handleChange = (event: any) => {

        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    }

    const handleSubmit = (event: any) => {
        event.preventDefault()
        setUser(form)

    }
    return (
        <div style={{ textAlign: 'center' }}>

            <h2>Register</h2>
            <form
                style={{
                    display: "grid",
                    alignItems: "center",
                    justifyItems: "center"
                }}
                onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="username"
                    onChange={handleChange}
                    value={form.username}
                    name="username"
                />
                <input type="email"
                    placeholder="email address"
                    onChange={handleChange}
                    value={form.email}
                    name="email"
                />
                <input type="password"
                    placeholder="password"
                    onChange={handleChange}
                    value={form.password}
                    name="password"
                />
                <button type="submit">submit</button>
            </form>
            {user ? JSON.stringify(user, null, 2) : ""}
        </div>
    )
}

export default Login