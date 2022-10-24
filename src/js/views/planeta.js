import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgCard from "../../img/img-card.webp";

export const Planeta = (props) => {
    const params = useParams();
    const [detalle, modificarDetalle] = useState({});
    const [cargando, modificarCargando] = useState(true);

    useEffect(async () => {
        const res = await fetch(`https://www.swapi.tech/api/planets/${params.uid}`);
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
                        <div className="col"><h5>Terreno:</h5> {detalle.properties.terrain}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Diametro:</h5> {detalle.properties.diameter}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Periodo de Rotación:</h5> {detalle.properties.rotation_period}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Órbita:</h5> {detalle.properties.orbital_period}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Gravedad:</h5> {detalle.properties.gravity}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Clima:</h5> {detalle.properties.climate}</div>
                        <div className="vr"></div>
                        <div className="col"><h5>Superficie Aquatica:</h5> {detalle.properties.surface_water}</div>
                    </div>
                </div>
            </div>
        )
}