const { Usuario, Mensajes, Horarios, Tienda, DatosDeContacto } = require("./index");

const initModels = () => {

  // U:M

  DatosDeContacto.belongsTo(Tienda, { as: "datosContacto", foreignKey: "tienda_id" })
  Tienda.hasMany(DatosDeContacto, { as: "contacto", foreignKey: "tiendaId" })

  Horarios.belongsTo(Tienda, { as: "tipos de horario", foreignKey: "tienda_id" })
  Tienda.hasMany(Horarios, { as: "Horarios", foreignKey: "tienda_id" })

  Mensajes.belongsTo(Usuario, { as: "Mensajes", foreignKey: "usuario_id" })
  Usuario.hasMany(Mensajes, { as: "mensajes", foreignKey: "usuario_id" })
  
  //U:M
  


};

module.exports = initModels;