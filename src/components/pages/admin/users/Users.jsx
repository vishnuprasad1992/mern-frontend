import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from './userAction';

const Users = () => {

    const { deleteError, message,isLoading, error, users } = useSelector(state => state.Users)

    const dispatch = useDispatch();

    useEffect(() => {
        const getUsers = async () => {
            await dispatch(getAllUsers())
        }
        getUsers()
        if(message === "user deleted successfull"){
            getUsers()
        }
    }, [dispatch,message])
return (
    <div className="container">
        <div className="row  justify-content-center">
            <h1 className="text-center mt-5"> Existing Users</h1>
            <div className="col-md-12 col-sm-12 col-lg-10">
                {isLoading && <div className="text-center"><i className="fas ms-2 fa-spinner fa-2x fa-spin"></i></div>}
                {message && <div className="alert alert-success text-center">{message}</div>}
                {deleteError && <div className="alert alert-danger text-center">{deleteError}</div>}
                {error && <div className="alert alert-danger text-center">{error}</div>}
                <table className="table my-3 table-bordered table-hover table-striped">
                    <thead >
                        <tr className="text-center bg-warning">
                            <th scope="col"> User Id </th>
                            <th  scope="col">Name</th>
                            <th  scope="col">Email</th>
                            <th  scope="col">Address</th>
                            <th  scope="col">Mobile</th>
                            <th  scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users ? users.map((user) =>
                        (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>{user.mobile}</td>
                                <td className=" text-center"><i onClick={() => dispatch(deleteUser(user._id))} className="fas text-danger pointer fa-1x fa-trash-alt"></i></td>
                            </tr>)
                        ) :
                            <tr>
                                <td colSpan="5">No users to show</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>

)
}

export default Users
