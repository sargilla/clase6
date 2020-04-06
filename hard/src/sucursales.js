let funciones = require('../customFunctions.js');
let theatersJson = funciones.getTheaters();
let theaters = theatersJson.theaters;

let finalContent = '='.repeat(80) + '\n';
finalContent += ' '.repeat(29) + 'NUESTRAS SALAS\n'
finalContent += '='.repeat(80) + '\n\n';

finalContent += `Total de salas: ${theaters.length}\n\n`

for (let theater of theaters) {
    finalContent += `Nombre: ${theater.name}\nDirección: ${theater.address}\nDescripció: ${theater.description}\n\n`;
}
finalContent += '\n' + '='.repeat(80) + '\n';

finalContent += `\nRecordá que podés visitar las secciones:\n\n• Inicio (/)\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;

finalContent += '\n\n' + '='.repeat(80) + '\n';

module.exports = finalContent;