import React, {useContext} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";


export const Navbar = () => {

	const store = useContext(Context)

	const favorites = store.store.favorites

  	console.log(store)

	return (
		<nav className="navbar navbar-light bg-light mb-3 px-5">
			<Link to="/">
			<img src={logo} />
				<span className="navbar-brand"></span>
			</Link>
				<div className="btn-group mx-5 mt-2 mb-2">
				<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Favorites</button>
				<ul className="dropdown-menu">
					{
						favorites.map((item, index) => <li key={index}><a className="dropdown-item" href="#"><Link>{item.name}</Link></a></li>)
					}
				</ul>
			</div>
		</nav>
	);
};
