const getAll = () => {
  return db.query(`SELECT ar.id, titulo, descripcion, fecha_creacion, categoria, nombre, email, imagen FROM Actividad9_blog.articulos as ar
  INNER JOIN Actividad9_blog.autores as au ON ar.autores_id = au.id
  ORDER BY fecha_creacion DESC`);
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

// Se exportan los métodos
module.exports = {
  getAll,
  getByAutorId,
};
