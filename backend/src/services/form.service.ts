import prisma from "../config/prisma";

export interface CreateFormInput {
  name: string;
  email: string;
  message: string;
}

export async function createForm(data: CreateFormInput) {
  return prisma.submission.create({
    data,
  });
}

export async function getForms() {
  return prisma.submission.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}