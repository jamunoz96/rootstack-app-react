import React from "react";
import { useSelector } from "react-redux";

const NavbarAuth = () => {
    const { user, isAuthed } = useSelector((state: any) => state.auth);
    return <>
    {user ? 
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">App</a>
                <img width="150" src="https://pbs.twimg.com/media/DdL7vaFWkAAmSRy?format=png&name=large" />
                <div className="">
                    <b>{user.name}</b>    
                </div>
            </div>
        </nav>
        : "No auth"
    }
    </>;
}

export default NavbarAuth;