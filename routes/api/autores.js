// Se importan todos los métodos del modelo de autor.
// En autor.model.js tienen que haberse exportado primero
// Más abajo si llamamos al método autocompletando se importará aquí él solo.
const { getAll } = require("../../models/autor.model");

const router = require("express").Router();

// GET /api/autores
router.get("/", async (req, res) => {
  console.log("Entra por aquí /api/autores");
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (error) {
    res.status(503).json({ errorAutores: error.message });
  }
});

// POST /api/autores

module.exports = router;
