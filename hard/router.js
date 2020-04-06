const contenido = require('./src');

module.exports = {
    routes: (req, res) => {
        switch (req.url) {
            // Home
            case '/':
                res.end(contenido.home);
                break;
            // En cartelera
            case '/en-cartelera':
                res.end(contenido.cartelera);
                break;
            // Mas Votadas
            case '/mas-votadas':
                res.end(contenido.masVotadas);
                break;
            // Sucursales
            case '/sucursales':
                res.end(contenido.sucursales);
                break;
            // Contacto
            case '/contacto':
                res.end(contenido.contacto);
                break;
            // Preguntas Frecuentes
            case '/preguntas-frecuentes':
                res.end(contenido.faq);
                break;
            // Default
            default:
                res.end(contenido.notFound);
        }
    }
}