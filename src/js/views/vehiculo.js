import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imgCard from "../../img/img-card.webp";

export const Vehiculo = (props) => {
    const params = useParams();
    const [detalle, modificarDetalle] = useState({});
    const [cargando, modificarCargando] = useState(true);

    useEffect(async () => {
        const res = await fetch(`https://www.swapi.tech/api/vehicles/${params.uid}`);
        const data = await res.json();
        console.log({ detalle: data});
        modificarDetalle(data.result);
        modificarCargando(false);
    })

    if (cargando) {
        return <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-warningr" role="status">
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
                    <div className="col"><h5>Modelo:</h5> {detalle.properties.model}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Tipo de Vehiculo:</h5> {detalle.properties.vehicle_class}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Fabricante:</h5> {detalle.properties.manufacturer}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Precio en creditos:</h5> {detalle.properties.cost_in_credits}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Largo:</h5> {detalle.properties.length}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Pasajeros:</h5> {detalle.properties.passengers}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Velocidad atmosférica máxima:</h5> {detalle.properties.max_atmosphering_speed}</div>
                    <div className="vr"></div>
                    <div className="col"><h5>Capacidad de carga:</h5> {detalle.properties.cargo_capacity}</div>
                </div>
            </div>
        </div>
    )
}