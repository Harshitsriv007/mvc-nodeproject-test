// routes/person.routes.js
import express from "express";
const router = express.Router();

import personController from "../controllers/person.controller.js";

router.post("/", personController.create);
router.get("/", personController.getAll);
router.get("/:id", personController.getOne);
router.put("/:id", personController.update);
router.delete("/:id", personController.delete);

export default router;
