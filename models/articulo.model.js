const getAll = () => {
  return db.query(`SELECT ar.id, titulo, descripcion, fecha_creacion, categoria, nombre, email, imagen FROM Actividad9_blog.articulos as ar
  INNER JOIN Actividad9_blog.autores as au ON ar.autores_id = au.id
  ORDER BY fecha_creacion DESC`);
};

const getById = (articuloId) => {
  return db.query(
    `SELECT ar.id, titulo, descripcion, fecha_creacion, categoria, nombre, email, imagen FROM Actividad9_blog.articulos as ar
  INNER JOIN Actividad9_blog.autores as au ON ar.autores_id = au.id
  WHERE ar.id = ?
  ORDER BY fecha_creacion DESC`,
    [articuloId]
  );
};

const getByAutorId = (autorId) => {
  return db.query(
    `SELECT ar.id, titulo, descripcion, fecha_creacion, categoria, nombre, email, imagen FROM Actividad9_blog.articulos as ar
INNER JOIN Actividad9_blog.autores as au ON ar.autores_id = au.id
WHERE ar.autores_id = ?
ORDER BY fecha_creacion DESC`,
    [autorId]
  );
};

const create = ({ titulo, descripcion, categoria, autores_id }) => {
  return db.query(
    "insert into articulos (titulo, descripcion, categoria, autores_id) values (?, ?, ?, ?)",
    [titulo, descripcion, categoria, autores_id]
  );
};

// Se exportan los métodos
module.exports = {
  getAll,
  getById,
  getByAutorId,
  create,
};
