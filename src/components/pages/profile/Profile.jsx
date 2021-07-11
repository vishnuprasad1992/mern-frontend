import "./update.css";
// import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateExistingUser } from "./profileActions";
import { useSelector } from "react-redux";

const Profile = () => {
    const dispatch = useDispatch();
    const {loginMessage } = useSelector(state => state.login);
    const {isLoading,error,updateMessage } = useSelector(state => state.updateUser);


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCpassword] = useState("");

    useEffect(() => {
       if(loginMessage){
           setName(loginMessage.name)
           setEmail(loginMessage.email)
           setMobile(loginMessage.mobile)
           setAddress(loginMessage.address)
       }
    }, [loginMessage])



    const updateUser = async (e) => {
        e.preventDefault();
        try {
            if (password !== cPassword) {
                return alert("password no match")
            }
            const userToBeUpdated = {
                name,
                email,
                mobile,
                address,
                password,
                cPassword
            }
            console.log(userToBeUpdated)
            await dispatch(updateExistingUser(userToBeUpdated));

            setAddress('');
            setCpassword('');
            setEmail('');
            setMobile('');
            setName('');
            setPassword('');
            alert("Profile updated successfully!!!. please re-login again,to take effect. Thank You")
            localStorage.removeItem("user")
            window.location.href="/login";
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="update">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 bg-light my-3 beautify">
                        <h1 className="text-center mb-3 heading-color" >update <i className="fas fa-user-plus"></i></h1>
                        {error && <div className="alert alert-danger text-center">{error}</div>}
                        {updateMessage && <div className="alert alert-danger text-center">{updateMessage}</div>}

                        <form onSubmit={updateUser}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
