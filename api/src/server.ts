import express from "express";
import jobRoute from "./routes/jobRoute";
import cors from 'cors';

const app = express();
const PORT = 3000;

const allowedOrigins = [
  "https://resume-keyword-reviewer.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000"
];

app.use(cors({
  origin: function(origin, callback){
    // permitir requisições sem origin (como Postman)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true // se usar cookies ou autenticação
}));

app.use(express.json());
app.use("/api", jobRoute);

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
