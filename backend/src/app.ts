import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import formRoutes from "./routes/form.routes";
import { notFound } from "./middleware/notFound";
import { errorHandler } from "./middleware/errorHandler";
import { swaggerUi, swaggerDocument } from "./config/swagger";
import { successResponse } from "./utils/apiResponse";

const app = express();

app.use(cors());

app.use(
  helmet({
    crossOriginOpenerPolicy: false,
    originAgentCluster: false,
    strictTransportSecurity: false,
    contentSecurityPolicy: false,
  })
);

app.use(morgan("dev"));
app.use(express.json());

// Health
app.get("/api/v1/health", (_, res) => {
  res.status(200).json(
    successResponse("API is healthy.", {
      status: "Healthy",
      application: "FormFlow",
      version: "1.0.0",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    })
  );
});

// OpenAPI JSON
app.get("/api/v1/openapi.json", (_, res) => {
  res.json(swaggerDocument);
});

// Swagger
app.use(
  "/api/v1/docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

// API routes
app.use("/api/v1/forms", formRoutes);

// MUST BE LAST
app.use(notFound);
app.use(errorHandler);

export default app;