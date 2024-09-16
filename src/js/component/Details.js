import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';
import "../../styles/Details.css";

const Details = () => {
  const { actions, store } = useContext(Context); 
  const { uid, category } = useParams(); 
   
  const person = store.people.find(person => person.uid === uid)
  const planet = store.planets.find(planet => planet.uid === uid)
  const starship = store.starships.find(starship => starship.uid === uid);

  const handleAddFavorite = (name) => {
    actions.addFavorites(name);
  }
  
  useEffect(() => {
    actions.getDetails(category, uid)

  }, [])
  
  const isFavorite = (name) => { 
    
        return store.favorites.some(item => item.name === name);
    };

  
  return (
    <div className="container">

      {}
      {category === "people" && store.details.hasOwnProperty("properties") ? (
        <>
          <div className="card bg-dark text-white"style={{width: "60%", height: "700px"}}>
            {}
            <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
              className="card-img" alt={`${store.details.properties.name}`}
              onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} /> {/*Si la imagen no carga añadimos una por defecto*/}
            <div className="card-img-overlay">
              <h5 className="card-title">Class: {category}</h5>
              <hr />
              <p className="card-text">Name: {store.details.properties.name}</p>
              <p className="card-text">Height: {store.details.properties.height}</p>
              <p className="card-text">Mass: {store.details.properties.mass}</p>
              <p className="card-text">Hair color: {store.details.properties.hair_color}</p>
              <p className="card-text">Skin color: {store.details.properties.skin_color}</p>
              <p className="card-text">Eye color: {store.details.properties.eye_color}</p>
              <p className="card-text">Birth year: {store.details.properties.birth_year}</p>
              <p className="card-text">Gender: {store.details.properties.gender}</p>
              <p className="card-text">Homeworld: {store.details.properties.homeworld}</p>
              <div className="fav">
                <i className={`fa-regular fa-star ${isFavorite(person.name) ? "favo" : ""}`}
                  onClick={() => handleAddFavorite(person.name)}></i>
              </div>
            </div>
          </div>
        </>
      ) : ""}
      {}
      {category === "planets" && store.details.hasOwnProperty("properties") ? (
        <>
          <div className="card bg-dark text-white"style={{width: "60%", height: "60%"}}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`}
              className="card-img" alt={`${store.details.properties.name}`}
              onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} />
            <div className="card-img-overlay">
              <h5 className="card-title">Class: {category}</h5>
              <p className="card-text">Name: {store.details.properties.name}</p>
              <p className="card-text">Diameter: {store.details.properties.diameter}</p>
              <p className="card-text">Rotation period: {store.details.properties.rotation_period}</p>
              <p className="card-text">Orbital period: {store.details.properties.orbital_period}</p>
              <p className="card-text">Gravity: {store.details.properties.gravity}</p>
              <p className="card-text">Population: {store.details.properties.population}</p>
              <p className="card-text">Climate: {store.details.properties.climate}</p>
              <p className="card-text">Terrain: {store.details.properties.terrain}</p>
              <p className="card-text">Surface water: {store.details.properties.surface_water}</p>
              <div className="fav">
                <i className={`fa-regular fa-star ${isFavorite(planet.name) ? "favo" : ""}`}
                  onClick={() => handleAddFavorite(planet.name)}></i>
              </div>
            </div>
          </div>
        </>
      ) : ""}
      {}
      {category === "starships" && store.details.hasOwnProperty("properties") ? (
        <>
          <div className="card bg-dark text-white" style={{width: "60%", height: "900px"}}>
            <img src={`https://starwars-visualguide.com/assets/img/starships/${uid}.jpg`}
              className="card-img" alt={`${store.details.properties.name}`}
              onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} />
            <div className="card-img-overlay">
              <h5 className="card-title">Class: {category}</h5>
              <p className="card-text">Name: {store.details.properties.name}</p>
              <p className="card-text">Model: {store.details.properties.model}</p>
              <p className="card-text">Starship class: {store.details.properties.starship_class}</p>
              <p className="card-text">Manufacturer: {store.details.properties.manufacturer}</p>
              <p className="card-text">Cost in credits: {store.details.properties.cost_in_credits}</p>
              <p className="card-text">Crew: {store.details.properties.crew}</p>
              <p className="card-text">Passengers: {store.details.properties.passengers}</p>
              <p className="card-text">Max_atmosphering_speed: {store.details.properties.max_atmosphering_speed}</p>
              <p className="card-text">Hyperdrive_rating: {store.details.properties.hyperdrive_rating}</p>
              <p className="card-text">MGLT: {store.details.properties.MGLT}</p>
              <p className="card-text">Cargo_capacity: {store.details.properties.cargo_capacity}</p>
              <p className="card-text">Consumables: {store.details.properties.consumables}</p>
              <p className="card-text">Pilots: 6</p>
              <div className="fav">
                <i className={`fa-regular fa-star ${isFavorite(starship.name) ? "favo" : ""}`}
                  onClick={() => handleAddFavorite(starship.name)}></i>
              </div>
            </div>
          </div>
        </>
      ) : ""}
    </div>

  );
}

export default Details;