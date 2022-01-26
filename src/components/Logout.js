import React from 'react';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = (props) => {

    const { push } = useHistory();
    const token = localStorage.getItem('token');

    const handleClick = () => {
        axiosWithAuth().post('/logout', { token })
            .then(res => {
                localStorage.removeItem('token');
                push('/');
            }).catch(err => console.error(err));
    }

    return(
        <div className="logout">
            <h1>LOGOUT</h1>
            <button className="black-box" onClick={handleClick}>LOGOUT</button>
        </div>
    )
}

export default Logout;