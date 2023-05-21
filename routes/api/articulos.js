// Se importan todos los métodos del modelo de autor.
// En autor.model.js tienen que haberse exportado primero
// Más abajo si llamamos al método autocompletando se importará aquí él solo.
const { getAll } = require("../../models/articulo.model");

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

// GET /api/articuloporautor

// POST /api/articulos

module.exports = router;
