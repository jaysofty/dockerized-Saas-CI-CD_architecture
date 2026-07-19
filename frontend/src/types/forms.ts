export interface FormSubmission {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export interface NewForm {
  name: string;
  email: string;
  message: string;
}