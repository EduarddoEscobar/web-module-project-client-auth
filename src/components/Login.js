import React, { useState } from 'react';

const Login = (props) => {
    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value});
    }

    return(
        <>
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <label>USERNAME</label>
                    <input className="black-box" type="text" value={state.username} name="username" onChange={handleChange}/>
                    <label>PASSWORD</label>
                    <input className="black-box" type="text" value={state.password} name="password" onChange={handleChange}/>
                    <button className="black-box" type="submit">Submit</button>
                </div>
            </form>
        </>
        
    )
}

export default Login;