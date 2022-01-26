import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const FriendList = (props) => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(resp => {
                setFriends(resp.data);
            }).catch(err => console.error(err));
    }, []);

    return(
        <div className="friendlist">
            <div className="friendlist-content">
                <h1>FRIENDS LIST</h1>
                {friends && friends.map(friend => <div className="friend" key={friend.id}>-{friend.name}-{friend.email}</div>)}
            </div>
        </div>
    )
}

export default FriendList;