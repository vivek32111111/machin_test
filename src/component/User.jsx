import { useState } from "react";
import { useHistory } from "react-router";



const User = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const history = useHistory();
    const login = () => {

        
        if (username === 'admin' & password === 'admin') {
             history.push('/home')
        } else {
            alert('wrong credentials')

        }
    }

    return (
        <>
            <form className="container">
                <label for="username">UserName:</label>
                <input
                    className="form-control"
                    type='text'
                    id="username"
                    name="username"
                    value={username}
                    onChange={(evt) => setUsername(evt.target.value)}
                />
                <br />

                <label for="password">Password:</label>
                <input
                    className="form-control"
                    type='text'
                    id="password"
                    name="password"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                />
                <button className="btn btn-primary mt-5 " type="submit" onClick={login}>Login</button>

            </form>
        </>
    )

}
export default User;