import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import CardStarWars from "../component/card";
import { Context } from "../store/appContext";
import PlanetCard from "../component/cardPlanet";
import VehicleCard from "../component/cardVehicle";

export const Home = () => {

	const { store, actions } = useContext(Context);


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
					<PlanetCard key={index} planet={planet} />
				))}

			</div>

			<div className="container mt-4">
				<h1 className="h1-color">Vehicles</h1>
			</div>

			<div className="scrollable-div">
				{store.vehicles.map((vehicle, index) => (
					<VehicleCard
						key={index}
						vehicle={vehicle}
					/>
				))}

			</div>

		</div>
	)
}