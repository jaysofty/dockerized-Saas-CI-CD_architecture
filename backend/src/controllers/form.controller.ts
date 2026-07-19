import { Request, Response } from "express";

import * as formService from "../services/form.service";
import { successResponse } from "../utils/apiResponse";
import { createFormSchema } from "../types/form.schema";

export async function submitForm(
  req: Request,
  res: Response
) {
  const validation = createFormSchema.safeParse(req.body);

  if (!validation.success) {
    return res.status(400).json({
      errors: validation.error.flatten(),
    });
  }

  const form = await formService.createForm(
    validation.data
  );

  return res.status(201).json(
  successResponse(
    "Form submitted successfully.",
    form
  )
);
}

export async function getAllForms(
  req: Request,
  res: Response
) {
  const forms = await formService.getForms();

  return res.status(200).json(
  successResponse(
    "Forms retrieved successfully.",
    forms,
    forms.length
  )
);
}