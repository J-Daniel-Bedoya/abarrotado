const express = require("express");
const router = express.Router();
const { createContacto } = require("../controllers");

/**
 * @openapi
 * /api/v1/contacto:
 *   post:
 *     summary: Registering a new contact
 *     tags: [Create Contacto]
 *     requestBody:
 *       description: Registering a new contact from the portfolio
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       201:
 *         description: created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/register"
 */

router.post("/contacto", createContacto);


module.exports = router;