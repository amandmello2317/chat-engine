import axios from 'axios'
import React, { useState } from 'react'


function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = async(e) => {
        e.preventDefault()

        const authObject = {'Project-ID': "cb0b1df5-fb31-48c3-a60b-7dd59c870b7c" , "User-Name": username, "User-Secret": password}

        try {
            await axios.get("https://api.chatengine.io/chats", {headers: authObject})
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        } catch (error) {
            setError('Oops, incorrect credentials')
        }
    }
    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className='title'>Chart Application</h1>
                <form onSubmit={handleSubmit}>

                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='user name' required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required />
                    <div align="center">
                        <button className="button" type='submit'>
                            <span>Start chating</span>
                        </button>

                    </div>
                    <h2 className='error'>{error}</h2>
                </form>
            </div>

        </div>
    )
}

export default LoginForm