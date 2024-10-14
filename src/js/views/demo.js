import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="card mb-3">
				<div className="card-body">
					<h2 className="card-title">{store.personInfo.name}</h2>
					<p className="card-text">Año de nacimineto: {store.personInfo.birth_year}</p>
					<p className="card-text">Altura: {store.personInfo.height} cm</p>
					<p className="card-text">Peso: {store.personInfo.mass} kg</p>
					<p className="card-text">Genero: {store.personInfo.gender}</p>
					<p className="card-text">Color de piel: {store.personInfo.skin_color}</p>
					<p className="card-text">Color de pelo: {store.personInfo.hair_color}</p>
					
				</div>
				<img className="card-img-top" src="https://static.wikia.nocookie.net/406305c5-f76d-4bcd-af67-b4b897fbff18" alt="Card image cap" />
			</div>
			
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
