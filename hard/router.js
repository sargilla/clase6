const contenido = require("./src");

module.exports = (req, res) => {
  switch (req.url) {
    // Home
    case "/":
      res.end(contenido.home);
      break;
    // En cartelera
    case "/en-cartelera":
      res.end(contenido.cartelera);
      break;
    // Mas Votadas
    case "/mas-votadas":
      res.end(contenido.masVotadas);
      break;
    // Sucursales
    case "/sucursales":
      res.end(contenido.sucursales);
      break;
    // Contacto
    case "/contacto":
      res.end(contenido.contacto);
      break;
    // Preguntas Frecuentes
    case "/preguntas-frecuentes":
      res.end(contenido.faq);
      break;
    case "/otro-modulo":
      res.end(contenido.otroModulo);
      break;
    case "/modulo-objeto":
      res.end(contenido.moduloObjeto.linea)
      break;
    // Default
    default:
      res.end(contenido.notFound);
  }
};
