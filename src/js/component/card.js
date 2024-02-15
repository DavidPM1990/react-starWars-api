import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PersonCard = ({ person }) => {
    const { actions } = useContext(Context);

    const [personDetails, setPersonDetails] = useState({});

    const handleAddToFavorites = () => {
        const item = person;
        actions.addToFavorites(item);
    };

    useEffect(() => {
        const fetchPersonDetails = async () => {
            try {
                const response = await fetch(person.url);
                const data = await response.json();
                setPersonDetails(data.result);

            } catch (error) {
                console.error("Error fetching person details:", error);
            }
        };

        fetchPersonDetails();
    }, [person.url]);


    // console.log("-------->", person)

    // console.log("Todas las caracteristicas de la persona ---_>", personDetails)

    return (
        <Card style={{ width: '18rem' }} className='ms-4 mt-4 mb-4'>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>
                    Gender: {personDetails.properties?.gender || 'Loading...'} <br />
                    Hair-Color: {personDetails.properties?.hair_color || 'Loading...'} <br />
                    Eye-Color: {personDetails.properties?.eye_color || 'Loading...'} <br />
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Link to={`/person-details/${person.uid}`} className="btn btn-primary">
                        Learn more!
                    </Link>
                    <Button variant="primary" onClick={handleAddToFavorites}>💓</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default PersonCard;

