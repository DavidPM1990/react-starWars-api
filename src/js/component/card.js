import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";


const CardStarWars = ({ person, planet, vehicle }) => {

    const { store, actions } = useContext(Context);

    console.log("store.people:", store.people);
    console.log("store.planets:", store.planets);
    console.log("store.vehicles:", store.vehicles);

    const handleAddToFavorites = () => {
        const item = person || planet || vehicle;
        actions.addToFavorites(item);

    };

    return (
        <Card style={{ width: '18rem' }} className='ms-4 mt-4 mb-4'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{person?.name || planet?.name || vehicle?.name || ""}</Card.Title>
                <Card.Text>
                    {person && (
                        <>
                            <p>Gender: {person.details.properties.gender}</p>
                            <p>Hair Color: {person.details.properties.hair_color}</p>
                            <p>Eye Color: {person.details.properties.eye_color}</p>
                        </>
                    )}
                    {planet && (

                        <>
                            <p>Population: {planet.details.properties.population}</p>
                            <p>Terrain: {planet.details.properties.terrain}</p>
                        </>
                    )}
                    {vehicle && (
                        <>
                            <p>Model: {vehicle.details.properties.model}</p>
                            <p>Cost In Credits: {vehicle.details.properties.cost_in_credits}</p>
                        </>
                    )}

                </Card.Text>
                <div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Button variant="primary">Learn more!</Button>
                        </div>
                        <div>
                            <Button variant="primary" onClick={handleAddToFavorites}>💓</Button>
                        </div>

                    </div>
                </div>

            </Card.Body>
        </Card >
    );
}

export default CardStarWars;