// let url = "https://rickandmortyapi.com/api/character/?page=19";

// fetch(url)
// .then((data) => console.log(data.json())) //.json convierte la cadena de texto a objeto
// .catch((error) => console.log(error))

let url = "https://rickandmortyapi.com/api/character/2";

fetch(url)
	.then((data) => {
		data
			.json()
			.then((json) => {
				console.log(json);
                alert(json.name)
			})
			.catch((error) => console.log(error));
	})
	.catch((error) => {
		console.log(error);
	});
