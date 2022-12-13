const { Usuario, Mensajes } = require("../models");

class MensajesServices {

  static async crearRegistro(body) {
    try {
      const result = await Usuario.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async createMensaje(id, body) {
    try {
      const userId = Number(id);
      const { mensaje } = body;
      const result = await Mensajes.create({
        mensaje,
        usuarioId: userId,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getMensaje(id) {
    try {
      const result = await Usuario.findOne({
        where: { id },
        attributes: {
          exclude: ["password"]
        },
        include: {
          model: Mensajes,
          as: "mensajes",
          attributes: ["mensaje"]
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = MensajesServices;
