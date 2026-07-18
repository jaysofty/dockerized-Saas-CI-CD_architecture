import { Router } from "express";

import {
  submitForm,
  getAllForms,
} from "../controllers/form.controller";

const router = Router();

router.get("/", getAllForms);

router.post("/", submitForm);

export default router;