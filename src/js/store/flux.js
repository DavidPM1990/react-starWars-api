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

			vehicles: [],

			favorites: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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

			getPeople: async () => {
				const requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				try {
					const response = await fetch("https://www.swapi.tech/api/people?page=1", requestOptions);

					const result = await response.json();

					setStore({ people: result.results });


				} catch (error) {

					console.error('Error:', error);

				}
			},

			getPlanets: async () => {
				const requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				try {
					const response = await fetch("https://www.swapi.tech/api/planets?page=1", requestOptions);
					const result = await response.json();

					setStore({ planets: result.results });


				} catch (error) {
					console.log("Error:", error);
				}
			},

			getVehicles: async () => {
				const requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles?page=1", requestOptions);
					const result = await response.json();

					setStore({ vehicles: result.results });


				} catch (error) {
					console.error('Error:', error);
				}
			},

			addToFavorites: (item) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] });
			},

			removeFromFavorites: (index) => {
				const store = getStore();
				const newFavorites = [...store.favorites];
				newFavorites.splice(index, 1);
				setStore({ favorites: newFavorites });
			},

			getCharacterDetails: async (id) => {
				const requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`, requestOptions);
					const result = await response.json();
					return result.result.properties;
				} catch (error) {
					console.error('Error:', error);
					return null;
				}
			},

			getPlanetDetails: async (id) => {
				const requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`, requestOptions);
					const result = await response.json();
					return result.result.properties;
				} catch (error) {
					console.error('Error:', error);
					return null;
				}
			},

			getVehicleDetails: async (id) => {
				const requestOptions = {
					method: 'GET',
					redirect: 'follow'
				};

				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`, requestOptions);
					const result = await response.json();
					return result.result.properties;
				} catch (error) {
					console.error('Error:', error);
					return null;
				}
			},
		}
	};
};

export default getState;
