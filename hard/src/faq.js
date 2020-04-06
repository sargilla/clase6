let funciones = require('../customFunctions.js');
let faqsJson = funciones.getFaqs();
let faqs = faqsJson.faqs;

let finalContent = '='.repeat(80) + '\n';
finalContent += ' '.repeat(29) + 'PREGUNTAS FRECUENTES\n'
finalContent += '='.repeat(80) + '\n\n';

finalContent += `Total de preguntas: ${faqs.length}\n\n`

for (let faq of faqs) {
    finalContent += `Pregunta: ${faq.faq_title}\nRespuesta: ${faq.faq_answer}\n\n`;
}

finalContent += '\n' + '='.repeat(80) + '\n';

finalContent += `\nRecordá que podés visitar las secciones:\n\n• Inicio (/)\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;

finalContent += '\n\n' + '='.repeat(80) + '\n';

module.exports = finalContent;