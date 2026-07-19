import fs from "fs";
import path from "path";
import YAML from "yaml";
import swaggerUi from "swagger-ui-express";

const filePath = path.join(process.cwd(), "docs", "openapi.yaml");

console.log("Swagger file:", filePath);

const file = fs.readFileSync(filePath, "utf8");

console.log("========== OPENAPI FILE ==========");
console.log(file);
console.log("=================================");

const swaggerDocument = YAML.parse(file);

console.log("Parsed paths:");
console.log(swaggerDocument.paths);

export { swaggerUi, swaggerDocument };