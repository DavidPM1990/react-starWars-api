import React from "react";
import { Link } from "react-router-dom";
import DropDownButton from "./dropDownButton";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<DropDownButton />
			</div>
		</nav>
	);
};
