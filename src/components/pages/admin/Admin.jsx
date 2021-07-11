import './admin.css';
import { Link,Switch,Route } from "react-router-dom";
import Users from './users/Users';
import Products from './products/Products';
import AddNewProduct from './addNewProduct/AddNewProduct';
import Orders from './orders/Orders';
import UpdateProduct from './updateProduct/UpdateProduct';


const Admin = () => {
    return (
        <div className="admin">
            <nav className="navbar  mt-5 navbar-expand-lg navbar-light bg-warning">
                <div className="container">
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
                        <ul className=" navbar-nav fw-bold ">
                            <li className="nav-item px-5 ">
                                <Link className="nav-link  text-dark" to="/admin_login/users">Users</Link>
                            </li>
                            <li className="nav-item  px-5">
                                <Link className="nav-link  text-dark" to="/admin_login/products">Products</Link>
                            </li>
                            <li className="nav-item px-5">
                                <Link className="nav-link  text-dark" to="/admin_login/add_new_product">Add New Product</Link>
                            </li>
                            <li className="nav-item px-5">
                                <Link className="nav-link  text-dark" to="/admin_login/orders">Orders</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="display-6 d-flex align-items-center m-5 justify-content-center">
                Please select the categories to view details
            </div>
            <Switch>
                <Route path="/admin_login/users">
                    <Users />
                </Route>
                <Route exact path="/admin_login/products">
                    <Products />
                </Route>
                <Route path="/admin_login/add_new_product">
                    <AddNewProduct />
                </Route>
                <Route  path="/admin_login/orders">
                    <Orders />
                </Route>
                <Route path="/admin_login/products/:id">
                    <UpdateProduct />
                </Route>
            </Switch>

        </div>
    )
}

export default Admin
