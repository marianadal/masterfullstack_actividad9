const getAll = () => {
  return db.query(`SELECT * FROM autores`);
};

const getById = (autorId) => {
  return db.query(
    `SELECT * FROM autores
  WHERE id = ?`,
    [autorId]
  );
};

// Se exportan los métodos
module.exports = {
  getAll,
  getById,
};
