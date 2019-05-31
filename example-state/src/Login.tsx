import React, { useState } from 'react'


const Login: React.FC = () => {

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const [user, setUser] = useState({})

    const handleSubmit = (event: any) => {
        event.preventDefault()

        const userData = {
            username,
            pass,

        }

        setUser(userData)
        setUsername("")
        setPass("")
    }

    return (
        <div style={{ textAlign: 'center' }}>

            <h2>Login</h2>
            <form
                style={{
                    display: "grid",
                    alignItems: "center",
                    justifyItems: "center"
                }}
                onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="username"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                />
                <input type="password"
                    placeholder="password"
                    onChange={(event) => setPass(event.target.value)}
                    value={pass}
                />
                <button type="submit">submit</button>
            </form>
            {JSON.stringify(user, null, 2)}
        </div>
    )
}

export default Login