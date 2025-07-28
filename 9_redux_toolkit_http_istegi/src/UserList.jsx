import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllUsers } from '../redux/userSlice';
import User from '../redux/User.jsx';
function UserList() {

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.user);
    console.log(users)

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);
    return (
        <div>{
            users && users.map((user) => (
                <User key={user.id} user={user} />
            ))}

        </div>
    )
}

export default UserList