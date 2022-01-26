import React from 'react';
import { Link } from 'react-router-dom';

const FriendHeader = (props) => {
    return(
        <header>
            <div className="left">
                <h2>FRIENDS DATABASE</h2>
            </div>
            <div className="right">
                <Link className="black-box" to="/login">LOGIN</Link>
                <Link className="black-box" to="/friends">FRIENDLIST</Link>
                <Link className="black-box" to="/addfriend">ADDFRIEND</Link>
            </div>
        </header>
    )
}

export default FriendHeader;