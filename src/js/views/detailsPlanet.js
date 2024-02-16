import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const DetailsPlanet = () => {
    const { actions, store } = useContext(Context);
    const params = useParams();
    const [planetDetails, setPlanetDetails] = useState(null);

    useEffect(() => {
        // Obtén los detalles del planeta utilizando el ID de los parámetros de la URL
        const fetchPlanetDetails = async () => {
            const id = params.id;
            const details = await actions.getPlanetDetails(id);

            if (details) {
                setPlanetDetails(details);
            }
        };

        fetchPlanetDetails();
    }, [params.id, actions]);

    const planetUid = store.planets.find(p => p.name === planetDetails?.name)?.uid;


    return (
        <div>
            {planetDetails ? (
                <div>

                    <div className="container d-flex flex-row justify-content-around ml-5 mr-5">
                        <div>
                            <img className="" alt="character" src={planetUid == 1 ? `https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Tatooine_%28fictional_desert_planet%29.jpg/220px-Tatooine_%28fictional_desert_planet%29.jpg` : `https://starwars-visualguide.com/assets/img/planets/${planetUid}.jpg`} />

                        </div>
                        <div className="container text-center" >
                            <h2>{planetDetails.name}</h2>
                            <p> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolo voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>
                        </div>
                    </div>

                    <hr className="bg-danger"></hr>

                    <div className="container">
                        <table className="table table-borderless">
                            <thead className="text-danger">
                                <tr className="">
                                    <th scope="col">Diameter</th>
                                    <th scope="col">Rotation Period</th>
                                    <th scope="col">Orbital Period</th>
                                    <th scope="col">Population</th>
                                    <th scope="col">Name</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-danger">{planetDetails.diameter}</td>
                                    <td className="text-danger">{planetDetails.rotation_period}</td>
                                    <td className="text-danger">{planetDetails.orbital_period}</td>
                                    <td className="text-danger">{planetDetails.population}</td>
                                    <td className="text-danger">{planetDetails.name}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            ) : (
                <div className="d-flex justify-content-center"><Spinner animation="border" /></div>
            )}
        </div>
    );
};

export default DetailsPlanet;
