const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Mensajes = db.define(
  "mensajes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    mensaje: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "usuario_id",
    }
  }, {
    timestamps: false,
  }
);

module.exports = Mensajes;