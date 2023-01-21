import React from "react";
import { Link, Route} from "react-router-dom";
import "./User.css";
import Albums from "../Albums/Albums";

const User = ({id, name, userName, email, address, phone, website, company,onClickAlbum, isOpen}) => {

    return (
        <>
           
            <li className="User">
                <h3 className="userItem name"><span> name:</span>{name}</h3>
                {/* <p className="userItem id"><span>id:</span> {id}</p> */}
                <p className="userItem username"><span>Username:</span> {userName}</p>
                {/* <p className="userItem email"><span>email:</span> {email}</p> */}
                <p className="userItem address"><span>city:</span> {address.city}</p>
                {/* <p className="userItem phone"><span>phone:</span> {phone}</p> */}
                {/* <p className="userItem website"><span>website:</span> {website}</p> */}
                <p className="userItem company"><span>company name:</span> {company.name}</p>
                {/* <button onClick={onClickAlbum}>Album</button> */}
                <Link className="button" to={`/users/${id}/albums`} onClick={onClickAlbum}>Album</Link>
              
            </li>
              {isOpen ?
                    (<Route path={`/users/${id}/albums`}>
                    <Albums index={id} />
                    </Route>) :
                    null
                }
        </>
       
    )
}
export default User;