// Se importan todos los métodos del modelo de autor.
// En autor.model.js tienen que haberse exportado primero
// Más abajo si llamamos al método autocompletando se importará aquí él solo.
const { getAll, getByAutorId } = require("../../models/articulo.model");

const router = require("express").Router();

// GET /api/articulos
router.get("/", async (req, res) => {
  console.log("Entra por aquí /api/articulos");
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (error) {
    res.status(503).json({ errorArticulos: error.message });
  }
});

// GET /api/articulos/autor/autorId
console.log("estoy en ruta /api/articulos/autor/autorId");
router.get("/autor/:autorId", async (req, res) => {
  const { autorId } = req.params;
  console.log(autorId);
  try {
    const [articulosByAutorId] = await getByAutorId(autorId);
    if (articulosByAutorId.length === 0) {
      return res.json({
        errorArticulosPorAutor: "No existen artículos por ese autor",
      });
    }
    res.json(articulosByAutorId);
  } catch (error) {
    res.status(503).json({ errorArticulosPorAutor: error.message });
  }
});

// POST /api/articulos

module.exports = router;
