import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const { push } = useHistory();
    const [state, setState] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', state)
            .then(resp => {
                localStorage.setItem('token', resp.data.token);
                setState({
                    ...state,
                    username: '',
                    password: ''
                })
                push("/friendlist");
            }).catch(err => console.error(err));
    }

    return(
        <div className="Login">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>USERNAME</label>
                    <input className="black-box" type="text" value={state.username} name="username" onChange={handleChange}/>
                    <label>PASSWORD</label>
                    <input className="black-box" type="password" value={state.password} name="password" onChange={handleChange}/>
                    <button className="black-box" type="submit">Submit</button>
                </div>
            </form>
        </div>
        
    )
}

export default Login;