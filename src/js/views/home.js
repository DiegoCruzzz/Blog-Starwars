import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return(
	<div className="mx-auto p-x5 mx-5 ">
		<h1 className="p-3">Personajes</h1>
		
		
		<div className="horizontal-scroll-container">
			{store.people.map((person, index) => (
				
				<div key={index} className="d-flex m-2">
					<div className="card" style={{width: '18rem'}}>
						<img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5024af8d-d5bc-49d0-a1b7-25c50838f6d9/df0oao0-ea61c72c-21d3-4248-95bf-35faa261dfbd.jpg/v1/fill/w_1280,h_1707,q_75,strp/battle_droid_commander_by_riccardofasoli_df0oao0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTcwNyIsInBhdGgiOiJcL2ZcLzUwMjRhZjhkLWQ1YmMtNDlkMC1hMWI3LTI1YzUwODM4ZjZkOVwvZGYwb2FvMC1lYTYxYzcyYy0yMWQzLTQyNDgtOTViZi0zNWZhYTI2MWRmYmQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KELWv9slPr-oEQ9xHoTfDhFi-Fb_T0q5HOSa7C9M_s0" class="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{person.name}</h5>
							<p className="card-text d-flex "></p>
							<Link to="/demo">
								<button type="button" class="btn btn-primary" onClick={()=>actions.personMoreInfo(index)}>Mas info!</button>
							</Link>
							<button type="button" class="btn btn-warning mx-4 " onClick={()=>actions.addFav(index)}>Fav</button>
						</div>
					</div>
				</div>
			))}
		</div>


		<h1 className="p-3">Planetas</h1>
		
		<div className="horizontal-scroll-container">
			{store.planets.map((planet, index) => (
				<div key={index} className="d-flex m-2">
					<div className="card" style={{width: '18rem'}}>
						<img src="https://static.wikia.nocookie.net/swbloodlines/images/a/a6/Corusca_Sector_-_Coruscant.jpg/revision/latest?cb=20180212041015" class="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<p className="card-text d-flex "></p>
							<Link to="/single">
								<button type="button" class="btn btn-primary" onClick={()=>actions.planetMoreInfo(index)}>Mas info!</button>
							</Link>
							<button type="button" class="btn btn-warning mx-4 " onClick={()=>actions.addFavPlanet(index)}>Fav</button>
						</div>
					</div>
				</div>
			))}
		</div>
	</div>
	);
};
