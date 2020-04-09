const fs = require('fs');


// function parsingFile(filePath) {
//     let archivo = fs.readFileSync(filePath, 'utf8');
//     let objeto = JSON.parse(archivo);
//     return objeto;
// }

// const parsingFile = function (filePath) { 
//     JSON.parse(fs.readFileSync(filePath, 'utf8'))
// };

    
const parsingFile = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf8'));

const moviesFilePath = './data/movies.json';
const faqFilePath = './data/faqs.json';
const theatersFilePath = './data/theaters.json';

module.exports = {
    getMovies: () => parsingFile(moviesFilePath),
    getFaqs: () => parsingFile(faqFilePath),
    getTheaters: () => parsingFile(theatersFilePath),
}