const router = require("express").Router();

router.use("/autores", require("./api/autores.js"));
router.use("/articulos", require("./api/articulos.js"));

module.exports = router;
