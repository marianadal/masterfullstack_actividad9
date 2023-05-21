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

const create = ({ nombre, email, imagen }) => {
  return db.query(
    "INSERT INTO autores (nombre, email, imagen) VALUES (?, ?, ?)",
    [nombre, email, imagen]
  );
};

// Se exportan los métodos
module.exports = {
  getAll,
  getById,
  create,
};
