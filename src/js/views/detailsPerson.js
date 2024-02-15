import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";


const DetailsPerson = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [personDetails, setPersonDetails] = useState(null);


    useEffect(() => {

        const fetchPersonDetails = async () => {
            const id = params.id;
            const details = await actions.getCharacterDetails(id);

            if (details) {
                setPersonDetails(details);
            }
        };

        fetchPersonDetails();
    }, [params.id, actions]);

    const personUid = store.people.find(p => p.name === personDetails?.name)?.uid;


    // console.log("que eresssssss?????'", personDetails)


    return (
        <div>
            {personDetails ? (
                <div>

                    <div className="container d-flex flex-row justify-content-around ml-5 mr-5">
                        <div>
                            <img className="" alt="character" src={`https://starwars-visualguide.com/assets/img/characters/${personUid}.jpg`} />
                        </div>
                        <div className="container text-center" >
                            <h2>{personDetails.name}</h2>
                            <p> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolo voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? </p>
                        </div>
                    </div>

                    <hr className="bg-danger"></hr>

                    <div className="container">
                        <table className="table table-borderless">
                            <thead className="text-danger">
                                <tr className="">
                                    <th scope="col">Name</th>
                                    <th scope="col">Birth Year</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Height</th>
                                    <th scope="col">Skin Color</th>
                                    <th scope="col">Eye Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-danger">{personDetails.name}</td>
                                    <td className="text-danger">{personDetails.birth_year}</td>
                                    <td className="text-danger">{personDetails.gender}</td>
                                    <td className="text-danger">{personDetails.height}</td>
                                    <td className="text-danger">{personDetails.skin_color}</td>
                                    <td className="text-danger">{personDetails.eye_color}</td>
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

export default DetailsPerson;

