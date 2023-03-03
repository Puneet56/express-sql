import { config } from "dotenv";
import express from "express";
import todosRouter from "../routes/todos";

config();

const app = express();
app.use(express.json());

app.use("/todos", todosRouter);

export default app;
