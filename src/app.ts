import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import lobbyRoutes from "./routes/lobbyRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/lobby", lobbyRoutes);

export default app;
