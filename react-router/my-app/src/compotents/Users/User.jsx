import React from "react";
import { Link, useRouteMatch} from "react-router-dom";
import "./User.css";

const User = ({ user }) => {

    return (
        <li className="User">
            <h3 className="userItem name"><span> name:</span>{user.name}</h3>
            <p className="userItem username"><span>Username:</span> {user.username}</p>
            <p className="userItem address"><span>city:</span> {user.address.city}</p>
            <p className="userItem company"><span>company name:</span> {user.company.name}</p>
            <Link className="button" to={`/users/${user.id}/albums`}  >Albums</Link>
        </li>
    )
}
export default User;