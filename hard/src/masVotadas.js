let funciones = require('../customFunctions.js');

let moviesJson = funciones.getMovies();
let movies = moviesJson.movies;

let finalContent = '='.repeat(80) + '\n';
finalContent += ' '.repeat(29) + 'MÁS VOTADAS\n'
finalContent += '='.repeat(80) + '\n\n';

let masVotadas = movies.filter(movie => movie.vote_average >= 7);

finalContent += `Total de películas: ${masVotadas.length}\n`

let promedio = (masVotadas.reduce((acum, movie) => acum + movie.vote_average, 0) / masVotadas.length).toFixed(2)

finalContent += `Rating promedio: ${promedio}\n\n`

for (let movie of masVotadas) {
    finalContent += `Título: ${movie.title}\nRating: ${movie.vote_average}\nReseña: ${movie.overview}\n\n`;
}
finalContent += '\n' + '='.repeat(80) + '\n';

finalContent += `\nRecordá que podés visitar las secciones:\n\n• Inicio (/)\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;

finalContent += '\n\n' + '='.repeat(80) + '\n';

module.exports = finalContent;