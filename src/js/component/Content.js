import React, { useContext, } from 'react'
import { Context } from '../store/appContext'
import "../../styles/Content.css";
import { Link } from 'react-router-dom';

const Content = () => {
    const { actions, store } = useContext(Context) 

    const isFavorite = (name) => { 
       
            return store.favorites.some(item => item.name === name);
        };
    const handleToggleFavorites = (name) => { 
        if (isFavorite(name)) { 
            actions.deleteFavorites(name); 
        } else {
            actions.addFavorites(name); 
        }
    };


    return (
        <>
            <div className="title">
                <h1>Characters</h1>
            </div>
            <div className="card-container">
                <div className="card-deck">
                    {store.people.map(person => { 
                        return (
                            <div className="card" key={person.uid}> {}
                                <div className="card-body">
                                    <h3>{person.name}</h3> {}
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="buttons">
                                        <Link to={`/details/people/${person.uid}`}> {}
                                        <i class="fa-solid fa-circle-info"></i>
                                        </Link>
                                        <i 
                                            className={`fa-regular fa-heart ${isFavorite(person.name) ? "favo" : ""}`}
                                            onClick={() => handleToggleFavorites(person.name)}></i> {}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="title">
                <h1>Planets</h1>
            </div>
            <div className="card-container">
                <div className="card-deck">
                    {store.planets.map(planet => {
                        return (
                            <div className="card" key={planet.uid}>
                                <div className="card-body">
                                    <h3>{planet.name}</h3>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="buttons">
                                        <Link to={`/details/planets/${planet.uid}`}>
                                        <i class="fa-solid fa-circle-info"></i>
                                        </Link>
                                        <i 
                                            className={`fa-regular fa-heart ${isFavorite(planet.name) ? "favo" : ""}`}
                                            onClick={() => handleToggleFavorites(planet.name)}></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="title">
                <h1>Starships</h1>
            </div>
            <div className="card-container">
                <div className="card-deck">
                    {store.starships.map(starship => {
                        return (
                            <div className="card" key={starship.uid}>
                                <div className="card-body">
                                    <h3>{starship.name}</h3>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <div className="buttons">
                                        <Link to={`/details/starships/${starship.uid}`}>
                                        <i class="fa-solid fa-circle-info"></i>
                                        </Link>
                                        <i 
                                            className={`fa-regular fa-heart ${isFavorite(starship.name) ? "favorite" : ""}`} 
                                            onClick={() => handleToggleFavorites(starship.name)}></i>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >

        </>
    )
}

export default Content
