import "./login.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserAction } from "./loginAction";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isLoading, loginError } = useSelector(state => state.login);


    useEffect(() => {
        if (localStorage.getItem("user")) {
            window.location.href = "/"
        }
    }, [])

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        }
        if (!userData) {
            return alert("Please fill the credentials")
        }
        dispatch(loginUserAction(userData));
        history.push("/")
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 my-5 bg-light login-beautify">
                        <h1 className="text-center mb-3 heading-color" >Login <i className="fas fa-sign-in-alt"></i></h1>
                        {loginError && <div className="alert alert-danger text-center">{loginError}</div>}
                        <form onSubmit={loginUser}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Enter your email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary text-center ">Submit</button>
                            {isLoading && <i className="fas ms-2 fa-spinner fa-1x fa-spin"></i>}
                        </form>
                        <div className="mt-3">
                            <span >Are you a new user?
                                <Link className="ms-1" to="/register">
                                    Register
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
