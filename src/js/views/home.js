import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import imgCard from "../../img/img-card.webp";
import {Context} from '../store/appContext'
import { element } from "prop-types";

export const Home = () => {
  const [personajes, modificarPersonajes] = useState([]);
  const [planetas, modificarPlanetas] = useState([]);
  const [vehiculos, modificarVehiculos] = useState([]);
  const [cargando, modificarCargando] = useState(true);
  const store = useContext(Context)

  console.log(store)

  const obtenerPeronsas = async () => {
    const res = await fetch("https://www.swapi.tech/api/people/");
    const data = await res.json();
    console.log({ data });
    modificarPersonajes(data.results);
  }

  const obtenerPlanetas = async () => {
    const res = await fetch("https://www.swapi.tech/api/planets/");
    const data = await res.json();
    console.log({ data });
    modificarPlanetas(data.results);
  }

  const obtenerVehiculos = async () => {
    const res = await fetch("https://www.swapi.tech/api/vehicles/");
    const data = await res.json();
    console.log({ data });
    modificarVehiculos(data.results);
  }

  useEffect(async () => {
    await obtenerPeronsas()
    await obtenerPlanetas()
    await obtenerVehiculos()
    modificarCargando(false);
  },[])

  if (cargando) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-warning" role="status"></div>
      </div>
    );
  }

  return (
    <div className="container-fluid px-5">
      <h2>PERSONAJES</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {personajes.map((personaje) => {
          return (
            <div className="col" key={personaje.uid}>
              <div className="card my-2" style={{ width: "18rem" }}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{personaje.name}</h5>
                  <p className="card-text">{personaje.gender}</p>
                  <Link
                    className="btn btn-outline-dark"
                    to={`/personaje/${personaje.uid}`}
                  >
                    Mas info!
                  </Link>
                  <button
							    type="button"
							    className="btn btn-outline-dark float-end"
                  onClick={() => store.actions.addToFavorites(personaje)}
                  >
                  <i className={"fas fa-heart"}/>
						      </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2>PLANETAS</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {planetas.map((planeta) => {
          return (
            <div className="col" key={planeta.uid}>
              <div className="card my-2" style={{ width: "18rem" }}>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{planeta.name}</h5>
                  <p className="card-text">{planeta.terrain}</p>
                  <Link
                    className="btn btn-outline-dark"
                    to={`/planeta/${planeta.uid}`}
                  >
                    Mas info!
                  </Link>
                  <button
							    type="button"
							    className="btn btn-outline-dark float-end"
                  onClick={() => store.actions.addToFavorites(planeta)}
                  >
                  <i className={"fas fa-heart"}/>
						      </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <h2>VEHICULOS</h2>
      <div className="row scrolling flex-row flex-nowrap">
        {vehiculos.map((vehiculo) => {
          return (
            <div className="col" key={vehiculo.uid}>
              <div className="card my-2" style={{ width: "18rem" }}>
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculo.uid}.jpg`} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{vehiculo.name}</h5>
                  <p className="card-text">{vehiculo.model}</p>
                  <Link
                    className="btn btn-outline-dark"
                    to={`/vehiculo/${vehiculo.uid}`}
                  >
                    Mas info!
                  </Link>
                  <button
							    type="button"
							    className="btn btn-outline-dark float-end"
                  onClick={() => store.actions.addToFavorites(vehiculo)}
                  >
                  <i className={"fas fa-heart"}/>
						      </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
