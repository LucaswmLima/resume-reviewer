import express from "express";
import jobRoute from "./routes/jobRoute";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", jobRoute);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
