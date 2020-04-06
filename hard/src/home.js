let funciones = require('../customFunctions.js');
let moviesJson = funciones.getMovies();
let movies = moviesJson.movies;

let finalContent = 'Bienvenidas/os a DH MOVIES el mejor sitio para encontrar las mejores películas,\nIncluso mucho mejor que Netflix, Cuevana y PopCorn!!!.\n\n'

// Sort funcion literal
// movies.sort(function (a, b) {
// 	if (a.title > b.title) {
// 		return 1;
// 	}
// 	if (a.title < b.title) {
// 		return -1;
// 	}
// });

// Sort ES6
movies.sort((a, b) => a.title > b.title ? 1 : -1);

finalContent += '='.repeat(80) + '\n';
finalContent += ' '.repeat(29) + 'PELICULAS EN CARTELERA\n'
finalContent += '='.repeat(80) + '\n\n';
finalContent += `Total de películas en cartelera: ${movies.length}\n\n`

for (let movie of movies) {
    finalContent += `${movie.title}\n`;
}

finalContent += '\n' + '='.repeat(80) + '\n';

finalContent += `\nRecordá que podés visitar las secciones:\n\n• Inicio (/)\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;

finalContent += '\n\n' + '='.repeat(80) + '\n';

module.exports = finalContent;
