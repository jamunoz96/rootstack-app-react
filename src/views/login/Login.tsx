import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { getUserAction, loginAction } from "../../redux/auth/authActions";
import AuthStore from "../../redux/types/AuthStore.type";
import { globalDispatch } from "../../redux/utils/globalDispatch";

const Login = () => {
    const {token, isLoading, errorMessage} : AuthStore = useSelector((state: any) => state.auth);

    useEffect(() => {
        if(token) globalDispatch(getUserAction());
    }, [token]);

    const handleValidation = () => {
        return Yup.object().shape({
            username: Yup.string().required("This field is required!"),
            password: Yup.string().required("This field is required!"),
        });
    }

    const handleLogin = (formValue: { username: string; password: string }) => {
        const { username, password } = formValue;
        globalDispatch(loginAction(username, password));
    }

    const initialValues = {
        username: "tvandervort@example.net",
        password: "password"
    };

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <img src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card" />

                <Formik initialValues={initialValues}
                    validationSchema={handleValidation}
                    onSubmit={handleLogin}>

                    <Form>
                        <div className="form-group">
                            <label>Username</label>
                            <Field name="username" type="text" className="form-control" />
                            <ErrorMessage
                                name="username"
                                component="div"
                                className="badge bg-warning text-dark" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <Field name="password" type="password" className="form-control" />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="badge bg-warning text-dark" />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary" disabled={isLoading}>
                                {isLoading && (
                                    <span className="me-2 spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>
                        </div>

                        {errorMessage && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            </div>
                        )}
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Login;