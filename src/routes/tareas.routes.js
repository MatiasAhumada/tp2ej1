import { Router } from "express";
import {
  borrarTarea,
  crearTarea,
  editarTarea,
  listarTarea,
  obtenerTarea,
} from "../controllers/tareas.controllers";

const router = Router();

router.route("/tareas")
.get(listarTarea)
.post(crearTarea);

router.route("/tareas/:id")
.get(obtenerTarea)
.put(editarTarea)
.delete(borrarTarea);

export default router;
