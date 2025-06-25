import express from "express";
import jobRoute from "./routes/jobRoute";
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'https://resume-keyword-reviewer.vercel.app',
  credentials: true,
}));

app.use(express.json());
app.use("/api", jobRoute);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
