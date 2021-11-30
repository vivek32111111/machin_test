import { useState } from "react";
import { useHistory } from "react-router";



const User = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [toggle, setToggle] = useState(false);
    const [ldata, setLdata] = useState()
    
    


    const handleChange = (e) => {
        setPassword(e.target.value);
        // passwordValue = e.target.value;
        setLdata(e.target.value);
        
     
    }

    const logout = () => {
        setToggle(!toggle);
        setPassword(ldata);
        

    }
    const login = () => {

        setToggle(!toggle);
        
        setPassword(' ');
        
    }

    return (
        <>
            <div className="container">
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

                <label for="password">{toggle ? 'new  Password' : ' password '}</label>
                <input
                    className="form-control"
                    type='text'
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                <button className="btn btn-primary mt-5 " onClick={login}>{toggle ? 'SavePassword' : ' change password '}</button>
                <button className="btn btn-primary mt-5  ml-5  pull-right" onClick={logout}>Log out</button>

            </div>
        </>
    )

}
export default User;