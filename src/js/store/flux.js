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
					const response = await fetch("https://www.swapi.tech/api/people/", requestOptions);
					const result = await response.json();
					setStore({ people: result.results });
					console.log("resultados de la llamada a la api :", result.results);

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
					const response = await fetch("https://www.swapi.tech/api/planets", requestOptions)
					const result = await response.json();
					setStore({ planets: result.results })
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
					const response = await fetch("https://www.swapi.tech/api/vehicles", requestOptions);
					const result = await response.json();
					setStore({ vehicles: result.results });
					console.log("Resultados de la llamada a la API de vehículos:", result.results);
				} catch (error) {
					console.error('Error:', error);
				}
			},

		}
	};
};

export default getState;
