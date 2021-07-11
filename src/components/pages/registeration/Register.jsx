import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../registeration/registerAction";
import { useSelector } from "react-redux";


const Register = () => {
    const dispatch = useDispatch();
    const { isLoading, error, successMessage } = useSelector(state => state.register);
    const { message } = successMessage;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCpassword] = useState("");


    const createNewUser = async (e) => {
        e.preventDefault();
        try {
            if (password !== cPassword) {
                return alert("password no match")
            }
            const newUser = {
                name,
                email,
                mobile,
                address,
                password,
                cPassword
            }
            await dispatch(registerNewUser(newUser));

            setAddress('');
            setCpassword('');
            setEmail('');
            setMobile('');
            setName('');
            setPassword('');

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="register">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 bg-light my-3 beautify">
                        <h1 className="text-center mb-3 heading-color" >Register <i className="fas fa-user-plus"></i></h1>
                        {error && <div className="alert alert-danger text-center">{error}</div>}
                        {message && <div className="alert alert-success text-center">{message}</div>}
                        <form onSubmit={createNewUser}>
                            <div className="mb-3 ">
                                <label htmlFor="name" className="form-label">Enter your name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
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
                                <label htmlFor="mobile" className="form-label">Enter your mobile</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="mobile"
                                    placeholder="mobile number"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Enter your Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
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
                            <div className="mb-3">
                                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="cpassword"
                                    placeholder="confirm password"
                                    value={cPassword}
                                    onChange={(e) => setCpassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary text-center ">Submit</button>
                            {isLoading && <i className="fas ms-2 fa-spinner fa-1x fa-spin"></i>}
                        </form>
                        <div className="mt-3">
                            <span>Allready having an account?
                                <Link className="ms-1" to="/login">
                                    Login
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
