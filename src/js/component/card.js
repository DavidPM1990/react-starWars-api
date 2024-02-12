import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";
import { Context } from "../store/appContext";
import { useState, useContext, useEffect } from "react";


const CardStarWars = ({ person }) => {





    console.log("-----_>", person)


    return (
        <Card style={{ width: '18rem' }}
            className='ms-4 mt-4 mb-4'
        >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="primary">Learn more!</Button>
                    <Button variant="primary">💓</Button>
                </div>

            </Card.Body>
        </Card>
    )
}

export default CardStarWars;