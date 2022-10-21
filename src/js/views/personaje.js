import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgCard from "../../img/img-card.webp";

export const Personaje = (props) => {
    const params = useParams();
    const [detalle, modificarDetalle] = useState({});
    const [cargando, modificarCargando] = useState(true);

    useEffect(async () => {
        const res = await fetch(`https://www.swapi.tech/api/people/${params.uid}`);
        const data = await res.json();
        console.log({ detalle: data});
        modificarDetalle(data.result);
        modificarCargando(false);
    })

    if (cargando) {
        return <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-warning" role="status">
                    </div>
                </div>
    }
    
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imgCard} className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{detalle.properties.name}</h2>
                        <p className="card-text">{}</p>
                        <p className="card-text"><small className="text-muted">{detalle.description}</small></p>
                    </div>
                    </div>
                </div>
            </div>
                <div className="container text-center">
                    <div className="row">
                    <div className="col"><h5>Height:</h5> {detalle.properties.height}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Mass:</h5> {detalle.properties.mass}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Hair color:</h5> {detalle.properties.hair_color}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Skin color:</h5> {detalle.properties.skin_color}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Birth year:</h5> {detalle.properties.birth_year}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Gender:</h5> {detalle.properties.gender}</div>
                </div>
            </div>
        </div>
    )
}