import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"  height={60} className="m-4" />
			</Link>
			<div className="ml-auto">	
				<button class="btn btn-warning m-4 p-4" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Favoritos</button>
				<div class="collapse" id="collapseExample" style={{ width: '200px'}}>
					<div class="card card-body">
						<ul style={{ listStyleType: 'none', padding: '0' }}>
							{store.favoritos.map((favorito, index) => (
								<li key={index} style={{ position: 'relative', padding: '10px', border: '1px solid black', borderRadius: '4px' }} className="d-flex justify-content-between">
									<Link to="/demo">
										<a href="" onClick={()=>actions.personMoreInfo(index)}>{favorito.name}</a>
									</Link>
									<button onClick={() => actions.deleteFav(index)} className="delete-icon" type="button" class="btn btn-danger">X</button>
								</li>
							))}
							{store.favoritosP.map((favorito, index) => (
								<li key={index} style={{ position: 'relative', padding: '10px', border: '1px solid black', borderRadius: '4px' }} className="d-flex justify-content-between">
									<Link to="/single">
										<a href="" onClick={()=>actions.planetMoreInfo(index)}>{favorito.name}</a>
									</Link>
									<button onClick={() => actions.deleteFavPlanet(index)} className="delete-icon" type="button" class="btn btn-danger">X</button>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
