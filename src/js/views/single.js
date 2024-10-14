import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Single = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card mb-3">
				<div className="card-body">
					<h2 className="card-title">{store.planetInfo.name}</h2>
					<p className="card-text">Diametro: {store.planetInfo.diameter}</p>
					<p className="card-text">Poblacion: {store.planetInfo.population} personas</p>
					<p className="card-text">Gravedad: {store.planetInfo.gravity}</p>
					<p className="card-text">Clima: {store.planetInfo.climate}</p>
					<p className="card-text">Duracion del dia: {store.planetInfo.rotation_period} horas</p>
					<p className="card-text">Duracion del año: {store.planetInfo.orbital_period} dias</p>
					
				</div>
				<img className="card-img-top" src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/12/Best-Fictional-Planets-Dathomir-Star-Wars-Jedi-Fallen-Order.jpg" alt="Card image cap" />
			</div>
			
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};