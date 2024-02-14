import React from "react";
import { Link } from "react-router-dom";
import DropDownButton from "./dropDownButton";
import starWarsLogo from "../../img/starwars.png";


export const Navbar = () => {

	const logoStyles = {
		width: "60px",
		height: "auto",
		marginLeft: "15px"
	};

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img src={starWarsLogo} style={logoStyles} alt="Star Wars Logo" className="mb-0 img-fluid rounded-circle" />
				</Link>
				<div className="ml-auto">
					<DropDownButton />
				</div>
			</div>

		</nav>
	);
};
