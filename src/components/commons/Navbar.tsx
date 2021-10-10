import React from "react";
import { useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";
import { globalDispatch } from "../../redux/utils/globalDispatch";

const NavbarAuth = () => {
    const { user } = useSelector((state: any) => state.auth);
    const handleClose = () => globalDispatch(logoutAction());
    return <>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <img  width="150" alt="" src="https://pbs.twimg.com/media/DdL7vaFWkAAmSRy?format=png&name=large" />
                <div className="d-flex">
                    <h4 className="pt-2">{user.name}</h4>
                    <button type="button" onClick={handleClose} className="btn btn-danger ms-5">Close</button>
                </div>
            </div>
        </nav>
    </>;
}

export default NavbarAuth;