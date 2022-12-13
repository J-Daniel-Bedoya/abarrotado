const { Contacto } = require("../models");


class ContactoServices {
  static async create(contacto) {
    try {
      const result = await Contacto.create(contacto);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ContactoServices;