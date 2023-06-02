const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require('../../middelwares')

const schemas = require('../../schemas/contacts')

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById );

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.put("/:id", validateBody(schemas.addSchema), ctrl.editById);

router.delete("/:id", ctrl.deleteById);

module.exports = router;
