import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import { Context } from "../store/appContext";
import { useState, useContext, useEffect } from "react";


const VehicleCard = ({ vehicle }) => {


    const { store, actions } = useContext(Context);



    console.log("vehiculos ---->", vehicle)


    return (
        <Card style={{ width: '18rem' }}
            className='ms-4 mt-4 mb-4'
        >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{vehicle.name}</Card.Title>
                <Card.Text>
                    Color: <br />
                    Cual quier cosa: <br />

                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="primary">Learn more!</Button>
                    <Button variant="primary">💓</Button>
                </div>

            </Card.Body>
        </Card>
    )
}

export default VehicleCard;