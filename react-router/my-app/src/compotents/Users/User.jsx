import React from "react";
import "./User.css";

const User = ({id, name, userName, email, address, phone, website, company,onClickAlbum}) => {
    

    return (
        <li className="User">
            <h3 className="userItem name"><span> name:</span>{name}</h3>
            {/* <p className="userItem id"><span>id:</span> {id}</p> */}
            <p className="userItem username"><span>Username:</span> {userName}</p>
            <p className="userItem email"><span>email:</span> {email}</p>
            <p className="userItem address"><span>city:</span> {address.city}</p>
            <p className="userItem phone"><span>phone:</span> {phone}</p>
            <p className="userItem website"><span>website:</span> {website}</p>
            <p className="userItem company"><span>company name:</span> {company.name}</p>
            <button onClick={onClickAlbum}>Album</button>
        </li>
    )
}
export default User;