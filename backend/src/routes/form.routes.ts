import { Router } from "express";

import {
  submitForm,
  getAllForms,
} from "../controllers/form.controller";

const router = Router();

/**
 * @openapi
 * /forms:
 *   get:
 *     summary: Get all submissions
 *     tags:
 *       - Forms
 *     responses:
 *       200:
 *         description: List all submissions
 */
router.get("/", getAllForms);

/**
 * @openapi
 * /forms:
 *   post:
 *     summary: Submit a new form
 *     tags:
 *       - Forms
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               message:
 *                 type: string
 *                 example: Hello FormFlow!
 *     responses:
 *       201:
 *         description: Form submitted successfully
 */
router.post("/", submitForm);

export default router;