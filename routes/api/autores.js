// Se importan todos los métodos del modelo de autor.
// En autor.model.js tienen que haberse exportado primero
// Más abajo si llamamos al método autocompletando se importará aquí él solo.
const { getAll, getById } = require("../../models/autor.model");

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

// GET /api/autores/autorId
router.get("/:autorId", async (req, res) => {
  const { autorId } = req.params;
  console.log(autorId);
  try {
    const [autor] = await getById(autorId);
    if (autor.length === 0) {
      return res.json({
        errorAutorById: "No existe ningún autor por ese Id",
      });
    }
    res.json(autor);
  } catch (error) {
    res.status(503).json({ errorAutorById: error.message });
  }
});

// POST /api/autores

module.exports = router;
