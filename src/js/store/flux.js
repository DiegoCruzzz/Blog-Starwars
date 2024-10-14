import { string } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			personInfo: [],
			planetInfo: [],
			favoritos: [],
			favoritosP: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//---------------------------------------------------------------------------------
			loadPeople: () => {
				fetch('https://www.swapi.tech/api/people/')
        		.then(response => response.json())
        		.then(data => {
					console.log(data);
					const store = getStore();
					setStore({people:data.results})
					store.actions.personMoreInfo()
					console.log(store.people)
				});
			},
			loadPlanets: () => {
				fetch('https://www.swapi.tech/api/planets/')
        		.then(response => response.json())
        		.then(data => {
					console.log(data);
					const store = getStore();
					setStore({planets:data.results})
					console.log(store.planets)
				});
			},

			personMoreInfo: (index) => {
				const store = getStore();
				
				fetch(store.people[index].url)
        			.then(response => response.json())
        			.then(data => {
						console.log(data.result.properties);
						setStore({personInfo:data.result.properties})
						console.log(store.personInfo)
				});	
			},
			
			planetMoreInfo: (index) => {
				const store = getStore();
				
				fetch(store.planets[index].url)
        			.then(response => response.json())
        			.then(data => {
						console.log(data.result.properties);
						setStore({planetInfo:data.result.properties})
						console.log(store.planetInfo)
				});	
			},

			addFav: (index) => {
				const store = getStore();
				if (store.favoritos.length === 0 || !store.favoritos.includes(store.people[index])) {
					setStore({favoritos:[...store.favoritos, store.people[index]]});
				} 	
				
				console.log(store.favoritos);
			},

			deleteFav: (index) => {
				const store = getStore();
				const newFavs = store.favoritos.filter((_, i) => i !== index);
				setStore({favoritos:newFavs});
				console.log(store.favoritos);
		
			},

			addFavPlanet: (index) => {
				const store = getStore();
				if (store.favoritosP.length === 0 || !store.favoritosP.includes(store.planets[index])) {
					setStore({favoritosP:[...store.favoritosP, store.planets[index]]});

				} 	
				
				console.log(store.favoritosP);
			},
			deleteFavPlanet: (index) => {
				const store = getStore();
				const newFavs = store.favoritosP.filter((_, i) => i !== index);
				setStore({favoritosP:newFavs});
				console.log(store.favoritosP);
		
			}

			
		}

	};
}

export default getState;
