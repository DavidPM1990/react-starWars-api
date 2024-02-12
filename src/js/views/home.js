import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardStarWars from "../component/card";
import { Context } from "../store/appContext";


export const Home = () => {


	return (
		<div className="container">

			<div className="container">
				<h1>Characters</h1>
			</div>

			<div className="scrollable-div">

				<CardStarWars />


			</div>

			<div className="container mt-4">
				<h1>Planets</h1>
			</div>

			<div className="scrollable-div">
				<CardStarWars />

			</div>

			<div className="container mt-4">
				<h1>Vehicles</h1>
			</div>

			<div className="scrollable-div">
				<CardStarWars />

			</div>

		</div>
	)
}