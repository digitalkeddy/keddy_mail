import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoute from "./routes/contactRoutes.js";
// const lectureRoutes = require('./routes/lecture.routes');
// import lectureRoutes from './routes/lecture.routes';
dotenv.config();
const app = express();

// app.use(cors());

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}))
// app.options('*', cors());
app.options(/.*/, cors());
app.use(express.json());
// app.use('/api/v1/lectures', lectureRoutes);
// DB CONNECT
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Backend Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on " + PORT));
