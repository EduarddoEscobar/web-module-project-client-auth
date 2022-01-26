import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const FriendForm = (props) => {
    const [state, setState] = useState({
        name: '',
        email: ''
    });

    const { push } = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosWithAuth().post('/friends', {...state})
            .then(res => {
                push('/friends');
            }).catch(err => console.error(err));
    }
    
    return(
        <div className="addfriend">
            <h1>ADD FRIEND</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>FRIEND NAME</label>
                    <input className="black-box" type="text" value={state.name} name="name" onChange={handleChange}/>
                    <label>FRIEND EMAIL</label>
                    <input className="black-box" type="email" value={state.email} name="email" onChange={handleChange}/>
                    <button className="black-box" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FriendForm;