import React from "react";
import "./User.css";

const User = ({ user, deleteUser }) => {
    return (
        <li className="User">
            <h3 className="userItem name"><span> name:</span>{user.name}</h3>
            <p className="userItem username"><span>username:</span> {user.username}</p>
            <p className="userItem address"><span>phone:</span> {user.phone}</p>
            <p className="userItem company"><span>email:</span> {user.email}</p>
            <button className='button' onClick={() =>deleteUser(user.id)}>Delete</button>
        </li>
    )
}
export default User;