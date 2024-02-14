import React, { useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



function DropDownButton() {

    const { store, actions } = useContext(Context);

    const handleRemoveFromFavorites = (index) => {
        actions.removeFromFavorites(index);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {store.favorites.map((item, index) => (
                    <Dropdown.Item key={index} href="#">
                        {item.name}
                        <FontAwesomeIcon
                            icon={faTrash}
                            onClick={() => handleRemoveFromFavorites(index)} />
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownButton;