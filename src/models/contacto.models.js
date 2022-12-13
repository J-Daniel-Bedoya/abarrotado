const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     register:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Jose Daniel
 *         email:
 *           type: string
 *           example: josedaniel37@gmail.com
 *         affair:
 *           type: string
 *           example: Quiero hablar contigo
 *         message:
 *           type: string
 *           example: Estoy muy interesado en tu potencial
 */

const Contacto = db.define(
  "contacto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    affair: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

module.exports = Contacto;