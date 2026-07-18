import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import formRoutes from "./routes/form.routes";
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));
app.use(express.json());

app.get("/api/health", (_, res) => {
  res.json({
    status: "Healthy",
    application: "FormFlow",
    version: "1.0.0",
    timestamp: new Date(),
  });
});

app.use("/api/forms", formRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;