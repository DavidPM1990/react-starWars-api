import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import PersonCard from "../component/PersonCard";
import PlanetCard from "../component/planetCard";
import VehicleCard from "../component/vehicleCard";
import { Context } from "../store/appContext";


export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
		actions.getVehicles();
	}, []);


	return (
		<div className="container">

			<div className="container">
				<h1>Characters</h1>
			</div>

			<div className="scrollable-div">
				{store.people.map((person, index) => (
					<PersonCard key={index} person={person} />
				))}
			</div>

			<div className="container mt-4">
				<h1>Planets</h1>
			</div>

			<div className="scrollable-div">
				{store.planets.map((planet, index) => (
					<PlanetCard key={index} planet={planet} />
				))}

			</div>

			<div className="container mt-4">
				<h1>Vehicles</h1>
			</div>

			<div className="scrollable-div">
				{store.vehicles.map((vehicle, index) => (
					<VehicleCard key={index} vehicle={vehicle} />
				))}

			</div>

		</div>
	)
}