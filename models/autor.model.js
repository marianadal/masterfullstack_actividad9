const getAll = () => {
  return db.query("select * from autores");
};

// Se exportan los métodos
module.exports = {
  getAll,
};
