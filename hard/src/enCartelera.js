let funciones = require('../customFunctions.js');
let moviesJson = funciones.getMovies();
let movies = moviesJson.movies;

let finalContent = '='.repeat(80) + '\n';
finalContent += ' '.repeat(29) + 'EN CARTELERA\n'
finalContent += '='.repeat(80) + '\n\n';
finalContent += `Total de películas en cartelera: ${movies.length}\n\n`

for (let movie of movies) {
    finalContent += `Título: ${movie.title}\nReseña: ${movie.overview}\n\n`;
}

finalContent += '\n' + '='.repeat(80) + '\n';

finalContent += `\nRecordá que podés visitar las secciones:\n\n• Inicio (/)\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;

finalContent += '\n\n' + '='.repeat(80) + '\n';

module.exports = finalContent;
