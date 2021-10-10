import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthStore from "../../redux/types/AuthStore";

const Authenticated = ({ component: Component, ...rest } : any) => {
    const {token, user} : AuthStore = useSelector((state: any) => state.auth);
    return (
        <Route {...rest}
            render={props =>
                token && user ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
}

export default Authenticated;