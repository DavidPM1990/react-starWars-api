import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardStarWars from "../component/card";
import { Context } from "../store/appContext";


export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPeople();
		actions.getVehicles();
		actions.getPlanets();
	}, []);

	return (
		<div className="container">

			<div className="container">
				<h1 className="h1-color">Characters</h1>
			</div>

			<div className="scrollable-div">
				{store.people.map((person, index) => (
					<CardStarWars key={index} person={person}
					/>
				))}
			</div>

			<div className="container mt-4">
				<h1 className="h1-color">Planets</h1>
			</div>

			<div className="scrollable-div">
				{store.planets.map((planet, index) => (
					<CardStarWars key={index} planet={planet} />
				))}

			</div>

			<div className="container mt-4">
				<h1 className="h1-color">Vehicles</h1>
			</div>

			<div className="scrollable-div">
				{store.vehicles.map((vehicle, index) => (
					<CardStarWars
						key={index}
						vehicle={vehicle}
					/>
				))}

			</div>

		</div>
	)
}