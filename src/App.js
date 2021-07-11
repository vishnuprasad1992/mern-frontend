import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/pages/products/Products';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductDetails from './components/pages/productDetails/ProductDetails';
import Cart from './components/pages/cart/Cart';
import Register from './components/pages/registeration/Register';
import Login from './components/pages/login/Login';
import PageNotFound from "./components/pages/pageNotFound/PageNotFound";
import Orders from './components/pages/orders/Orders';
import Profile from './components/pages/profile/Profile';
import OrderInfo from './components/pages/orderInfo/OrderInfo';
import Admin from './components/pages/admin/Admin';


function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Products />
					</Route>
					<Route path='/products/:id'>
						<ProductDetails />
					</Route>
					<Route path='/cart'>
						<Cart />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/register'>
						<Register />
					</Route>
					<Route path='/orders'>
						<Orders />
					</Route>
					<Route path='/order_info/:id'>
						<OrderInfo />
					</Route>
					<Route path='/profile'>
						<Profile />
					</Route>
					{localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).loginMessage.isAdmin === "true" ?
						<Route path='/admin_login'>
							<Admin />
						</Route> :
						<Route path='/login'>
							<Login />
						</Route>
					}
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
