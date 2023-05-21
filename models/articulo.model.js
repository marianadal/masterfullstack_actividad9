const getAll = () => {
  return db.query(`SELECT ar.id, titulo, descripcion, fecha_creacion, categoria, nombre, email, imagen FROM Actividad9_blog.articulos as ar
  INNER JOIN Actividad9_blog.autores as au ON ar.autores_id = au.id
  ORDER BY fecha_creacion DESC`);
};

// Se exportan los métodos
module.exports = {
  getAll,
};
