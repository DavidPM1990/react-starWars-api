import React, { useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function DropDownButton() {

    const { store, actions } = useContext(Context);

    const index = store.favorites.length;

    const handleRemoveFromFavorites = (index) => {
        actions.removeFromFavorites(index);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Favorites {index}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {store.favorites.map((item, index) => (
                    <Dropdown.Item key={index} href="#">
                        <div className="d-flex justify-content-between">
                            <div>{item.name}</div>
                            <div>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => handleRemoveFromFavorites(index)} />
                            </div>
                        </div>


                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownButton;