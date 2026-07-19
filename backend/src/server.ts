import app from "./app";

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 FormFlow API running on http://localhost:${PORT}/api/v1/docs`
  );
});