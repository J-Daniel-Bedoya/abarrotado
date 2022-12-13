const { ContactoServices } = require("../services");
const transporter = require("../utils/mailter");
const contactoTemplate = require("../templates/contacto");

const createContacto = async (req, res, next) => {
  try {
    const newContacto = req.body;
    const result = await ContactoServices.create(newContacto);
    res.status(201).json(result);

    const email = "jbedoyachavarriaga@gmail.com"
    transporter.sendMail({
      from: "<jbedoyachavarriaga@gmail.com>",
      to: email,
      subject: "Bienvenido Contacto",
      text: `Hola ${result.name} bienvenido a la mejor tienda de productos online`,
      html: contactoTemplate(result.name, result.email, result.affair, result.message),
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};


module.exports = {
  createContacto,
};
