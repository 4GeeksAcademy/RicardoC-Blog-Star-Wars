import React, { useContext, } from 'react'
import { Context } from "../store/appContext"
import "../../styles/FavoritesDropdown.css"

const FavoritesDropdown = () => {
    const { actions, store } = useContext(Context); 
    const favorites = store.favorites; 
    const favoritesCount = favorites.length; 
    const handleRemoveFavorite = (name) => {
        event.stopPropagation(); 
        actions.deleteFavorites(name) 
    };
    return (
        <div className="btn-group dropstart">
            <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"><strong> Favorites</strong>
                <span className="badge bg-dark">{favoritesCount}</span> {}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {favoritesCount === 0 ? (
                    <li className="dropdown-item">No favorites</li>
                ) : (
                    favorites.map(item => { 
                        return (
                            <li className="d-flex" key={item.uid}> {/*Identificador para cada elemento*/}
                                <a className="dropdown-item"
                                    href="#">{item.name}</a>
                                <i className="fa-regular fa-square-minus" //Definimos un evento con la función de eliminar con el uid como parámetro
                                    onClick={() => handleRemoveFavorite(item.name)}
                            ></i>
                            </li>
                        )
                    })
                )
                }
            </ul>
        </div>
    )
}

export default FavoritesDropdown