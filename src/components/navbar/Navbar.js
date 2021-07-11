import "./navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../pages/login/loginAction";
import { useDispatch } from "react-redux";

const Navbar = () => {
	const { cartItems } = useSelector((state) => state.cartItems);
	const { loginMessage } = useSelector((state) => state.login);
	const dispatch = useDispatch()

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light navbar-bg">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						MERN <span className="text-warning brand-style">SHOP</span>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav  ms-auto mb-2 mb-lg-0">
							<li className="nav-item ">
								<Link className="nav-link active" aria-current="page" to="/">
									Home
								</Link>
							</li>
							{loginMessage ? (
								<div className="dropdown existing-user">
									<button
										className="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton1"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										<i className="fas me-1 text-white fa-user"></i>{loginMessage.name}
									</button>
									<ul
										className="dropdown-menu"
										aria-labelledby="dropdownMenuButton1"
									>
										<li>
											<Link className="dropdown-item" to="/profile">
												Profile
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/orders">
												Orders
											</Link>
										</li>
										<li>
											<button className="dropdown-item btn btn-danger" onClick={() => dispatch(logoutUser())} >
												Logout
											</button>
										</li>
									</ul>
								</div>
							) : (
								<li className="nav-item ">
									<Link
										className="nav-link active"
										aria-current="page"
										to="/login"
									>
										Login
									</Link>
								</li>
							)}
							<li className="nav-item">
								<Link
									className="nav-link active"
									aria-current="page"
									to="/cart"
								>
									Cart
									<i className="fas ms-1 text-warning cart-style fa-1x fa-cart-plus"></i>
									<span className="cart-numbers text-warning mx-1">
										{cartItems.length}
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
